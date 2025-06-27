//Math 2nd Paper
l1c3005
//template

"l1c3005qX":{
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

"l1c3005qX":{
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


//Chapter 5

//Starting here

"l0c3005q1":{
    rightno: "option2",
    question: "If (a + b)ⁿ is a binomial expression, which one below is the correct form of the expansion of the binomial expression?",
    attribute:"",
    op1: "a + nC₁. a⁽ⁿ⁻¹⁾. b¹ + nC₂. a⁽ⁿ⁻²⁾. b² + nC₃. a⁽ⁿ⁻³⁾. b³……+ bⁿ",
    op2: "aⁿ + nC₁. a⁽ⁿ⁻¹⁾. b¹ + nC₂. a⁽ⁿ⁻²⁾. b² + nC₃. a⁽ⁿ⁻³⁾. b³……+ bⁿ",
    op3: "aⁿ + nC₁. a⁽ⁿ⁻¹⁾. b¹ + nC₂. a⁽ⁿ⁻²⁾. b² + nC₃. a⁽ⁿ⁻³⁾. b³……+ b",
    op4: "a + nC₁. a⁽ⁿ⁻¹⁾. b¹ + nC₂. a⁽ⁿ⁻²⁾. b² + nC₃. a⁽ⁿ⁻³⁾. b³……+ b",
    proof: "Check out from textbook",
    pic: "",
    picon: false,
    picproof: "",
    },


"l0c3005q2":{
rightno: "option3",
question: "If (a + b)ⁿ is a binomial expression;Find out the general term/(r+1)th term of the expansion.",
attribute:"",
op1: "nCr. aⁿ. bʳ",
op2: "nCr-1. aⁿ-(r-1). bʳ⁻¹",
op3: "nCr. aⁿ-r. bʳ",
op4: "nCr. aⁿ-r. bʳ⁻¹",
proof: "(a + b)ⁿ = aⁿ + nC₁. a⁽ⁿ⁻¹⁾. b¹ + nC₂. a⁽ⁿ⁻²⁾. b² + nC₃. a⁽ⁿ⁻³⁾. b³ + … + bⁿ \n\n(r)th term of the expansion: nCr-1. aⁿ-(r-1). bʳ⁻¹ \n\nSo, (r+1)th term, Tr+1 = nCr. aⁿ-r. bʳ",
pic: "",
picon: false,
picproof: "",
},

"l0c3004q3":{
    rightno: "option1",
    question: "If xᵏ is  at the (r+1)th term of the expansion of (a xᵐ + b xᵖ)^n; Find out the value of r.",
    attribute:"",
    op1: "(m.n-k)\m-p",
    op2: "(m.p-k)\m-p",
    op3: "(m-k)\m-p",
    op4: "(m.n-p)\m-k",
    proof: "Check out from the textbook or try figuring out from the general procedure of the general term, T r+1 =nCr. a^n-r. b^r",
    pic: "",
    picon: false,
    picproof: "",
    },
    

"l0c3005q4":{
rightno: "option4",
question: "Which one below is the Correct Binomial Coefficient property?",
attribute:"",
op1: "(n)C(n-1)=nCr",
op2: "nCr=(n)C(n+1)",
op3: "(n)C(r+1)=nC(n-1)",
op4: "nCr=(n)C(n-r)",
proof: "nCr-1 = n! / {(n-r)! (n-(n-r))!} = n! / (n-r)! . r! = nCr\nSo, nCr = nCn-r",
pic: "",
picon: false,
picproof: "",
},


"l0c3005q5":{
    rightno: "option1",
    question: "What is the ratio of the (r + 1)th term and the (r)th term in the expansion of (a + b)ⁿ?",
    attribute:"",
    op1: "{(n-r+1)\r}.(x\a)",
    op2: "{(n-r+1)\r+1}.(x\a)",
    op3: "{(n-r+1)\r-1}.(x\a)",
    op4: "{(n+r-1)\r}.(x\a)",
    proof: "Check it out from textbook or try yourself using the approach for general term of a binomial expansion",
    pic: "",
    picon: false,
    picproof: "",
    },


"l0c3005q6":{
rightno: "option1",
question: "What is the number of terms present in the expansion of (a + b + c)ⁿ?",
attribute:"",
op1: "(n + 2)C₂",
op2: "(n + 1)C₁",
op3: "(n + 3)C₃",
op4: "nC₃",
proof: "In a expression, if number of terms is r and the power of the expression is n; The Number of terms in the expansion would be: (n + r - 1)C(r - 1). For example Number of terms in (a + b + c)¹⁰ would be: (10 + 3 - 1)C(3 - 1).",
pic: "",
picon: false,
picproof: "",
},


"l0c3005q7":{
    rightno: "option2",
    question: "If (a + b)ⁿ is a binomial expression and n is an odd natural number, which one below would be the middle term of the expansion?",
    attribute:"",
    op1: "{(n-1)\2}+1",
    op2: "{(n\2)+1}",
    op3: "{(n-1)\2}+1 & {(n+1)\2}+1",
    op4: "{(n-1)\2} & {(n+1)\2}",
    proof: "If the power of the expression is an odd number, then the number of terms would be an Even number. So, there will be two middle terms. For Example, (a + b)² = a² + 2ab + b²; Here, the middle term is (2/2) + 1 = 2nd term. \n\n Again, (a + b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴; here the middle term is (4/2) + 1 = 3rd term. \n\n So, if n is an even natural number, the middle term of the expansion would be (n/2) + 1.",
    pic: "",
    picon: false,
    picproof: "",
    },


"l0c3005q8":{
    rightno: "option2",
    question: "What is the correct general format of binomial expansion given below? ",
    attribute:"",
    op1: "(a + b)n = a + n.aⁿ⁻¹.b + {(n(n-1))\2!}.aⁿ⁻².b² + {n(n-1)(n-2)}\3!.aⁿ⁻³.b³ + …….",
    op2: "(a + b)n = aⁿ + n.aⁿ⁻¹.b + {(n(n-1))\2!}.aⁿ⁻².b² + {n(n-1)(n-2)}\3!.aⁿ⁻³.b³ + …….",
    op3: "(a + b)n = aⁿ + n.aⁿ.b + {(n(n-1))\2}.aⁿ⁻².b² + {n(n-1)(n-2)}\3.aⁿ⁻³.b³ + …….",
    op4: "(a + b)n = aⁿ + n.aⁿ.b + {(n(n-1))\2!}.aⁿ⁻².b² + {n(n-1)(n-2)}\3!.aⁿ⁻².b³ + …….",
    proof: "Check Out from the textbook",
    pic: "",
    picon: false,
    picproof: "",
    },

"l0c3005q9":{
rightno: "option1",
question: "If |x|<1, what is the result of (1-x)⁻¹?",
attribute:"",
op1: "1 + x + x² + x³ + …… ∞",
op2: "1 - x + x² - x³ + ... ∞",
op3: "1 + 2x + 3x² + 4x³ + ... ∞",
op4: "1 - 2x + 3x² - 4x³ + ... ∞",
proof: "(1-x)⁻¹ = 1 + (-1).x+{(-1)(-1-1)}\2! .(-x)² + {(-1)(-1-1)(-1-2)}\3!. (-x)³+…… = 1+x+x²+x³+….",
pic: "",
picon: false,
picproof: "",
},

"l0c3005q10":{
    rightno: "option2",
    question: "If |x| < 1; Find out (1 + x)^-1 = ?",
    attribute:"",
    op1: "1 + x + x² + x³ +... ∞",
    op2: "1 - x + x² - x³ +... ∞",
    op3: "1 + 2x + 3x² + 4x³ +... ∞",
    op4: "1 - 2x + 3x² - 4x³ +... ∞",
    proof: "Check out from the textbook or follow the same procedure shown in the proof of question 10",
    pic: "",
    picon: false,
    picproof: "",
    },


"l0c3005q11":{
rightno: "option3",
question: "If |x|<1;Find out (1-x)⁻² = ?",
attribute:"",
op1: "1+x+x²+x³+..... ∞",
op2: "1-x+x²-x³+..... ∞",
op3: "1+2x+3x²+4x³+..... ∞",
op4: "1-2x+3x²-4x³+..... ∞",
proof: "Check out from the textbook or follow the same procedure shown in the proof of question 10",
pic: "",
picon: false,
picproof: "",
},


"l0c3005q12":{
    rightno: "option4",
    question: "If |x|<1;Find out (1+x)⁻² = ?",
    attribute:"",
    op1: "1+x+x²+x³+…..∞",
    op2: "1-x+x²-x³+……..∞",
    op3: "1+2x+3x²+4x³+…..∞",
    op4: "1 - 2x+ 3x²- 4x³ +…..∞",
    proof: "Check out from the text book or follow the same procedure shown in the proof of question 10",
    pic: "",
    picon: false,
    picproof: "",
    },


"l0c3005q13":{
rightno: "option3",
question: "If |x|<1;Find out (1-x)⁻³ = ?",
attribute:"",
op1: "1+2x+3x²+4x³+…..∞",
op2: "1- 2x+ 3x²- 4x³ +…..∞",
op3: "1+3.x+6.x²+10.x³+..... ∞",
op4: "1-3.x+6.x²-10.x³+..... ∞",
proof: "Check it out from the textbook or follow the same procedure shown in the proof of question 10",
pic: "",
picon: false,
picproof: "",
},


"l0c3005q14":{
    rightno: "option4",
    question: "If |x|<1; Find out (1-x)⁻³ = ?",
    attribute:"",
    op1: "1+2x+3x²+4x³+…..∞",
    op2: "1- 2x+ 3x²- 4x³ +…..∞",
    op3: "1+3.x+6.x²+10.x³+..... ∞",
    op4: "1-3.x+6.x²-10.x³+..... ∞",
    proof: "Check it out from the textbook or follow the same procedure shown in the proof of question 10",
    pic: "",
    picon: false,
    picproof: "",
    },


"l0c3005q15":{
rightno: "option1",
question: "Which one below is the correct general term/ T r+1 of the binomial expression: (1+x)ⁿ?",
attribute:"",
op1: "[{n(n-1)(n-2)…..(n-r+1)}\r!].xʳ",
op2: "[{n(n-1)(n-2)…..(n-r+1)}\r].xʳ",
op3: "[{n(n-1)(n-2)…..(n-r+1)}\r!].x",
op4: "[{n(n-1)(n-2)…..(n+r-1)}\r!].xʳ",
proof: "Check out from the textbook",
pic: "",
picon: false,
picproof: "",
},

"l1c3004q16": {
    rightno: "option3",
    question: "Which one below is the Correct Binomial Coefficient property?",
    attribute: "Proof: Check out from textbook",
    op1: "nC(n-1) = nCr",
    op2: "nCr = (n)C(n+1)",
    op3: "nCr + (n)C(r-1) = (n+1)C(r)",
    op4: "nCr + (n)C(r+1) = (n-1)C(r)",
    proof: "",
    pic: "",
    picon: false,
    picproof: "",
    },


"l1c3004q17": {},