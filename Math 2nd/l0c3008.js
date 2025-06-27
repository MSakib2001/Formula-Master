//Math 2nd Paper
// % Bengali % //
l0c3001
//template

"l0c3008qX":{
    rightno: option1,
    question: "",  
    attribute:"", 
    op1:"",  
    op2:"", 
    op3:"", 
    op4:"", 
    proof:"\n\n "
    pic: "",         
    picon: false ,
    picproof: require('../assets/Picturename.png'), },

"l0c3008qX":{
    rightno: option1,
    question: "",  
    attribute:"", 
    op1:"",  
    op2:"", 
    op3:"", 
    op4:"", 
    proof:"\n\n "
    pic: "",         
    picon: false ,
    picproof: "",},


//Chapter 8

//Starting here

"l0c3008q1": {
    rightno: option1,
    question: "কোনটি সঠিক ভেক্টরের সামান্তরিকের সূত্র?",
    attribute: "বিস্তারিত জানতে প্রশ্নের উপর চাপুন",
    op1: "R̅ = P̅ + Q̅",
    op2: "R̅ = P̅ - Q̅",
    op3: "Q̅ = P̅ + R̅",
    op4: "P̅ = R̅ + Q̅",
    proof: "\n\n  ভেক্টরের সামান্তরিকের সূত্ এভাবে সংজ্ঞায়িত \n\n R̅ = P̅ + Q̅",
    pic: require("../assets/vector par 1.png"),
    picon: true,
    picproof: require("../assets/vector par 1.png"),
  },


