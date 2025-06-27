//Chapter 10 - INTEGRAL

//Template
"l0c310qX":{
    rightno: option1,
    question: "",  
    attribute:"", 
     op1:"",  
    op2:"", 
    op3:"", 
    op4:"", 
    proof:"\n\n",
     pic: "",         
     picon: false ,
    picproof: require('../assets/Picturename.png'), },

"l0c310qX":{
    rightno: option1,
    question: "",  
    attribute:"", 
     op1:"",  
    op2:"", 
    op3:"", 
    op4:"", 
    proof:"\n\n",
     pic: "",         
     picon: false ,
    picproof: "",},

    
     //Starting here//////////

"l0c310q1":{
    rightno: option1,
    question: "অনির্দিষ্ট যোগজ নির্ণয়ের সূত্রঃ ∫tan x dx = ?",  
    attribute:"", 
     op1:"∫tan x dx = - ln cos x = ln sec x	",  
    op2:"∫tan x dx = ln cos x = ln sec x", 
    op3:"∫tan x dx = - ln cos x = ln sin x", 
    op4:"∫tan x dx = ln cos x = ln 1/sec⁡x ", 
    proof:"\n\n ∫tan x dx = ∫(sin x)/(cos x)dx = - ∫(-sin x)/(cos x)dx = - ∫dz/z \n\n ধরি, z = cos x  Or, dz = - sin x dx \n = - ln | cos x | = ln | (1/cos⁡x ) |  = ln | sec x | \n = - ln cos x = ln (1/cos⁡x ) = ln sec x",
     pic: "",         
     picon: false ,
    picproof: "",},


"l0c310q2":{
    rightno: option2,
    question: "অনির্দিষ্ট যোগজ নির্ণয়ের সূত্রঃ ∫cot x dx = ?",  
    attribute:"", 
     op1:"∫cot x dx = - ln sin x = ln cos x",  
    op2:"∫cot x dx = ln sin x = - ln cosec x ", 
    op3:"∫cot x dx = - ln sin x = ln cosec x", 
    op4:"∫cot x dx = - ln sin x = ln cos x", 
    proof:"\n\n ∫tan x dx = - ln cos x = ln sec x এর অনুরুপ। পুনরায় চেক করুন প্রশ্ন নং ১ ফিরে গিয়ে।",
     pic: "",         
     picon: false ,
    picproof: "",},


"l0c310q3":{
    rightno: option4,
    question: "অনির্দিষ্ট যোগজ নির্ণয়ের সূত্রঃ ∫cosec x dx = ?",  
    attribute:"", 
     op1:"∫cosec x dx = - ln tan x",  
    op2:"∫cosec x dx = - ln tan x/2", 
    op3:"∫cosec x dx = - ln sin x/2", 
    op4:"∫cosec x dx = ln tan x/2	", 
    proof:"\n\n ∫cosec x dx = ∫dx/(sin x) = ∫dx/(2 sin x/2  cos x/2) \n = ∫ 1/2 sec²  x/2 dx/ tan  x/2	 [লব ও হরকে sec² x/2 দ্বারা গুণ করে] \n = ∫ dz/z/z ;  [If tan x/2 = z then 1/2 sec² x/2 dx = dz] \n = ln | z |  = ln | tan x/2 |  = ln tan x/2",
     pic: "",         
     picon: false ,
    picproof: "",},


"l0c310q4":{
    rightno: option3,
    question: "অনির্দিষ্ট যোগজ নির্ণয়ের সূত্রঃ ∫sec x dx = ?",  
    attribute:"", 
     op1:"∫sec x dx = ln tan (π/2 + x/2)",  
    op2:"∫sec x dx = ln tan (π/4 + x)", 
    op3:"∫sec x dx = ln tan (π/4 + x/2)	", 
    op4:"∫sec x dx = ln cos (π/4 + x/2)", 
    proof:"\n\n ∫sec x dx = ∫dx/cos⁡x  = ∫dx/(sin (π/2  + x)) \n = ∫dx/(2 sin (π/4  + x/2) cos (π/4  + x/2)) \n = ∫(1/2  sec² (π/4  + x/2) dx)/(tan (π/4  + x/2)) \n ধরি, z = tan (π/4 + x/2 ) = dz = 1/2 sec² (π/4 + x/2) dx \n ∴ ∫sec x dx = ∫dz/z = ln | z | = ln | tan (π/4 + x/2) \n ∴ ∫sec x dx = ln tan(π/4 + x/2)",
     pic: "",         
     picon: false ,
    picproof: "",},


