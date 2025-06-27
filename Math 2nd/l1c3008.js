//Math 2nd Paper
//English
l1c3001
//template

"l1c3008qX":{
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

"l1c3008qX":{
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

"l1c3008q1": {
    rightno: option1,
    question: "Which one is the correct Parallelogram law of Vector?",
    attribute: "Press on this question panel for image with details",
    op1: "R̅ = P̅ + Q̅",
    op2: "R̅ = P̅ - Q̅",
    op3: "Q̅ = P̅ + R̅",
    op4: "P̅ = R̅ + Q̅",
    proof: "\n\n Defined as Vector Law of Parallelogram  \n\n R̅ = P̅ + Q̅",
    pic: require("../assets/vector par 1.png"),
    picon: true,
    picproof: require("../assets/vector par 1.png"),
  },



"l1c3008q2": {
    rightno: option4,
    question: "What is the magnitude of Resultant Vector in Parallelogram law of Vector?",
    attribute: "Press on question for details",
    op1: "R = √(P²+Q²+2PQcosθ)",
    op2: "R = √(P²+Q²+2PQsinα)",
    op3: "R = (P²+Q²+2PQcosα)",
    op4: "R = √(P²+Q²+2PQcosα)",
    proof:"\n\n CD = AC sin α  or    CD = Q sin α (as AC=OB=Q) \n\n AD = AC cos α  or    AD = Q cos α and OA = P \n\n Then, OC² = (P+Qcosα)² + (Qsinα)² \n\n or R² = P²+2PQcosα+Q²cos²α+Q²sin²α \n\n or R² = P²+2PQcosα+Q²(cos²α+sin²α) \n\n or R² = P²+Q²+2PQcosα [as cos²α+sin²α = 1 ] \n\n  So,  R = √(P²+Q²+2PQcosα)",
    pic: require("../assets/vector par 1.png"),
    picon: true,
    picproof: require("../assets/vector par 2.png"),
  },


"l1c3008q3": {
    rightno: option3,
    question: "Direction(θ) of Resultant Vector in Parallelogram law of Vector ?",
    attribute: "[Press on question for details]",
    op1: "tanθ = (Qcosα)/(P+Qsinα)",
    op2: "cosθ = (Qsinα)/(P+Qcosα)",
    op3: "tanθ = (Qsinα)/(P+Qcosα)",
    op4: "tanθ = (P+Qcosα)/(Qsinα)",
    proof:
      "\n\n tanθ = CD/OD = CD/(OA + AD) \n\n Then, tanθ = (Qsinα)/(P+Qcosα)",
    pic: require("../assets/vector par 1.png"),
    picon: true,
    picproof: require("../assets/vector par 2.png"),
  },


  "l1c3008q4": {
    rightno: option4,
    question: "Max magnitude of Resultant Vector?",
    attribute: "[Press on question for details]",
    op1: "Rᴍₐₓ = P - Q",
    op2: "Rᴍₐₓ = Q - P",
    op3: "Rᴍₐₓ = P × Q",
    op4: "Rᴍₐₓ = P + Q",
    proof:
      "\n\n  R = √(P²+Q²+2PQcosα) \n\n We know that the max value of cosα can be +1 \n\n If cosα = 1    then α = 0° \n\n  So R²ᴍₐₓ = (P²+Q²+2PQcos0°) \n\n or R²ᴍₐₓ = P²+Q²+2PQ \n\n or R²ᴍₐₓ = (P+Q)² \n\n so Rᴍₐₓ = P + Q",
    pic: require("../assets/vector par 2.png"),
    picon: true,
    picproof: require("../assets/vector par 1.png"),
  },

  "l1c3008q5": {
    rightno: option2,
    question: "Min magnitude of Resultant vector ?",
    attribute: "[Press on question for details]",
    op1: "Rᴍᵢɴ = P + Q",
    op2: "Rᴍᵢɴ = P ~ Q",
    op3: "Rᴍᵢɴ = P × Q",
    op4: "Rᴍᵢɴ = P / Q",
    proof:
      "\n\n  R = √(P²+Q²+2PQcosα) \n\n We know that the min value of cosα can be -1 \n\n If cosα = -1    then α = 180° \n\n So R²ᴍᵢɴ = (P²+Q²+2PQcos180°) \n\n or R²ᴍᵢɴ = P²+Q²-2PQ \n\n or R²ᴍᵢɴ = (P~Q)² \n\n so Rᴍᵢɴ = P ~ Q",
    pic: require("../assets/vector par 2.png"),
    picon: true,
    picproof: require("../assets/vector par 1.png"),
  },

  "l1c3008q6": {
    rightno: option3,
    question: "What are the correct Resolutions of Vector(R̅) in given case",
    attribute: "[Press on question for details]",
    op1: "X = cosα \n Y = sinα",
    op2: "Y = Rcosα \n X = Rsinα",
    op3: "X = Rcosα \n Y = Rsinα",
    op4: "X = R/cosα \n Y = R/sinα",
    proof:
      "\n\n Vector resolution is a process where one vector is broken down into two or more smaller vectors \n\n cosα = OA / OC \n\n or OA = OCcosα \n\n or X = OCcosα \n\n Again, sinα = AC / OC \n\n or  AC = OCsinα \n\n or   Y = Rsinα",
    pic: require("../assets/vector res 1.png"),
    picon: true,
    picproof: require("../assets/vector res 1.png"),
  },

  "l1c3008q7": {
    rightno: option2,
    question: "What are the correct Resolutions of Vector(R̅) in given case ?",
    attribute: "[Press on question for details]",
    op1: "X = (sinβ)/sin(α+β) \n Y = (sinα)/sin(α+β)",
    op2: "X = (Rsinβ)/sin(α+β) \n Y = (Rsinα)/sin(α+β)",
    op3: "X = sin(α+β)/(Rsinβ) \n Y = sin(α+β)/(Rsinα)",
    op4: "X = (Rsinα)/sin(α+β) \n Y = (Rsinβ)/sin(α+β)",
    proof:
      "\n\n When Resolutions are not perpendicular, Angle between R̅ and X̅ is α and Angle between R̅ and Y̅ is β Then \n\n X = (Rsinβ) / sin(α+β) \n\n Y = (Rsinα) / sin(α+β)",
    pic: require("../assets/vector res 2.png"),
    picon: true,
    picproof: require("../assets/vector res 2.png"),
  },



"l1c3008q8": {
    rightno: option4,
    question: "If two vectors P = Q and the angle between them is α, Find out the resultant of these two vectors.",
    attribute: "",
    op1: "P cos α",
    op2: "P cos α/2",
    op3: "2P cos α",
    op4: "2P cos α/2",
    proof: "\n\n From the formula of resultant we know that, \n\n R =  √(P² + Q² + 2 . P .Q . cos α) \nn\n =  √(P² + P² + 2 . P .P . cos α) \n\n = √(2P² + 2 . P²  cos α) \n\n =√{2P²(1 + cos α)} \n\n =√{2P² . 2 cos² . α/2} \n\n =2P cos α/2",
    pic: "",
    picon: false,
    picproof: "", 
},



"l1c3008q9": {
    rightno: option4,
    question: "What is the resultant R of these two vectors?",
    attribute: "Press the question panel for image with details",
    op1: "(P² - Q²)",
    op2: "√(P² - Q²)",
    op3: "√(P² + Q²)",
    op4: "√(Q² - P²)",
    proof: "\n\n From pythagoras theorem, \n\n Q² = P² + R² \n\n So, R = √ (Q² - P²)",
    pic: "fig. 08 must to analyze the question",
    picon: true,
    picproof: "Fig.08 with explanation", 
},


"l1c3008q10": {
    rightno: option4,
    question: "Find out the value of cosα?",
    attribute: "Press the question panel for image with details",
    op1: "q/p",
    op2: "p/q",
    op3: "-q/p",
    op4: "-p/q",
    proof: "\n\n From the formula of direction of a resultant we know, \n\n tanθ = Qsinα/(P + Qcosα) \n\n or, tan 90 ᵒ = Qsinα/(P + Qcosα) \n\n or, 1/0  = Qsinα/(P + Qcosα) \n\n or, (P + Qcosα) = 0 \n\n So, cos α=  –p/q",
    pic: "Need fig.",
    picon: true,
    picproof: "", 
},


"l1c3008q11": {
    rightno: option2,
    question: "Find the value of Fcosθ using the theorem of longitude",
    attribute: "Click question panel for image with detailed information",
    op1: "Pcosθ₁ - Qcosθ₂",
    op2: "Pcos θ₁ + Qcosθ₂",
    op3: "Psinθ₁ + Qsinθ₂",
    op4: "Psinθ₁ - Qsinθ₂",
    proof: "\n\n Check out from textbook",
    pic: "Fig. need",
    picon: true,
    picproof: "", 
},



"l1c3008q12": {
    rightno: option1,
    question: "Find out the resultant F of P, Q & R vectors?",
    attribute: "Press the question panel for image with details",
    op1: "√[P² + Q² + R² + 2PQcosα + 2QRcosβ + 2RPcosγ]",
    op2: "√[P + Q + R + 2PQcosα + 2QRcosβ + 2RPcosγ]",
    op3: "√[P² - Q² - R² + 2PQcosα + 2QRcosβ + 2RPcosγ]",
    op4: "√[P² + Q² + R² + 2PQsinα + 2QRsinβ + 2RPsinγ]",
    proof: "\n\n Using theorem of resolved parts in the direction of X axis, Fcosθ = P + Qcosα + Rcosγ ……(1) \n\n Using theorem of resolved parts in the direction of perpendicular to X axis, \n\n Fsinθ = Qsinα - Rsinγ ………(2) \n\n (1)² + (2)²…… \n\n F = √[P² + Q² + R² + 2PQcosα + 2QRcosβ +2RPcosγ]",
    pic: "Fig. need",
    picon: true,
    picproof: "Fig. 10", 
},


"l1c3008q13": {
    rightno: option3,
    question: "According to Lami's law of equilibrium, which of the following statements is correct?",
    attribute: "Press the question panel for image with details",
    op1: "P/sinγ = Q/sinα = R/sinβ",
    op2: "P/sinβ = Q/sinα = R/sinγ",
    op3: "P/sinα = Q/sinβ = R/sinγ",
    op4: "P/sinγ = Q/sinβ = R/sinα",
    proof: "\n\n Check out from the textbook",
    pic: "",
    picon: false,
    picproof: "", 
},


"l1c3008q14": {
    rightno: option4,
    question: "If P and Q  are two same way directed parallel forces; What is the value of the resultant?",
    attribute: "",
    op1: "PQ",
    op2: "Q - P",
    op3: "P - Q",
    op4: "P + Q",
    proof: "\n\n From the formula of resultant of two vectors, \n\n R = √[P² + Q² +2PQ cos α \n\n As they are parallel Forces,V alue of α is 0⁰ \n\n So, R = √[ P² + Q² +2PQcos0⁰ ]	\n\n = P + Q",
    pic: "",
    picon: false,
    picproof: "", 
},


"l1c3008q15": {
    rightno: option1,
    question: "If P and Q  are two same way directed parallel forces working at A & B point respectively and their resultant F is working at C point. Which statement below is correct?",
    attribute: "Press the question panel for image with details",
    op1: "P . AC = Q . BC",
    op2: "Q . AC = P . BC",
    op3: "P. AB = Q . BC",
    op4: "P . AC = Q . AB",
    proof: "\n\n Check out from textbook",
    pic: "Fig 12 w/ explanation",
    picon: true,
    picproof: "Fig", 
},


"l1c3008q16": {
    rightno: option4,
    question: "If P and Q  are two opposite way directed parallel forces working at A & B point respectively and their resultant F is working at C point. Which statement below is correct?",
    attribute: "Press the question panel for image with details",
    op1: "P . AC = Q . AB",
    op2: "Q . AC = P . BC",
    op3: "P. AB = Q . BC",
    op4: "P . AC = Q . BC",
    proof: "\n\n Check out from textbook",
    pic: "Fig 13",
    picon: true,
    picproof: "", 
},


"l1c3008q17": {
    rightno: option1,
    question: "In a couple, the value of two forces are P and the distance between their lines of action is r. Find out the moment of the Couple?",
    attribute: "",
    op1: "P . r",
    op2: "P / r",
    op3: "P + r",
    op4: "P - r",
    proof: "\n\n From the definition, The moment of a couple is the product of the magnitude of one of the forces and the perpendicular distance between their lines of action.",
    pic: "",
    picon: false,
    picproof: "", 
},



"l0c3008q18": {
    rightno: option1,
    question: "A force F is working in a direction. A couple is being added with the force. Find out the displacement of the ball?",
    attribute: "Let, Moment of the couple = P",
    op1:"P/F",
    op2: "F/P",
    op3: "F . P",
    op4: "F + P",
    proof: "\n\n Check out from textbook",
    pic: "",
    picon: false,
    picproof: "",
    },


"l0c3008q19": {},



