function telephoneCheck(num) {
    let numArr=num.split("")
    let regexInteger = num.match(/\d/g)
    let regex1=  (/^[0-9]{3}\-[0-9]{3}-[0-9]{4}/) 
    //"555-555-5555"
    let regex2=  (/^1\s[0-9]{3}\-[0-9]{3}-[0-9]{4}/)
    //"1 555-555-5555"
    let regex3= (/^1?\s?\([0-9]{3}\)\s?[0-9]{3}-[0-9]{4}/)
    //(555)555-5555 //1(555)555-5555
    let regex4=(/(^[^(])..\)/)
    //555)
    let regex5=(/(^\(\d{3}[^)])/)
    //(555-555-5555
    let regex6=(/^1?[^\(][0-9]{3}\)/)
    //1 555)555-5555
    let regex7=/(\(.*\()/
    //"(555)5(55?)-5555"
      

    const numFalse = new Map();
        //numFalse.set('test',numArr.map(x=>Number.isInteger(Number(x))))    ;
        numFalse.set('11Digit&&NotStartWith1',regexInteger.length>10&&Number(numArr[0])!==1)
        numFalse.set('lessThan10Digit',num.length<10)
        numFalse.set('greaterThan16Digit',num.length>16)
        numFalse.set('last4DigitNotNumber',Number.isInteger(Number(num.slice(-4)))!==true)
        numFalse.set('regexIntegerGreaterThan11Digit',regexInteger.length>11)
        numFalse.set('regex4',regex4.test(num))
        numFalse.set('regex5',regex5.test(num))
        numFalse.set('regex6',regex6.test(num))
        numFalse.set('regex7',regex7.test(num))
        
        
        if (numFalse.get('11Digit&&NotStartWith1')===true){console.log('11Digit&&NotStartWith1: no its false');return false}
        if (numFalse.get('lessThan10Digit')===true){console.log('lessThan10Digit: no its false');return false}
        if (numFalse.get('greaterThan16Digit')===true){console.log('greaterThan16Digit: no its false');return false}
        if (numFalse.get('last4DigitNotNumber')===true){console.log('last4DigitNotNumber: no its false');return false}
        if (numFalse.get('regexIntegerGreaterThan11Digit')===true){console.log('regexIntegerGreaterThan11Digit: no its false');return false}
        if (numFalse.get('regex4')===true){console.log('regex4: no its false');return false}
        if (numFalse.get('regex5')===true){console.log('regex5: no its false');return false}
        if (numFalse.get('regex6')===true){console.log('regex6: no its false');return false}
        if (numFalse.get('regex7')===true){console.log('regex7: no its false');return false}



    const numTrue = new Map();
        numTrue.set('10DigitOnlyInteger',Number.isInteger(Number(num))&&num.length===10)
        numTrue.set('index0Is1&&159IsSpace',Number(numArr[0])===1&&numArr[1]===' '&&numArr[5]===' '&&numArr[9]===' ')
        numTrue.set('regex1',regex1.test(num))
        numTrue.set('regex2',regex2.test(num))
        numTrue.set('regex3',regex3.test(num))
        

        if (numTrue.get('10DigitOnlyInteger')===true){console.log('10DigitOnlyInteger: yes its true');return true}
        if (numTrue.get('index0Is1&&159IsSpace')===true){console.log('index0Is1&&159IsSpace: yes its true');return true}
        if (numTrue.get('regex1')===true){console.log('regex1: yes its true');return true}
        if (numTrue.get('regex2')===true){console.log('regex2: yes its true');return true}
        if (numTrue.get('regex3')===true){console.log('regex3: yes its true');return true}

    
        console.log();
      }

     
      telephoneCheck("1(555)555-5555")
      //telephoneCheck("5555555555")
      //telephoneCheck("11 555-555-5555")
 //telephoneCheck("1 555-555-5555");
  //telephoneCheck("5555555555")
  //telephoneCheck("-1 (757) 622-7382")
  //telephoneCheck("55555555")