"l0c310q5":{
    rightno: option1,
    question: "অনির্দিষ্ট যোগজ নির্ণয়ের সূত্রঃ ∫sec x dx  = ?",  
    attribute:"", 
     op1:"∫sec x dx  = ln (sec x + tan x)	",  
    op2:"∫sec x dx  = ln (sec x - tan x)", 
    op3:"∫sec x dx  = ln (cos x + sin x)", 
    op4:"∫sec x dx  = ln (tan x – sec x)", 
    proof:"\n\n ∫sec x dx  = ∫(secx (sec x + tan x) dx)/(sec x tan x) \n ধরি, z = sec x + tan x = dz = (sec x tan x + sec²x) dx = sec x (sec x + tan x) dx \n ∴ ∫sec x dx = dz/z = ln | z | = ln |(sec x + tan x)| \n সুতরাং, ∫sec x dx = ln(sec x + tan x)",
     pic: "",         
     picon: false ,
    picproof: "",},


"l0c310q6":{
    rightno: option2,
    question: "অনির্দিষ্ট যোগজ নির্ণয়ের সূত্রঃ ∫dx/(a² + x²) = ?",  
    attribute:"", 
     op1:"∫dx/(a² + x²) = 1/x tan⁻¹ a/x",  
    op2:"∫dx/(a² + x²) = 1/a tan⁻¹ x/a	", 
    op3:"∫dx/(a² + x²) = 1/x tan⁻¹ x/a", 
    op4:"∫dx/(a² + x²) = 1/a tan x/a", 
    proof:"\n\n ∫dx/(a² + x²) = ∫(a sec² Ø )/(a² sec²Ø ) dØ = 1/a ∫dØ = 1/a  Ø + c = 1/a tan⁻¹ x/a \n [ধরি, x = a tanØ = dx = a sec² Ø dØ]",
     picon: false ,
    picproof: "",},


"l0c310q7":{
    rightno: option3,
    question: "অনির্দিষ্ট যোগজ নির্ণয়ের সূত্রঃ ∫dx/(a² - x²) = ? ",  
    attribute:"", 
     op1:" ∫dx/(a² - x²)  = 1/a ln x/a",  
    op2:"∫dx/(a² - x²)  = 1/a ln (x - a)/(x + a)", 
    op3:"∫dx/(a² - x²)  =  1/2a ln (x - a)/(x + a)", 
    op4:" ∫dx/(a² - x²)  = 1/2a ln (x + a)/(x - a)", 
    proof:"\n\n ∫dx/(a² - x²)= 1/(2a ∫{1/(a+x)  + 1/(a-x)}  )  dx = 1/2a { ∫dx/(a + x) + ∫ dx/(a- x)  }	\n  = 1/2a { ln |(a + x)| - ln |(a - x)| } = 1/2a ln (x - a)/(x + a) \n ∫dx/(a² - x²) = 1/(2a ∫{1/(a+x) + 1/(a-x)}) dx = 1/2a { ∫dx/(a + x) + ∫ dx/(a- x)} \n = 1/2a { ln|(a + x)| - ln|(a - x)| } = 1/2a ln(x - a)/(x + a)",
     pic: "",         
     picon: false ,
    picproof: "",},


"l0c310q8":{
    rightno: option4,
    question: "অনির্দিষ্ট যোগজ নির্ণয়ের সূত্রঃ ∫ dx/(x² - a²) = ?",  
    attribute:"", 
     op1:"∫ dx/(x² - a²) = 1/2 a ln (x - a)/(x + a)",  
    op2:"∫ dx/(x² - a²) = 1/2 ln (x - a)/(x + a) ", 
    op3:"∫ dx/(x² - a²) = 1/2 a ln (x + a)/(x - a)          (x>a>0)", 
    op4:"∫ dx/(x² - a²) = 1/2 a ln (x - a)/(x + a)          (x>a>0)	", 
    proof:"\n\n ∫ dx/(x² - a²) = 1/2 a ln (x - a)/(x + a)   (x>a>0)",
     pic: "",         
     picon: false ,
    picproof: "",},


