console.log("hello world!")
const cowsay = require("cowsay");
console.log(cowsay.say({text :"i am a cowsaayy",
    e : 'ooo',
    T : 'U',
 }))
 
 const appName = "basic keyword demo";
 const currentDate = new Date();
 const daysInWeek = 7;
 
const a = 5;
console.log("the value of a is "+a);
console.log(`the value of a is also ${a}`);
const greeting = greet(`SHUBHANGI`,`19`,);
console.log(greeting);

function greet(name,age)
{
    let message = `hello ${name} your age is ${age}`;
    return message;
}
let counter = 0;
while(counter<3)
{
  console.log(`loop iteration ${counter}`);
counter = counter +1;
}
console.log("while loop finished");
const fruits = ["apple","banana","cherry"];
for(let i = 0;i<fruits.length;i++)
{
   
   console.log(`fruit at index ${i} is ${fruits[i]}`);
}
let temperature = 25;
if(temperature >30)
{
    console.log("its a hot day");
}
else if(temperature<30)
{
    console.log("its cool");
}
else{
    console.log("hot and cool")
}
function calculateArea(length , width = 1){
    return length * width;
}
const rectangleArea = calculateArea(10 , 5);
console.log(`the area of the rectangle is ${rectangleArea}`);
const squareArea = calculateArea(8,8);
console.log(`the area of the square is ${squareArea}`);
function getsum(a,b)
{
    return (a+b);
}
console.log(`the sum of the 2 numbers is ${getsum(2,5)}`);

let sum = 0;
for(let i = 0 ; i<1000;i++)
{
    if((i%3==0)||(i%5==0))
    {
        sum = sum +i;
    }
    
}
console.log(`the sum of the numbers which are divisible by 3 or 5 are ${sum} `);
sumf = 0;
let m = 1;
let n = 1;
let c = 0;
console.log("fibonacci series is:");
console.log(`${m} \n ${n}`);
while(c<4000000)
{
    c = m+n;
    if(c%2==0)
    {
        sumf = sumf+c;
    
    }
    m = n;
    n = c;
    console.log(`${c}`);
}

console.log(`the sum of even numbers of fibonnacci series is : ${sumf}`);
let p = 600851475143;
function isprime(p)
{    
    for(let i = 2;i<n/2;i++)
    {
       if(n%i==0)
       {
        return 0;
       }
       return 1;
    }
}
let largest = -1;
for(let i = 2;i<=n/2;i++)
{
    if(n%i==0 && isprime(i)==1)
    {
        largest = i;
    }
}
console.log(`the largest prime factor is : ${largest}` );

let num = 5;
let sum1 =0;
let factorial = 1;
for(let i = num ; i>0 ; i--)
{
    factorial = factorial*i;
}
console.log(`the factorial of 5 is ${factorial}`);
let x = factorial;
while(x>0)
{
   let d = x%10;

   sum1 = sum1 + d;
   x = x-d;
      x = x/10;
}
console.log(`the sum of digits is ${sum1}`);

