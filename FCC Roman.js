let log=console.log
function convertToRoman(num) {
num = num.toString()
  let numLength = num.toString().length
let sd ={
  'I':'1',
  'II':'2',
  'III':'3',
  'IV':'4',
  'V':'5',
  'VI':'6',
  'VII':'7',
  'VIII':'8',
  'IX':'9'
  };
let dd ={
  'X':'10',
  'XL':'40',
  'L':'50',
  'XC':'90'
}

let td={
'C':'100',
'CD':'400',
'D':'500',
'CM':'900'
}

let fd={
  'M':'1000'
}


let lastDigit = num.toString().split("").at(-1)
let twoDigit =num.toString().split("").slice(-2).join("") //
let twoDigitRounded = (Math.floor(twoDigit/10)*10).toString()
let ddArr= Object.values(dd)
let ddKeys=Object.keys(dd)
let ddIndex=ddArr.indexOf(twoDigitRounded)
let doubleDigitRoman=ddKeys[ddIndex]
let ddResult

let threeDigit =num.toString().split("").slice(-3).join("") //
let threeDigitRounded = (Math.floor(threeDigit/100)*100).toString()
let tdArr= Object.values(td)
let tdKeys=Object.keys(td)
let tdIndex=tdArr.indexOf(threeDigitRounded)
let tripleDigitRoman=tdKeys[tdIndex]
let tdResult

let fourDigit =num.toString().split("").slice(-4).join("") //
let fourDigitRounded = (Math.floor(fourDigit/1000)*1000).toString()
let fdArr= Object.values(fd)
let fdKeys=Object.keys(fd)
let fdIndex=fdArr.indexOf(fourDigitRounded)
let fourDigitRoman=fdKeys[fdIndex]
let fdResult


let sdArr = Object.values(sd)
let sdKeys = Object.keys(sd)
let sdIndex=sdArr.indexOf(num)
let lastDigitIndex = sdArr.indexOf(lastDigit)
let lastDigitRoman = sdKeys[lastDigitIndex]




if(numLength===1){if(sdArr.includes(num)){return(sdKeys[sdIndex])}}

function getDD(){let ten = 'X';let tenArr=[]
if(ddArr.includes(twoDigit)){ddResult= doubleDigitRoman; }
if(ddArr.includes(twoDigitRounded)&&num!==twoDigitRounded&&numLength===2){ddResult= doubleDigitRoman+lastDigitRoman}
if(ddArr.includes(twoDigitRounded)&&num!==twoDigitRounded&&numLength!==2){ddResult= doubleDigitRoman+lastDigitRoman}
if(twoDigit>10&&twoDigit<40){
  for(let i=0; i<twoDigitRounded/10;i++){tenArr.push(ten)}
ddResult=(tenArr.join("")+lastDigitRoman)}
if(twoDigit>50&&twoDigit<90){
  for(let i=0; i<(twoDigitRounded-50)/10;i++){tenArr.push(ten)}
ddResult=("L"+tenArr.join("")+lastDigitRoman)}
if (twoDigit.at(0)==='0'){ddResult=lastDigitRoman}
}

function getTD(){let hundred = 'C';let hundredArr=[]
if(tdArr.includes(threeDigit)){tdResult= tripleDigitRoman; }
if(tdArr.includes(threeDigitRounded)&&num!==threeDigitRounded&&numLength===3){ tdResult= tripleDigitRoman+ddResult
}
if(tdArr.includes(threeDigitRounded)&&num!==threeDigitRounded&&numLength!==3){tdResult= tripleDigitRoman+ddResult
}
if(threeDigit>100&&threeDigit<400){
  for(let i=0; i<threeDigitRounded/100;i++){hundredArr.push(hundred)}
tdResult=(hundredArr.join("")+ddResult)}
if(threeDigit>500&&threeDigit<900){
  for(let i=0; i<(threeDigitRounded-500)/100;i++){hundredArr.push(hundred)}
tdResult=("D"+hundredArr.join("")+ddResult)}

}

function getFD(){let thousand = 'M';let thousandArr=[];
if(fdArr.includes(fourDigit)){fdResult= fourDigitRoman; }
if(fdArr.includes(fourDigitRounded)&&num!==fourDigitRounded&&
num.at(1)==='0'&&num.at(2)==='0'&&num.at(3)!=='0')
{fdResult= fourDigitRoman+lastDigitRoman
}
if(fourDigit>1000&&fourDigit<4000&&num.at(1)!=='0'){
  for(let i=0; i<fourDigitRounded/1000;i++){thousandArr.push(thousand)}
fdResult=(thousandArr.join("")+tdResult)
}
if(fourDigit>1000&&fourDigit<4000&&num.at(1)==='0'){
  for(let i=0; i<fourDigitRounded/1000;i++){thousandArr.push(thousand)}
;fdResult=(thousandArr.join("")+ddResult)
}
}





getDD()
getTD(); 
getFD();

log(fourDigitRounded)
log(ddResult)
log(tdResult)
log(threeDigit)
log(fdResult)



if(numLength===2){getDD();return ddResult}
if(numLength===3){getTD();return tdResult}
if(numLength===4){getFD();return fdResult}


 ;
}

convertToRoman(1023);