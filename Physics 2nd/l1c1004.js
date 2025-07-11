//   // l1c1004qX
//Physics 4th

//for physics 2nd 
//template and where X stands to question number, c**** stands for chapter and subject code

"l1c1004qX" {
    rightno: option1, 
   question: "",  
   attribute:"", 
   op1:"",  
   op2:"", 
   op3:"", 
   op4:"", 
   proof:"", 
   pic: "", 
   picon: false ,
   picproof: "",},

//starts from here

//Chapter 4

"l1c1004q1" {
    rightno: option2, 
   question: "Formula of the value of the magnetic field, B = ?",  
   attribute:"F = Force, q = charge, v = velocity", 
   op1:"B = qv / F ",  
   op2:"B = F / qv", 
   op3:"B = F / v", 
   op4:"B = F / q ", 
   proof:"If the q charge is moving at a velocity v at right angles to the direction of a magnetic field, then if the charge gains F force, then the single charge will gain F / qv force if it is moving at a single speed. So the value of the magnetic field B will be - \n\n B = F / qv", 
   pic: "", 
   picon: false ,
   picproof: "",},



 
"l1c1004q2" {
    rightno: option1, 
   question: "Formula of the force of an electric field, →┬F = ? ",  
   attribute:"F = Force, q = charge, v = velocity, B = magnetic field", 
   op1:"→┬F = q →┬v × →┬B",  
   op2:"→┬F = q →┬v . →┬B", 
   op3:"→┬F = q →┬v / →┬B", 
   op4:"→┬F = qvBcosθ", 
   proof:"If the q charge is not moving at right angles to the magnetic field but moving at that angle, then the velocity of the charge along the perpendicular to the direction of the magnetic field i.e. at right angles to the direction of the field will be v sinθ and the value of the magnetic field will be - \n B = F / qv sinθ \n The value and direction of the magnetic force →┬F  obtained through the experiment are precisely related to →┬v  and the magnetic field →┬B and the magnetic field B by the following vector equations. \n →┬F = q →┬v × →┬B", 
   pic: "", 
   picon: false ,
   picproof: "",},



   "l1c1004q3" {
      rightno: option4, 
     question: "Formula of  The Biot-Savart’s Law?",  
     attribute:"µ = Permeability, I = Current flow, dl = r = radius", 
     op1:"dB = (4π/µ) × (Idl sinθ/r²)",  
     op2:"dB = (µ/4π) × (Idl sinθ/r²)", 
     op3:"dB = (µ/2π) × (Idl sinθ/r²)", 
     op4:"dB = (µ/4π) × (Idl sinθ/r²)", 
     proof:"If an electric current flows through the short length dl of a conductor, then the value of the magnetic field (→┬db) at a point P at a distance r from the midpoint of that part of the conductor at that angle is - \n dB ∝ (Idl  sinθ) / r² \n or,  dB = K (Idl  sinθ) / r²  …(i) \n In the SI method, the proportional constant is written, \n K = µ₀ / 4π \n Here, µ₀ is a constant number called the magnetic permeability of a vacuum. Its value is, \n µ₀ = 4π × 10-7 TmA-1 \n So the form of the Biot-Savart formula in the void is, \n dB = (µ₀/4π) × (Idl sinθ/r²) \n Again, through that magnetic permeability, the form of the Biot-Savart formula is, \n dB = (µ/4π) × (Idl sinθ/r²)", 
     pic: "", 
     picon: true ,
     picproof: require('../Formula Master files/Physics 2nd/images/c1004q3.png'), },  
   
   
 
"l1c1004q4" {
    rightno: option3, 
   question: "Formula of the value of the magnetic field, B = ?",  
   attribute:"µ₀ = Permeability of free space, I = Electric current", 
   op1:"B = 2πa / µ₀I",  
   op2:"B = µ₀ / 2πaI ", 
   op3:"B = µ₀I / 2πa	", 
   op4:"B = µ₀a / 2πI", 
   proof:"We know, \n B = µ₀I / 4π ∫ˡ = ∞ ₗ = - ∞ dl sinθ / r²	… …(1) \n  And cot θ = - l/a … …(2) \n So, -l = a cotθ \n By integrating, \n dl = a cosec²θ dθ \n again, cosecθ = r/a \n or, r = a cosecθ \n To determine the extent of addition we get from Equation (2), \n When l = - ∞ , then θ = 0 \n And when l = ∞, then θ= π \n So (1) the equation stands, \n B = µ₀I / 4π ∫π ₀ (a cosec²θ dθ)sinθ / a²cosec²θ \n = µ₀I / 4πa ∫π ₀ sinθ dθ = -µ₀I / 4πa  [cosθ]π ₀ \n = -µ₀I / 4πa  [cosπ – cos0] = -µ₀I / 4πa [-2] \n So, B = µ₀I / 2πa", 
   pic: "", 
   picon: false ,
   picproof: "",},


     