"l0c3008q2": {
    rightno: option4,
    question: "ভেক্টরের সামান্তরিকের সূত্রে সঠিক ভেক্টর লব্ধির মান কোনটি?",
    attribute: "বিস্তারিত জানতে প্রশ্নের উপর চাপুন",
    op1: "R = √(P²+Q²+2PQcosθ)",
    op2: "R = √(P²+Q²+2PQsinα)",
    op3: "R = (P²+Q²+2PQcosα)",
    op4: "R = √(P²+Q²+2PQcosα)",
    proof: "\n\n CD = AC sin α  বা    CD = Q sin α (as AC=OB=Q) \n\n AD = AC cos α  বা    AD = Q cos α and OA = P \n\n তাহলে , OC² = (P+Qcosα)² + (Qsinα)² \n\n or R² = P²+2PQcosα+Q²cos²α+Q²sin²α \n\n or R² = P²+2PQcosα+Q²(cos²α+sin²α) \n\n or R² = P²+Q²+2PQcosα [as cos²α+sin²α = 1 ] \n\n  সুতরাং ,  R = √(P²+Q²+2PQcosα)",
    pic: require("../assets/vector par 1.png"),
    picon: true,
    picproof: require("../assets/vector par 2.png"),
  },

  "l0c3008q3": {
    rightno: option3,
    question: "ভেক্টরের সামান্তরিকের সূত্রে সঠিক ভেক্টর লব্ধির দিক কোনটি ?",
    attribute: "[বিস্তারিত জানতে প্রশ্নের উপর চাপুন ]",
    op1: "tanθ = (Qcosα)/(P+Qsinα)",
    op2: "cosθ = (Qsinα)/(P+Qcosα)",
    op3: "tanθ = (Qsinα)/(P+Qcosα)",
    op4: "tanθ = (P+Qcosα)/(Qsinα)",
    proof:
      "\n\n tanθ = CD/OD = CD/(OA + AD) \n\n তাহলে, tanθ = (Qsinα)/(P+Qcosα)",
    pic: require("../assets/vector par 1.png"),
    picon: true,
    picproof: require("../assets/vector par 2.png"),
  },

  "l0c3008q4": {
    rightno: option4,
    question: "ভেক্টর লব্ধির সর্বোচ্চ মান?",
    attribute: "[বিস্তারিত জানতে প্রশ্নের উপর চাপুন ]",
    op1: "Rᴍₐₓ = P - Q",
    op2: "Rᴍₐₓ = Q - P",
    op3: "Rᴍₐₓ = P × Q",
    op4: "Rᴍₐₓ = P + Q",
    proof:
      "\n\n  R = √(P²+Q²+2PQcosα) \n\n আমরা জানি যে, cosα এর সর্বাধিক মান +1 হতে পারে  \n\n যদি cosα = 1    তাহলে  α = 0° \n\n  সুতরাং  R²ᴍₐₓ = (P²+Q²+2PQcos0°) \n\n বা R²ᴍₐₓ = P²+Q²+2PQ \n\n বা R²ᴍₐₓ = (P+Q)² \n\n সুতরাং Rᴍₐₓ = P + Q",
    pic: require("../assets/vector par 2.png"),
    picon: true,
    picproof: require("../assets/vector par 1.png"),
  },

  "l0c3008q5": {
    rightno: option2,
    question: "ভেক্টর লব্ধির সর্বনিম্ন মান ?",
    attribute: "[বিস্তারিত জানতে প্রশ্নের উপর চাপুন ]",
    op1: "Rᴍᵢɴ = P + Q",
    op2: "Rᴍᵢɴ = P ~ Q",
    op3: "Rᴍᵢɴ = P × Q",
    op4: "Rᴍᵢɴ = P / Q",
    proof:
      "\n\n  R = √(P²+Q²+2PQcosα) \n\n আমরা জানি যে cosα এর সর্বনিম্ন মান -1 হতে পারে   \n\n যদি cosα = -1    তাহলে  α = 180° \n\n সুতরাং R²ᴍᵢɴ = (P²+Q²+2PQcos180°) \n\n বা R²ᴍᵢɴ = P²+Q²-2PQ \n\n বা R²ᴍᵢɴ = (P~Q)² \n\n সুতরাং Rᴍᵢɴ = P ~ Q",
    pic: require("../assets/vector par 2.png"),
    picon: true,
    picproof: require("../assets/vector par 1.png"),
  },

  "l0c3008q6": {
    rightno: option3,
    question: "প্রদত্ত ক্ষেত্রে ভেক্টরের (R̅) সঠিক উপাংশগুলো কি কি ?",
    attribute: "[বিস্তারিত জানতে প্রশ্নের উপর চাপুন ]",
    op1: "X = cosα \n Y = sinα",
    op2: "Y = Rcosα \n X = Rsinα",
    op3: "X = Rcosα \n Y = Rsinα",
    op4: "X = R/cosα \n Y = R/sinα",
    proof:
      "\n\n ভেক্টর বিভাজন এমন একটি প্রক্রিয়া যেখানে একটি ভেক্টর দুই বা ততোধিক ছোট ভেক্টরগুলিতে বিভক্ত হয় এবং বিভক্ত অংশগুলোকে মূল ভেক্টরের উপাংশ বলে \n\n cosα = OA / OC \n\n বা OA = OCcosα \n\n বা X = OCcosα \n\n আবার, sinα = AC / OC \n\n বা  AC = OCsinα \n\n বা   Y = Rsinα",
    pic: require("../assets/vector res 1.png"),
    picon: true,
    picproof: require("../assets/vector res 1.png"),
  },

  "l0c3008q7": {
    rightno: option2,
    question: "প্রদত্ত ক্ষেত্রে ভেক্টরের (R̅) সঠিক উপাংশগুলো কি কি ?",
    attribute: "[বিস্তারিত জানতে প্রশ্নের উপর চাপুন ]",
    op1: "X = (sinβ)/sin(α+β) \n Y = (sinα)/sin(α+β)",
    op2: "X = (Rsinβ)/sin(α+β) \n Y = (Rsinα)/sin(α+β)",
    op3: "X = sin(α+β)/(Rsinβ) \n Y = sin(α+β)/(Rsinα)",
    op4: "X = (Rsinα)/sin(α+β) \n Y = (Rsinβ)/sin(α+β)",
    proof:
      "\n\n যখন উপাংশগুলো পরস্পর লম্ব হয় না ,R̅ এবং  X̅ এর মধ্যে কোণ α  এবং  R̅ এবং Y̅ এর মধ্যে কোণ β তাহলে  \n\n X = (Rsinβ) / sin(α+β) \n\n Y = (Rsinα) / sin(α+β)",
    pic: require("../assets/vector res 2.png"),
    picon: true,
    picproof: require("../assets/vector res 2.png"),
  },