"l0c310q9":{
    rightno: option2,
    question: "অনির্দিষ্ট যোগজ নির্ণয়ের সূত্রঃ ∫ dx/√(a² - x²) = ?",  
    attribute:"", 
     op1:"∫ dx/√(a² - x²) = sin⁻¹ x/2a",  
    op2:"∫ dx/√(a² - x²) = sin⁻¹ x/a", 
    op3:"∫ dx/√(a² - x²) = sin x/a", 
    op4:"∫ dx/√(a² - x²) = sin⁻¹ 2x/a", 
    proof:"\n\n ∫ dx/√(a² - x²) = ∫(a cos Ø)/√(a²- a² sin² Ø) dØ = ∫(a cos Ø)/(a cos Ø) dØ \n ∫dØ = Ø = sin⁻¹ x/a",
     pic: "",         
     picon: false ,
    picproof: "",},


"l0c310q10":{
    rightno: option3,
    question: "যদি যোগজীকরণের u ও w উভয়ই x এর ফাংশন হয়, তাহলে ∫ uv dx = ?",  
    attribute:"", 
     op1:"∫ uv dx = u ∫v dx - ∫{du/dx ∫v dx}",  
    op2:"∫ uv dx = v ∫u dx - ∫{du/dx ∫v dx} dx", 
    op3:"∫ uv dx = u ∫v dx - ∫{du/dx ∫v dx} dx ", 
    op4:"∫ uv dx = ∫u dx - ∫{du/dx ∫v dx} dx", 
    proof:"\n\n আমরা জানি, d/dx (uw) = u dw/dx + w du/dx \n যখন u এবং w উভয়ই x এর ফাংশন এবং অন্তরীকরণযোগ্য। x- এর সাপেক্ষে উভয়পক্ষকে যোগজীকরণ করে পাই, \n uw =  ∫(u dw/dx) dx + ∫(w du/dx)dx \n or,  ∫(u dw/dx) dx = uw - ∫(w du/dx)dx  … …(i) \n ধরি, dw/dx = v বা, w = ∫(v dx) , এখন (i) এ w এবং dw/dx এর মান বসিয়ে পাই, \n ∫ uv dx = u ∫v dx - ∫{du/dx ∫v dx} dx.",
     pic: "",         
     picon: false ,
    picproof: "",},


"l0c310q11":{
    rightno: option2,
    question: "অনির্দিষ্ট যোগজ নির্ণয়ের সূত্রঃ ∫ sinx dx = ?",  
    attribute:"", 
     op1:"∫ sinx dx = cosx + c",  
    op2:"∫ sinx dx =  - cosx + c",
    op3:"∫ sinx dx = cosecx + c",
    op4:"∫ sinx dx = secx + c",
    proof:"",
     pic: "",         
     picon: false ,
    picproof: "",},


"l0c310q12":{
    rightno: option1,
    question: "অনির্দিষ্ট যোগজ নির্ণয়ের সূত্রঃ ∫ cosx dx = ?",  
    attribute:"", 
     op1:"∫ cosx dx = sinx + c ",  
    op2:"∫ cosx dx = - sinx + c", 
    op3:"∫ cosx dx = - cosecx + c", 
    op4:"∫ cosx dx = secx tanx  + c", 
    proof:"",
     pic: "",         
     picon: false ,
    picproof: "",},


"l0c310q13":{
    rightno: option4,
    question: "অনির্দিষ্ট যোগজ নির্ণয়ের সূত্রঃ ∫ sec²x dx = ?",  
    attribute:"", 
     op1:"∫ sec²x dx = (1 - tan²x) + c",  
    op2:"∫ sec²x dx = tan²x + c", 
    op3:"∫ sec²x dx = secx tanx + c", 
    op4:"∫ sec²x dx = tanx + c", 
    proof:"",
     pic: "",         
     picon: false ,
    picproof: "",},


"l0c310q14":{
    rightno: option1,
    question: "অনির্দিষ্ট যোগজ নির্ণয়ের সূত্রঃ ∫ cosec²x dx = ? ",  
    attribute:"", 
     op1:"∫cosec²x dx = -cotx + c",  
    op2:"∫cosec²x dx = secx + c", 
    op3:"∫cosec²x dx = - secx + c", 
    op4:"∫cosec²x dx = - sin²x + c", 
    proof:"",
     pic: "",         
     picon: false ,
    picproof: "",},


