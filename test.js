let age = 30;
let name = 'XD';

if(true){
	let age = 40;
	let name= 'bob';
	console.log('this is local scope', age, name); 

if(true){
	let age = 50;
	console.log('this is local scope', age, name); 	
}}

console.log('this is global scope', age, name);

const pairs = ["red", "blue", "green", "white"]

for (let i=0; i<pairs.length; i++){console.log("------")
for (let j=i+1; j<pairs.length; j++)
{console.log(pairs[i], pairs[j])}

}

const x= [1,2,3]; 

x.forEach(each => console.log("this", each));




function fib(n, mem=[]){

	if (mem[n] != null)
	{return mem[n], console.log(n)}
	
	let result
if (n <= 2){result=1}

else {result= fib(n-1,mem)+fib(n-2,mem)
	
}
	mem[n] = result
	return result	

}

console.log(fib(10))

//fib2	1
//fib3	1 + 1
//fib4	2 + 1
//fib5	3 + 2
//fib6	5 + 3

const arr=[1,2,3,4]
const arr1= [...arr];


console.log(arr);
console.log("this",arr1);

function rest(a,b,...c){
	const csum= c.reduce((a, b) =>{return a+b},0)
	return a+b+csum
}

console.log(rest(1,10,2,3,4));

const [a, b,,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

function fifa(n,mem){
mem = mem || {}

if (mem[n]){return mem[n]};

if (n<=1){return 1}

else{ return mem[n]=(fifa(n-2,mem))+(fifa(n-1,mem))}

}

class G{
	constructor(x,y){
	this.x=x;
	this.y=y;
	}

	login(){console.log('this is',this.x)
	return this}

	logout(){console.log('this is working',this.y)
	return this}

	

		}


class Admin extends G{
	del(G){
		users = users.filter(u => {return u.x != G.x})}}




const GG =  new G('xxx','yyy')
const TYY =  new G('xty','yty')
const AD = new Admin('ad1','ad2')
console.log(GG);


GG.login().logout();

let users = [GG,TYY,AD];

AD.del(GG);

console.log(users);








let sARR= [1,2,3,10,100,100]

const dup = [...new Set(sARR)]

console.log(dup);


const test = {
	obj1: 11,
	get objGet(){return this.obj1+this.obj1},
	set objSet(s){this.obj1=s}
}

test.objSet=10
console.log(test.obj1);


const getSet = {
	obj1: 50,
	obj2: 60,
	get obj3(){return this.obj1},
	set obj4(s){this.obj1=s}
}

getSet.obj4 = 100
console.log(getSet.obj3);


class AA {
	constructor (email){
		this.email=email;
	}


}

const AAemail= new AA ('gmail')
console.log(AAemail.email);

const person = {
	first: '',
	last: 'mage',

	get full(){return this.first},
	set full(value){this.first = value}
}

person.full = "bob"

console.log(person);
console.log(person.full);
  
class Thermostat{
	constructor(f){
	this.f=f};
  
	get temperature(){return this.thermos};
	set temperature(value){this.thermos=value};
  
	
  
  }

  const thermos = new Thermostat(76);
  let temp = thermos.temperature;
  thermos.temperature = 26;


console.log(thermos)
console.log(thermos.temperature)








let xx= {
	email:['gmail', '','hmail','bing'],
	name: ['bob','pop','non']
}




for((index) in xx.email){console.log(`${index}:`, xx.email[index]);}




const xxx = [1,2,3,4,5,6,7]

let sl = xxx.slice(1,3)
let spl = xxx.splice(1,3,22,33,44)

console.log(sl);
console.log(spl);


	




const yyy = [[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]]

const testing = (arr)=>{console.log(arr);}

testing(yyy)
console.log(yyy);


for (ele in xx){console.log(ele);}

yyy.forEach(testing);

console.log(xxx);






































 

















    



















