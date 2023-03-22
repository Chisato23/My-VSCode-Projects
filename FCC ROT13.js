
function rot13(str) {
    let strArr=str.split("")
    console.log(strArr);
    let cipher=13 
    let arrAZ= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    //let strIndex= 
    for(let i=0; i<strArr.length;i++){if(arrAZ.indexOf(strArr[i])!==-1){
        strArr[i]=arrAZ.indexOf(strArr[i])}}
    
        for(let i=0; i<strArr.length;i++){let beforeCipher=strArr[i];
        if(Number.isInteger(beforeCipher)){
    let afterCipher=cipher+beforeCipher;
    if(cipher+beforeCipher>=arrAZ.length){afterCipher=(cipher+beforeCipher-arrAZ.length)};
    strArr[i]=arrAZ[afterCipher]
    }}
    
    strArr=strArr.join("")
    
    console.log(strArr)
    return strArr
    }
    
    rot13("SERR CVMMN!")
    