"l0c310q15":{
    rightno: option2,
    question: "অনির্দিষ্ট যোগজ নির্ণয়ের সূত্রঃ ∫ (secx tanx) dx = ? ",  
    attribute:"", 
     op1:"∫ (secx tanx) dx = -tanx + c",  
    op2:"∫ (secx tanx) dx = secx + c", 
    op3:"∫ (secx tanx) dx = cosx + c", 
    op4:"∫ (secx tanx) dx = cotx + c", 
    proof:"",
     pic: "",         
     picon: false ,
    picproof: "",},


"l0c310q16":{
    rightno: option3,
    question: "অনির্দিষ্ট যোগজ নির্ণয়ের সূত্রঃ ∫ (cosecx cotx) dx = ?",  
    attribute:"", 
     op1:"∫ (cosecx cotx) dx = -tanx + c",  
    op2:"∫ (cosecx cotx) dx = -sec²x + c", 
    op3:"∫ (cosecx cotx) dx = -cosecx + c", 
    op4:"∫ (cosecx cotx) dx = -cotx + c", 
    proof:"",
     pic: "",         
     picon: false ,
    picproof: "",},


"l0c310q17":{
    rightno: option4,
    question: "অনির্দিষ্ট যোগজ নির্ণয়ের সূত্রঃ ∫ (1/x) dx = ?",  
    attribute:"", 
     op1:"∫ (1/x) dx = lneˣ + c",  
    op2:"∫ (1/x) dx = - lnx + c", 
    op3:"∫ (1/x) dx = ln x + c", 
    op4:"∫ (1/x) dx = ln |x| + c", 
    proof:"",
     pic: "",         
     picon: false ,
    picproof: "",},


"l0c310q18":{
    rightno: option4,
    question: "অনির্দিষ্ট যোগজ নির্ণয়ের সূত্রঃ ∫ eˣ dx = ?",  
    attribute:"", 
     op1:"∫ eˣ dx = lnx ",  
    op2:"∫ eˣ dx = 1/x", 
    op3:"∫ eˣ dx = - eˣ", 
    op4:"∫ eˣ dx = eˣ", 
    proof:"",
     pic: "",         
     picon: false ,
    picproof: "",},


"l0c310q19":{
    rightno: option3,
    question: "অনির্দিষ্ট যোগজ নির্ণয়ের সূত্রঃ ∫ aˣ dx = ?",  
    attribute:"", 
     op1:"∫ aˣ dx = (aˣ / lna) + c",  
    op2:"∫ aˣ dx = (lna / aˣ) + c", 
    op3:"∫ aˣ dx = aˣ + c", 
    op4:"∫ aˣ dx = xaᵉ + c", 
    proof:"",
     pic: "",         
     picon: false ,
    picproof: "",},


"l0c310q20":{
    rightno: option2,
    question: "অনির্দিষ্ট যোগজ নির্ণয়ের সূত্রঃ ∫ dx / √(1-x²) = ?",  
    attribute:"", 
     op1:"∫ dx / √(1-x²) = cos⁻¹x + c",  
    op2:"∫ dx / √(1-x²) = sin⁻¹x + c", 
    op3:"∫ dx / √(1-x²) = tan⁻¹x + c", 
    op4:"∫ dx / √(1-x²) = sec⁻¹ + c", 
    proof:"",
     pic: "",         
     picon: false ,
    picproof: "",},


"l0c310q21":{
    rightno: option3,
    question: "অনির্দিষ্ট যোগজ নির্ণয়ের সূত্রঃ ∫ dx / √(1+x²) = ?",  
    attribute:"", 
     op1:"∫ dx / √(1+x²) = cos⁻¹x + c",  
    op2:"∫ dx / √(1+x²) = sin⁻¹x + c", 
    op3:"∫ dx / √(1+x²) = tan⁻¹x + c", 
    op4:"∫ dx / √(1+x²) = sec⁻¹ + c", 
    proof:"",
     pic: "",         
     picon: false ,
    picproof: "",},


"l0c310q22":{
    rightno: option1,
    question: "অনির্দিষ্ট যোগজ নির্ণয়ের সূত্রঃ ∫ dx / |x|√(x²-1) = ?",  
    attribute:"", 
     op1:"∫ dx / |x|√(x²-1) = sec⁻¹x + c",  
    op2:"∫ dx / |x|√(x²-1) = tan⁻¹x cot⁻¹x + c", 
    op3:"∫ dx / |x|√(x²-1) =  sin⁻¹x + c", 
    op4:"∫ dx / |x|√(x²-1) = cos⁻¹x + c", 
    proof:"",
     pic: "",         
     picon: false ,
    picproof: "",},



"l0c310q23":{},    