"l0c3008q8": {
    rightno: option4,
    question: "দুটি ভেক্টর যদি P=Q এবং তাদের মধ্যে কোণ α হয় তবে এই দুটি ভেক্টরের লব্ধি নির্ণয় করুন।",
    attribute: "",
    op1: "P cos α",
    op2: "P cos α/2",
    op3: "2P cos α",
    op4: "2P cos α/2",
    proof: "\n\n লব্ধির সূত্র থেকে আমরা জানি,\n\n R =  √(P² + Q² + 2 . P .Q . cos α) \nn\n =  √(P² + P² + 2 . P .P . cos α) \n\n = √(2P² + 2 . P²  cos α) \n\n =√{2P²(1 + cos α)} \n\n =√{2P² . 2 cos² . α/2} \n\n =2P cos α/2",
    pic: "",
    picon: false,
    picproof: "", 
},



"l0c3008q9": {
    rightno: option4,
    question: "এই দুটি ভেক্টরের লব্ধি কি?",
    attribute: "বিস্তারিত তথ্যসহ চিত্রের জন্য প্রশ্ন প্যানেল চাপুন",
    op1: "(P² - Q²)",
    op2: "√(P² - Q²)",
    op3: "√(P² + Q²)",
    op4: "√(Q² - P²)",
    proof: "\n\n পিথাগোরাসের সূত্র থেকে, \n\n Q² = P² + R² \n\n সুতরাং, R = √ (Q² - P²)",
    pic: "চিত্র ০৮ জরুরী",
    picon: true,
    picproof: "৮ ব্যাখ্যা সহ", 
},


"l0c3008q10": {
    rightno: option4,
    question: "cosα এর মানটি নির্ণয় করুন?",
    attribute: "বিস্তারিত তথ্যসহ চিত্রের জন্য প্রশ্ন প্যানেল চাপুন",
    op1: "q/p",
    op2: "p/q",
    op3: "-q/p",
    op4: "-p/q",
    proof: "\n\n লব্ধির সূত্র থেকে আমরা জানি, \n\n tanθ = Qsinα/(P + Qcosα) \n\n বা, tan90ᵒ  = Qsinα/(P + Qcosα) \n\n বা,1/0  = Qsinα/(P + Qcosα) \n\n বা, (P + Qcosα) = 0 \n\n সুতরাং, cosα =  –p/q",
    pic: "Fig 8 must. need to be added",
    picon: true,
    picproof: "fig 8 w/ explanation", 
},


"l0c3008q11": {
    rightno: option2,
    question: "লম্বাংশের উপপাদ্য ব্যবহার করে Fcosθ এর মানটি নির্ণয় করুন।",
    attribute: "বিস্তারিত তথ্যসহ চিত্রের জন্য প্রশ্ন প্যানেল চাপুন",
    op1: "Pcosθ₁ - Qcosθ₂",
    op2: "Pcos θ₁ + Qcosθ₂",
    op3: "Psinθ₁ + Qsinθ₂",
    op4: "Psinθ₁ - Qsinθ₂",
    proof: "\n\n পাঠ্যবই থেকে দেখুন",
    pic: "Fig. need",
    picon: true,
    picproof: "", 
},



"l0c3008q12": {
    rightno: option1,
    question: "P, Q ও R ভেক্টরের লব্ধি F নির্ণয় করুন।",
    attribute: "বিস্তারিত তথ্যসহ চিত্রের জন্য প্রশ্ন প্যানেল চাপুন",
    op1: "√[P² + Q² + R² + 2PQcosα + 2QRcosβ + 2RPcosγ]",
    op2: "√[P + Q + R + 2PQcosα + 2QRcosβ + 2RPcosγ]",
    op3: "√[P² - Q² - R² + 2PQcosα + 2QRcosβ + 2RPcosγ]",
    op4: "√[P² + Q² + R² + 2PQsinα + 2QRsinβ + 2RPsinγ]",
    proof: "\n\n x অক্ষের দিকে লম্বাংশের উপপাদ্য ব্যবহার করে, \n\n Fcosθ = P + Qcosα + Rcosγ ……(1) \n\n X অক্ষের লম্বের দিকে লম্বাংশের উপপাদ্য ব্যবহার করে, \n\n Fsinθ = Qsinα - Rsinγ ………(2) \n\n (1)² + (2)²…… \n\n F = √[P² + Q² + R² + 2PQcosα + 2QRcosβ +2RPcosγ]",
    pic: "Fig. need",
    picon: true,
    picproof: "Fig. 10 w/ explanation", 
},


