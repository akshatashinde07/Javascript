  const myObject = {
    "name":"Alice",
    "age":35,
    "isStudent": true,
    "hobbies":["reading","coding"],
    "address":{
        "city":"New-York",
        "zipCode":"10001"
    }
}
console.log(`Name: ${myObject.name}`);
console.log(`age: ${myObject.age}`);
console.log(`she is student : ${myObject.isStudent}`);
console.log(`hobbies: ${myObject.hobbies[0]}`);
console.log(`city: ${myObject.address.city}`);
console.log(`zipCode: ${myObject.address.zipCode}`);

/*
let i;
const arr = [];
sum = 0;
for(i=0;i<10;i++)
{
    arr[i] = (i+1)*3;
}
for(i=0;i<10;i++)
{
    console.log(`${arr[i]}`);
}
for(i=0;i<10;i++)
{
    if(arr[i]%5==0)
    {
        sum = sum + arr[i];
    }
}
console.log(`the sum of the values is ${sum}`); */

const a = [];

for(i=1;i<=10;i++)a.push(i);
console.log(a.map(x=>x*3).filter(x=>x%5==0).reduce((a,x)=>a+x));

const b = [-2,4,5,-7,2,4,6,-3];
console.log(b.filter(x=>x>0).reduce((a,x)=>a+x));

const users = 
[
    {name:"Alice", age:12 },
    {name:"charlie",age:20 },
    {name:"bob",age : 12}
    
]

let avg = (users.reduce((average,value)=>{
        return average+value.age},0));
console.log(`${avg/users.length}`);

const marks = 
[
    {name:""}
    
]

let percentage = (marks.reduce((,value)=>{
        return average+value.age},0));
console.log(`${avg/users.length}`);

