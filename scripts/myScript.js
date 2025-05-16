//game settings
const GAME={
  points:0,
  answer:"",
  streak:0
}

//local database
const db=JSON.parse(localStorage.getItem('database'))||{
  name:null,
  level:0,
  points:0,
  answered:[],
  visited:false,
  theme:"light"
}

//redirection
if(!db.name && !db.visited){
  window.location.href="welcome.html"
}
//DOM elements
const nameDiv=document.getElementById('name');
const pointsDiv=document.getElementById('points');
const levelDiv=document.getElementById('level');
const wordDiv=document.getElementById('words');
const inputDiv=document.getElementById('inputs')
const deleteBtn=document.getElementById('delete')
const submitButton=document.getElementById('submit')
const lettersParent=document.getElementById('letters')
const warnings=document.getElementById('warnings')

function loadDashboard(){
  nameDiv.textContent=db.name;
  pointsDiv.textContent=db.points;
  levelDiv.textContent=db.level+1
}

function updateDatabase(){
  localStorage.setItem('database',JSON.stringify(db))
}
function generateButtons(){
  lettersParent.innerHTML=""
  data[db.level].letters.forEach((letter)=>{
    const btn=document.createElement('button');
    btn.className="letter emboss border-0 m-2 text-white bold rounded";
    btn.textContent=letter
    btn.style.backgroundColor=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
    lettersParent.appendChild(btn);
    btn.style.width = "50px";
    btn.style.height = "50px";
    btn.style.fontSize = "1.5rem";
    
    
    //adding event listener
    btn.addEventListener('click',()=>{
   if(GAME.answer.length<10) 
        GAME.answer+=letter;
      inputs.textContent=GAME.answer
    })
  })
}

function checkAnswer() {
  const answer = GAME.answer.toLowerCase();
  
  if(answer.length > 2) {
    if(data[db.level].words.includes(answer)) {
      if(!db.answered.includes(answer)) {
        // Calculate base points
        const pointsEarned = answer.length * 10;
        
        // STREAK BONUS: Add 5% bonus per consecutive correct answer
        const streakBonus = Math.floor(pointsEarned * (GAME.streak * 0.05));
        const totalPoints = pointsEarned + streakBonus;
        
        db.points += totalPoints;
        GAME.points += totalPoints;
        GAME.streak++; // Increment streak
        
        // Modify success message to show streak
        let successMsg = `Well done! ${answer} (+${totalPoints}pts)`;
        if(GAME.streak > 1) {
          successMsg += ` 🔥 Streak x${GAME.streak}`;
        }
        

        // Check if level should advance (found at least 50% of words)
        const totalWords = data[db.level].words.length;
        if(db.answered.length >= Math.ceil(totalWords * 0.5)){
          db.level = (db.level + 1) % data.length; // Loop back to first level after last
          db.answered = [];
          renderSuccess(`Level Complete! Advancing to level ${db.level + 1}`);
          generateButtons()
          showCorrectedWords()
        }else{
        
        renderSuccess(successMsg);
        }
        
        db.answered.push(answer);
        
        // Level progression logic...
        updateDatabase();
      } else {
        renderInfo(`Oops! ${answer} is already answered`);
        GAME.streak = 0; // Reset streak on duplicate
      }
    } else {
      renderError(`${answer} is incorrect`);
      db.points = Math.max(0, db.points - 5);
      GAME.streak = 0; // Reset streak on wrong answer
      updateDatabase();
    }
    
    // Clear input
    GAME.answer = "";
    inputs.textContent = GAME.answer;
    showCorrectedWords();
  } else {
    renderError("Word must be at least 3 letters long");
  }
}
function showCorrectedWords(){
  wordDiv.innerHTML=""
  db.answered.forEach((answer)=>{
      const btn=document.createElement('button');
    btn.className="bold btn btn-lg emboss border-0 m-1 text-white rounded";
    btn.textContent=answer;
    btn.style.fontFamily="bold"
    btn.style.backgroundColor=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
    wordDiv.appendChild(btn);
  })
  loadDashboard()
}


// Add this with your other DOM element selectors at the top
const shuffleBtn = document.getElementById('shuffle');

