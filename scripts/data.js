const data = [
  {
    letters: ["M", "T", "A", "L", "E"],
    words: ["male", "mate", "late", "meal", "teal", "metal", "tale", "meat", "team", "lame", "malt", "tame", "elm", "ate"]
  },
  {
    letters: ["T", "S", "E", "O", "N"],
    words: ["tone", "notes", "sent", "ten", "net", "stone", "nest", "note", "set", "son", "ones", "tons", "onset"]
  },
  {
    letters: ["F", "I", "S", "H", "T"],
    words: ["fish", "fit", "sit", "fist", "his", "shift", "hits", "sift", "ifs"]
  },
  {
    letters: ["R", "T", "L", "A", "E"],
    words: ["rate", "late", "teal", "let", "are", "alert", "alter", "real", "tale"]
  },
  {
    letters: ["C", "A", "T", "P", "S"],
    words: ["cat", "cap", "cast", "pat", "act", "past", "pact", "taps", "spat"]
  },
  {
    letters: ["D", "G", "O", "S", "T"],
    words: ["dog", "dot", "god", "tog", "dots", "dogs", "gods", "sod", "got"]
  },
  {
    letters: ["R", "D", "I", "N", "A"],
    words: ["rain", "raid", "ran", "din", "and", "drain", "rad", "rid", "aid"]
  },
  {
    letters: ["T", "V", "E", "N", "E"],
    words: ["even", "vent", "net", "ten", "event", "vee", "eve"]
  },
  {
    letters: ["M", "O", "E", "S", "U"],
    words: ["mouse", "muse", "use", "some", "sumo", "emus", "moes"]
  },
  {
    letters: ["E", "O", "R", "S", "H"],
    words: ["horse", "hose", "rose", "shore", "hero", "hoes", "hers"]
  },
  {
    letters: ["Y", "L", "A", "P", "S"],
    words: ["play", "lays", "pay", "say", "slay", "spay", "ply", "pal"]
  },
  {
    letters: ["I", "B", "R", "D", "S"],
    words: ["bird", "bids", "rid", "sir", "ribs", "dibs", "bris"]
  },
  {
    letters: ["C", "S", "D", "E", "O"],
    words: ["code", "does", "ode", "docs", "sec", "cod", "sod"]
  },
  {
    letters: ["F", "A", "M", "I", "L"],
    words: ["fail", "mail", "flam", "film", "mila", "lima", "aim"]
  },
  {
    letters: ["T", "S", "E", "E", "R"],
    words: ["tree", "tees", "see", "rest", "seer", "reset", "steer"]
  },
  {
    letters: ["S", "U", "N", "F", "L"],
    words: ["sun", "fun", "flus", "flu", "nus", "uns", "funs"]
  },
  {
    letters: ["R", "I", "V", "E", "R"],
    words: ["river", "rive", "veer", "ever", "ire"]
  },
  {
    letters: ["P", "A", "S", "T", "E"],
    words: ["paste", "pate", "taps", "east", "peas", "apes", "spat"]
  },
  {
    letters: ["M", "E", "T", "A", "L"],
    words: ["metal", "mate", "late", "meat", "malt", "team", "tame"]
  },
  {
    letters: ["B", "C", "H", "A", "E"],
    words: ["beach", "each", "bach", "ache", "cab", "ace"]
  },
  {
    letters: ["L", "K", "O", "A"],
    words: ["lake", "oak", "koala", "alk", "koa"]
  },
  {
    letters: ["T", "A", "E", "L", "S"],
    words: ["teal", "late", "sale", "east", "tale", "seat", "stale"]
  },
  {
    letters: ["R", "O", "C", "K", "S"],
    words: ["rock", "sock", "cork", "ocks", "rocs", "cor"]
  },
  {
    letters: ["F", "T", "E", "C", "H"],
    words: ["fetch", "tech", "the", "chef", "eft", "het"]
  },
  {
    letters: ["N", "O", "T", "E", "S"],
    words: ["note", "tone", "sent", "not", "ten", "ones", "nets"]
  },
  {
    letters: ["M", "I", "S", "T", "Y"],
    words: ["mist", "misty", "my", "sit", "its", "sim", "tis"]
  },
  {
    letters: ["B", "U", "G", "L", "E"],
    words: ["bug", "lug", "glee", "leg", "glue", "blue", "bel"]
  },
  {
    letters: ["P", "L", "A", "Y", "R"],
    words: ["play", "pray", "lay", "ray", "pal", "par", "ply"]
  },
  {
    letters: ["C", "A", "R", "T", "S"],
    words: ["cart", "cast", "rat", "cat", "art", "arc", "scar"]
  },
  {
    letters: ["D", "E", "C", "O", "R"],
    words: ["decor", "code", "core", "do", "red", "cord", "rode"]
  },
  {
    letters: ["S", "T", "O", "R", "M"],
    words: ["storm", "most", "sort", "rots", "mots", "tom"]
  },
  {
    letters: ["G", "A", "M", "E", "S"],
    words: ["game", "mage", "mes", "age", "gem", "seam", "gas"]
  },
  {
    letters: ["L", "E", "A", "F", "Y"],
    words: ["leaf", "flea", "ale", "fly", "lay", "lea", "elf"]
  },
  {
    letters: ["R", "I", "N", "G", "S"],
    words: ["ring", "sing", "grin", "sin", "gin", "rig", "sir"]
  },
  {
    letters: ["T", "H", "E", "A", "M"],
    words: ["theme", "the", "meat", "mate", "tea", "heat", "hate"]
  },
  {
    letters: ["B", "O", "A", "R", "D"],
    words: ["board", "boar", "road", "oar", "broad", "bard", "bar"]
  },
  {
    letters: ["C", "O", "M", "E", "T"],
    words: ["comet", "come", "met", "cot", "me", "mote", "toe"]
  },
  {
    letters: ["S", "P", "R", "I", "N"],
    words: ["spin", "pins", "sin", "rin", "rips", "nip", "sip"]
  },
  {
    letters: ["F", "A", "I", "R", "S"],
    words: ["fair", "airs", "far", "sir", "firs", "arfs", "rif"]
  },
  {
    letters: ["H", "E", "A", "R", "T"],
    words: ["heart", "hear", "heat", "the", "are", "earth", "hate"]
  },
  {
    letters: ["M", "O", "R", "N", "G"],
    words: ["morn", "mong", "norm", "gong", "no", "rom", "mog"]
  },
  {
    letters: ["T", "A", "L", "E", "S"],
    words: ["tale", "teal", "late", "sale", "east", "slate", "stale"]
  },
  {
    letters: ["R", "E", "D", "O", "S"],
    words: ["redos", "rode", "does", "ode", "so", "red", "rose"]
  },
  {
    letters: ["P", "A", "S", "T", "E"],
    words: ["paste", "pate", "taps", "east", "peas", "apes", "spat"]
  },
  {
    letters: ["L", "I", "N", "K", "S"],
    words: ["link", "sink", "kin", "silk", "kiln", "nil", "ink"]
  },
  {
    letters: ["C", "A", "T", "C", "H"],
    words: ["catch", "cat", "act", "hat", "chat", "atch", "tach"]
  },
  {
    letters: ["D", "E", "W", "A", "R"],
    words: ["war", "ware", "wear", "draw", "ear", "raw", "dew"]
  }
];