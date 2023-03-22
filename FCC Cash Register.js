function checkCashRegister(itemPrice, cashReceived, cashAvailable) {
    itemPrice= itemPrice*1000
    cashReceived=cashReceived*1000
    let change = cashReceived-itemPrice;
   
    cashAvailable=cashAvailable.reverse();
    //let cashUsed = cashAvailable.map(x=>x)
    let cashUsedUpdate = cashAvailable.map(x=>x)
    let result

    let  [HUNDRED,TWENTY,TEN,FIVE,ONE,QUARTER,DIME,NICKEL,PENNY]=cashAvailable


const currency= new Map();
    currency.set('100000',(HUNDRED[1])*1000)
    currency.set('20000',TWENTY[1]*1000)
    currency.set('10000',TEN[1]*1000)
    currency.set('5000',FIVE[1]*1000)
    currency.set('1000',ONE[1]*1000)
    currency.set('250',QUARTER[1]*1000)
    currency.set('100',DIME[1]*1000)
    currency.set('50',NICKEL[1]*1000)
    currency.set('10',PENNY[1]*1000)

    let currencyInUnits = currency.keys()
    currencyInUnits=Array.from(currencyInUnits,x=>Number(x))
    //console.log(currencyInUnits);

    //let cashAvailableInUnit = currency.values()

    //console.log(currency);
    //console.log(change);
    //console.log(cashAvailableInUnit);

    let cashAvailableArr=[]
    new Map(cashAvailable).forEach(x=>cashAvailableArr.push(x*1000)) ;
    cashAvailableArr;
//console.log(cashAvailableArr);
    

let cashUsedUpdate_ = (change_)=>{
    
    for (let unit of currencyInUnits){;
                
            cashUsedUpdate[currencyInUnits.indexOf(unit)][1]=0;
    while(change_>=unit&&change_>0&&cashAvailableArr[currencyInUnits.indexOf(unit)]>cashUsedUpdate[currencyInUnits.indexOf(unit)][1]){
        
        change_=change_-unit;cashUsedUpdate[currencyInUnits.indexOf(unit)][1]+=unit
    
    }
        
            }
           
     
            let closed = 0
            for(let i of cashAvailableArr.keys()){
                if(change_===0&&cashAvailableArr[i]===cashUsedUpdate[i][1]){closed++;}}

            let convert = function (convertFloat){
                for(let i of convertFloat.keys()){convertFloat[i][1]=(convertFloat[i][1])/1000
            }
            }
            let cashUsedNotZero = function(delUnused){
                for(let i of delUnused.keys()){if(delUnused[i][1]===0){delete delUnused[i]}
            }cashUsedUpdate=delUnused.filter(Boolean);
            }        
                      

            if(change_===0&&closed===9){convert(cashUsedUpdate); 
                let resultClosed = {
                    status: "CLOSED", 
                    change:cashUsedUpdate.reverse()
                };
                 result=(resultClosed);}

            if(change_===0&&closed<9){convert(cashUsedUpdate); cashUsedNotZero(cashUsedUpdate); console.log(cashUsedUpdate); 
                let resultOpen = {
                    status: "OPEN", 
                    change:cashUsedUpdate
                }; result=(resultOpen)}
                
            if(change_>0){result= {status: "INSUFFICIENT_FUNDS", change: []} }
                             
            }     
       
    cashUsedUpdate_(change)
    console.log(result); 
            return result;

}



checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
   checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])