"l0c3008q13": {
    rightno: option3,
    question: "সাম্যাবস্থার লামির সূত্র অনুসারে নিচের কোন উক্তিটি সঠিক?",
    attribute: "বিস্তারিত তথ্যসহ চিত্রের জন্য প্রশ্ন প্যানেল চাপুন",
    op1: "P/sinγ = Q/sinα = R/sinβ",
    op2: "P/sinβ = Q/sinα = R/sinγ",
    op3: "P/sinα = Q/sinβ = R/sinγ",
    op4: "P/sinγ = Q/sinβ = R/sinα",
    proof: "\n\n পাঠ্যবই থেকে দেখুন্‌",
    pic: "",
    picon: false,
    picproof: "", 
},


"l0c3008q14": {
    rightno: option4,
    question: "যদি P এবং Q একইদিকে দুটি সমান্তরাল বল হয়; তাহলে তাদের লব্ধি কী?",
    attribute: "",
    op1: "PQ",
    op2: "Q - P",
    op3: "P - Q",
    op4: "P + Q",
    proof: "\n\n দুইটি ভেক্টরের লব্ধির সূত্র থেকে, \n\n R = √[P² + Q² +2PQ cos α \n\n যেহেতু এগুলো সমান্তরাল বল, তাই α এর মান হবে 0⁰ \n\n সুতরাং, R = √[ P² + Q² +2PQcos0⁰ ] \n\n = P + Q",
    pic: "",
    picon: false,
    picproof: "", 
},


"l0c3008q15": {
    rightno: option1,
    question: "যদি P এবং Q দুটি একইদিকে নির্দেশিত সমান্তরাল শক্তি যথাক্রমে A  এবং B বিন্দুতে কাজ করে এবং তাদের লব্ধি F, C বিন্দুতে কাজ করে থাকে; নিচের কোন বিবৃতি সঠিক?",
    attribute: "বিস্তারিত তথ্যসহ চিত্রের জন্য প্রশ্ন প্যানেল চাপুন",
    op1: "P . AC = Q . BC",
    op2: "Q . AC = P . BC",
    op3: "P. AB = Q . BC",
    op4: "P . AC = Q . AB",
    proof: "\n\n পাঠ্যবই থেকে দেখুন",
    pic: "Fig 12 must need",
    picon: true,
    picproof: "fig 12 w/ explanation", 
},


"l0c3008q16": {
    rightno: option4,
    question: "যদি P এবং Q দুটি বিপরীত দিকে নির্দেশিত সমান্তরাল শক্তি যথাক্রমে A  এবং B বিন্দুতে কাজ করে এবং তাদের লব্ধি F, C বিন্দুতে কাজ করে থাকে; নিচের কোন বিবৃতি সঠিক?",
    attribute: "বিস্তারিত তথ্যসহ চিত্রের জন্য প্রশ্ন প্যানেল চাপুন",
    op1: "P . AC = Q . AB",
    op2: "Q . AC = P . BC",
    op3: "P. AB = Q . BC",
    op4: "P . AC = Q . BC",
    proof: "\n\n পাঠ্যবই থেকে দেখুন",
    pic: "Fig 12 must need",
    picon: true,
    picproof: "fig 12 w/ explanation", 
},


"l0c3008q17": {
    rightno: option1,
    question: "একটি জোড়ে, দুটি বলের মান হল P এবং তাদের কাজের রেখার দুরত্ব r ; জোড়টির মোমেন্ট কত?",
    attribute: "",
    op1: "P . r",
    op2: "P / r",
    op3: "P + r",
    op4: "P - r",
    proof: "\n\n সংজ্ঞা হতে, একটি কাপলের মোমেন্ট হল একটি শক্তির মাত্রা এবং তাদের ক্রিয়া রেখার মধ্যে লম্ব দূরত্বের গুণফল।",
    pic: "",
    picon: false,
    picproof: "", 
},



"l0c3008q18": {
    rightno: option1,
    question: "একটি F বল একটি দিকে কাজ করছে এবং একটি যুগল বা কাপল কে বলের সাথে যুক্ত করে দেয়া হল। বলের স্থানচ্যুতি বের করুন।",
    attribute: "ধরি, যুগল বা কাপলের মোমেন্ট = P",
    op1:"P/F",
    op2: "F/P",
    op3: "F . P",
    op4: "F + P",
    proof: "\n\n পাঠ্যবই থেকে দেখুন",
    pic: "",
    picon: false,
    picproof: "",
    },


"l0c3008q19": {},
