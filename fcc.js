let log=console.log
function palindrome(str) {
 
let lower= str.toLowerCase()
let az = lower.match(/[a-z0-9]/gi)
log(az.length)
log(Math.floor(az.length/2))
log(az.length/2)
let count=0


 //log(Math.floor(az.length/2))
//let last = az.slice(-1)[0]
//let first= az.slice(0)[0]

if(az.length%2!==0){
for(let i=0; i<Math.floor(az.length/2); i++){
  let j=0;
      if(az.slice(i)[0]===az.slice(j)[0]){log('t');count++}}

};

if(az.length%2===0){log('fk')
  for(let i=0; i<=az.length/2; i++){
 let j=0;
   log('fff',az.slice(i)[0],az.slice(j)[0])
  if(az.slice(i)[0]===az.slice(j)[0]){log('tt');count++}}
};

 log(count)
log(az.length/2)
log(Math.floor(az.length/2))
  if(count===az.length/2){log('nani');return true
 }else{return false};
 
}


//palindrome("race car")
//palindrome("never odd or even")
palindrome("almostomla")
//palindrome("eye");


let log=console.log
function convertToRoman(num) {

  let numLength = num.toString().length
let sd ={
  'I':1,
  'II':2,
  'III':3,
  'IV':4,
  'V':5,
  'VI':6,
  'VII':7,
  'VIII':8,
  'IX':9
  
}

let lastDigit = num.toString().split("").at(-1)
let sdArr = Object.values(sd)
let sdKeys = Object.keys(sd)
let sdIndex=sdArr.indexOf(num)

if(numLength===1){if(sdArr.includes(num)){return(sdKeys[sdIndex])}}

let ten = 'X'
let dd


log(sdArr)
log(lastDigit)

 ;
}

convertToRoman(12);