// Shuffle function (Fisher-Yates algorithm)
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Shuffle button click handler
function shuffleLetters() {
  // Get current letters and shuffle them
  const currentLetters = data[db.level].letters;
  const shuffledLetters = shuffleArray(currentLetters);
  
  // Update the display
  lettersParent.innerHTML = "";
  shuffledLetters.forEach((letter) => {
    const btn = document.createElement('button');
    btn.className = "letter emboss border-0 m-2 text-white bold rounded";
    btn.textContent = letter;
    btn.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    btn.style.width = "50px";
    btn.style.height = "50px";
    btn.style.fontSize = "1.5rem";
    
    // Reattach click event
    btn.addEventListener('click', () => {
      if (GAME.answer.length < 10) {
        GAME.answer += letter;
        inputs.textContent = GAME.answer;
      }
    });
    
    lettersParent.appendChild(btn);
  });
  
  // Visual feedback
  lettersParent.style.animation = "shake 0.5s";
  setTimeout(() => {
    lettersParent.style.animation = "";
  }, 500);
}

// Add with other DOM selectors
const helpBtn = document.getElementById('help');

function getRandomUnfoundWord() {
  const foundWords = db.answered;
  const allWords = data[db.level].words;
  const unfoundWords = allWords.filter(word => !foundWords.includes(word));
  
  return unfoundWords.length > 0 
    ? unfoundWords[Math.floor(Math.random() * unfoundWords.length)]
    : null;
}

function provideHelp() {
  // Check if player can afford help
  if (db.points < 100) {
    renderError("You need at least 100 points for help");
    return;
  }

  const nextWord = getRandomUnfoundWord();
  
  if (!nextWord) {
    renderInfo("You've already found all words!");
    return;
  }

  // Deduct points
  db.points -= 100;
  updateDatabase();
  loadDashboard();

  // Reveal the word with animation
  const helpDisplay = document.createElement('div');
  helpDisplay.className = "help-word animate__animated animate__fadeIn";
  helpDisplay.innerHTML = `
    <span style="opacity:0.5">Next word:</span> 
    <strong>${nextWord.split('').map(l => l.toUpperCase()).join(' ')}</strong>
  `;
  
  warnings.innerHTML = '';
  warnings.appendChild(helpDisplay);

  // Remove after delay
  setTimeout(() => {
    helpDisplay.classList.add('animate__fadeOut');
    setTimeout(() => helpDisplay.remove(), 3000);
  }, 5000);
}
// DOM element
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Initialize theme on load
function initTheme() {
  const savedTheme = db.theme || 'light';
  setTheme(savedTheme);
  
}

// Set theme (light/dark)
function setTheme(theme) {
  db.theme = theme;
  localStorage.setItem('database', JSON.stringify(db));
  
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    themeToggle.innerHTML = '☀️ Light Mode';
    document.querySelectorAll('small').forEach((small)=>{
      small.style.color="black"
    })
  } else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    themeToggle.innerHTML = '🌙 Dark Mode';
        document.querySelectorAll('small').forEach((small)=>{
      small.style.color="white"
    })

  }
}

// Toggle between themes
function toggleTheme() {
  const newTheme = db.theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

// Add event listener
themeToggle.addEventListener('click', toggleTheme);

// Call this on page load
initTheme();
// Add event listener
helpBtn.addEventListener('click', provideHelp);

// Add event listener (put this with your other event listeners)
shuffleBtn.addEventListener('click', shuffleLetters);

//initialising 
showCorrectedWords()
generateButtons()
loadDashboard()
//eventlistener
submitButton.addEventListener('click',checkAnswer)
deleteBtn.addEventListener('click', () => {
  GAME.answer = GAME.answer.slice(0, -1); // Remove last character
  inputs.textContent = GAME.answer;
});

//parameterized
function renderError(text){
  warnings.innerHTML=""
  const item=document.createElement('div')
  item.className="alert w-50 alert-danger text-danger";
  item.textContent=text 
  warnings.appendChild(item)
  

}
function renderSuccess(text){
  warnings.innerHTML=""
  const item=document.createElement('div')

  item.className = `alert w-50 alert-success text-success ${GAME.streak > 2 ? 'pulse-animation' : ''}`;
    item.textContent=text 
  warnings.appendChild(item)
  
}
function renderInfo(text){
  warnings.innerHTML=""
  const item=document.createElement('div')
  item.className="alert w-50 bg-dark alert-danger text-white";
  item.textContent=text 
  warnings.appendChild(item)

}
renderSuccess(`Welcome Back ${db.name}`)

function resetGame() {
  if(confirm("Are you sure you want to reset your progress?")) {
    localStorage.removeItem('database');
    location.reload(); // Refresh to go to welcome page
  }
}