"l1c1004q5" {
     rightno: option1, 
     question: "The magnetic field at the center of the electrically conducting coil, B = ?" 
     attribute:"µ₀ = Permeability of free space, I = Electric current, r = radius ", 
     op1:"B = (µ₀I)/2r",  
     op2:"B = (µ₀I)/2πr", 
     op3:"B = (2r)/(µ₀I)", 
     op4:"B = 2µµ₀Ir", 
     proof:"We know, dB = (µ₀/4π) × (Idl sinθ/r²) 			… …(i) \n Here, θ is the included angle of →┬dl and →┬r. Now the value of the magnetic field in P for the whole coil is obtained by summing the equation (i). Since the length of a circular conductor is the length of the circumference of the coil i.e. 2πr, the summation range will be l = 0 to l = 2πr. \n So, B = ∫ dB = ∫ₗ₌₀ ˡ⁼²πʳ (µ₀)/4π  (I dl sinθ)/r² \n Since the distance from all points of the coil to the center P of the circle is equal to r and the angle of any part of the coil including dl and r is always θ = 90°; So \n B = ∫ₗ₌₀ ˡ⁼²πʳ (µ₀)/4π (I dl sin90°)/r²	= (µ₀ I)/4πr²  ∫ₗ₌₀ ˡ⁼²πʳ dl \n = (µ₀ I)/4πr² [l]₀ ²πʳ \n =  (µ₀I × 2πr)/4πr² \n So, B = (µ₀I)/2r", 
     pic: "", 
     picon: true ,
     picproof: require('../Formula Master files/Physics 2nd/images/c1004q3.png'), },

 
"l1c1004q6" {
    rightno: option2, 
   question: "If the number of coils in the coil is N, then the magnetic field of the circular coil, B = ?",  
   attribute:"µ₀ = Permeability of free space,  I = Electric current, r = radius", 
   op1:"B = (µ₀I)/2r",  
   op2:"B = (µ₀NI)/2r", 
   op3:"B = (2rN)/(µ₀I)", 
   op4:"B = (µ₀I)/2rN", 
   proof:"We know, dB = (µ₀/4π) × (Idl sinθ/r²) 		… …(i) \n Here, θ is the included angle of →┬𝒹l and →┬r. Now the value of the magnetic field in P for the whole coil is obtained by summing the equation (i). Since the length of a circular conductor is the length of the circumference of the coil i.e. 2πr, the summation range will be l = 0 to l = 2πr. \n So, B = ∫ dB = ∫ˡ⁼²πʳ ₗ₌₀ (µ₀/4π) ((I dl sinθ)/r²) \n Since the distance from all points of the coil to the center P of the circle is equal to r and the angle of any part of the coil including dl and r is always θ = 90°; So \n B = ∫ˡ⁼²πʳ ₗ₌₀ (µ₀/4π) ((I dl sin90°)/r²) = (µ₀I)/4πr² ∫ˡ⁼²πʳ ₗ₌₀ dl \n = (µ₀I)/4πr² [l]²πʳ ₗ₌₀ \n = (µ₀I × 2πr)/4πr² \n So, B = (µ₀I)/2r \n If the number of horoscopes is N, \n B = (µ₀NI)/2r", 
   pic: "", 
   picon: false ,
   picproof: "",},




"l1c1004q7" {
    rightno: option2, 
   question: "Lorentz magnetic force, →┬F ) = ?",  
   attribute:"q = charge, v = velocity, B = Electric field", 
   op1:"→┬F = q(→┬E + →┬v . →┬B)",  
   op2:"→┬F = q(→┬E + →┬v × →┬B", 
   op3:"→┬F = q →┬E (→┬v/→┬B)", 
   op4:"→┬F = q →┬E (→┬v . →┬B)", 
   proof:"We know that a dynamic charge in a magnetic field gains a force. This ball is called Lorenz magnetic ball. Suppose a particle with a charge of +q moves at a velocity →┬v in a balanced magnetic field →┬B. Now the force applied to it by the magnetic field, \n →┬Fₘ = q (→┬v × →┬B) \n When the q charge is moving at a speed →┬v at a point where electric field →┬E and magnetic field →┬B exist at the same time, then the force acting on it is - \n →┬F =  q →┬E + q(→┬v × →┬B) \n Or, →┬F = q (→┬E + →┬v × →┬B )) \n This force is called Lorentz magnetic force.", 
   pic: "", 
   picon: false ,
   picproof: "",},



 
"l1c1004q8" {
    rightno: option4, 
   question: "Which of the following is the correct relation of electric current with the speed of transmission?",  
   attribute:"I = Electric Current, n = Number of charge carriers per unit volume of charge, v = Velocity of charge carrier, q = The charge of each charge carrier", 
   op1:"I = nA/vq",  
   op2:"I = vq/ nA", 
   op3:"IA = vq", 
   op4:"I = nAvq", 
   proof:"", 
   pic: "", 
   picon: false ,
   picproof: "",},



 
"l1c1004q9" {
    rightno: option2, 
   question: "Formula of a magnetic field in the center of a flowing circular coil, B = ?",  
   attribute:"I = Electric current, r = Radius, µ₀ = Permeability (space)", 
   op1:"B = µ₀I / r",  
   op2:"B = µ₀I / 2r", 
   op3:"B = µ₀r / 2I", 
   op4:"B = 2rµ₀I ", 
   proof:"According to the Biot-Savart’s Law we know, a magnetic field in the center of a flowing circular coil, B = µ₀I / 2r", 
   pic: "", 
   picon: false ,
   picproof: "",},



 
"l1c1004q10" {
    rightno: option2, 
   question: "Which of the following is correct about the relationship between the magnetic moment and the angular momentum for the spin of an electron?",  
   attribute:": →┬µₛ = Magnetic moment, →┬S = angular momentum, e = electron, m = mass of electron", 
   op1:"→┬µₛ = (e/m) →┬S",  
   op2:"→┬µₛ = - (e/m) →┬S", 
   op3:"→┬µₛ = (e/m) →┬S", 
   op4:"→┬µₛ = -e / →┬S", 
   proof:"Angular momentum is created for spin or rotation and a magnetic moment Mₛ or µₛ is created for the negative charge of electrons, the direction of which is opposite to the angular momentum →┬S caused by spin. The relationship between the magnetic moment and the angular momentum for this spin of the electron is, \n →┬µₛ = -e/m →┬S", 
   pic: "", 
   picon: false ,
   picproof: "",},



 
"l1c1004q11" {
    rightno: option1, 
   question: "Correct vector form of Mₒᵣᵦ?",  
   attribute:"", 
   op1:"→┬M	= - e →┬L / 2m",  
   op2:"→┬M	=  e →┬L / 2m", 
   op3:"→┬M	= →┬e L / 2→┬m", 
   op4:"→┬M	= -(→┬eL) / 2m", 
   proof:"", 
   pic: "", 
   picon: false ,
   picproof: "",},



 
"l1c1004q12" {
    rightno: option1, 
   question: "If the radius of the orbit and the velocity of the electron is given, then B = ?",  
   attribute:"B = Magnetic field in the center of a flowing circular coil, e = Electron, v = velocity, r = radius", 
   op1:"B = (µ₀ / 4π) × (ev / r²)",  
   op2:"B = (µ₀ / 2π) × (ev / r²)", 
   op3:"B = (µ₀ / ev) × (4π / r²)", 
   op4:"B = (ev / µ₀) × 2πr", 
   proof:"According to the Biot-Savart’s Law we know, a magnetic field in the center of a flowing circular coil, B = µ₀I / 2r \n Now if it takes T time for an electron with e charge to rotate once in its orbit then electric current flow, I = e/T \n But if the radius of the orbit is r and the velocity of the electron is v then, \n T = 2πr / v \n thus, I = (e × v) / 2πr \n so, B = (µ₀ / 2r) × (e / T) = (µ₀ / 2r) × (ev / 2πr)  	or, B = (µ₀ / 4π) × (ev / r²)", 
   pic: "", 
   picon: false ,
   picproof: "",},



 
"l1c1004q13" {
    rightno: option4, 
   question: "Formula of  Magnetic moment, Mₒᵣᵦ = ?",  
   attribute:"I = Electric current flow, L = The angular momentum of an electron, m = mass of electron, h = Planck constant, e = electron, n = number of main orbit", 
   op1:"Mₒᵣᵦ = -n eh / 2πm",  
   op2:"Mₒᵣᵦ = n eh / 2πm", 
   op3:"Mₒᵣᵦ = (n e / 2m) × h", 
   op4:"Mₒᵣᵦ = n eh / 4πm", 
   proof:"We know, magnetic moment Mₒᵣᵦ = IA = (ev / 2πr) × πr² = evr / 2 \n Or, Mₒᵣᵦ = (e / 2m) × mvr \n But from Bohr's theory the angular momentum of an electron, L = mvr  = nh / 2π \n So, Mₒᵣᵦ = (e / 2m) × L = n eh / 4πm", 
   pic: "", 
   picon: false ,
   picproof: "",},



 
"l1c1004q14" {
    rightno: option3, 
   question: "Correct vector form of Mₒᵣᵦ ?",  
   attribute:"", 
   op1:"→┬M	=  e →┬L  / 2m",  
   op2:"→┬M	= (→┬e ) L  / 2(→┬m )", 
   op3:"→┬M	= - e →┬L / 2m	", 
   op4:"→┬M	= - (→┬eL ) / 2m", 
   proof:"", 
   pic: "", 
   picon: false ,
   picproof: "",},



 
"l1c1004q15" {},


