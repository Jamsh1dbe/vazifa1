// 1-masala
// number.parseInt(son)==> shu sonni faqat butun qiymatini oladi
// var a= 12.1;
// var b= 12.6;
// var c = 0.7;
// var d =0.1;
// console.log(Number.parseInt(a));//12
// console.log(Number.parseInt(b));//12
// console.log(Number.parseInt(c));//0
// console.log(Number.parseInt(d));//0

// 2-masala

// var a= 12
// console.log(Number.parseFloat(a));//kasr son

// 3-masala
// var a = 0.123
// console.log(a.toFixed(3));
// console.log(a.toFixed(0));
// console.log(a.toFixed(2));

//4-masala
// var a = 10
// var b = 20
// console.log(a+b.toString());

// var a =10
// console.log(a.toString());


//5-masala
//binary
// console.log(parseInt(100010,2));
// console.log(Number(4).toString(2));

//6-masala
// console.log(Math.pow(3, 2)); //daraja
// console.log(Math.pow(3,3));
// 7-masala
// console.log(Math.abs(-12)); //modul

// 8-masala
// console.log(Math.round(12.5));
// console.log(Math.round(12.2));
// 9-masala
// console.log(Math.ceil(12.6));
// console.log(Math.ceil(12.2));
// 10-masala
// console.log(Math.floor(12.6));
// console.log(Math.floor(12.2));
// 11-masala
// console.log(Math.cbrt(1000));
// 12-masala
// console.log(Math.min(12, 1, -11, 20, 1232));
// 13-masala
// console.log(Math.max(12, 1, -11, 20, 1232));
// 14-masala
// console.log(Math.random());
// console.log(parseInt(Math.random()*100));

//15-16-masala
// var a = 'Hello World'
// var b = "salom \"Jamshidbek\" kak"
// console.log(a.concat(b , 'dsak'));

//17-masala back tag
// let name = 'Hello World';
// let title = `jamshidbek 
// ${name} "kdsjk"  mkldjsk`; 
// console.log(title)
 
// 18-masala
// var name = 'name name name name name name name name name '
// console.log(name.indexOf('name' ));
// console.log(name.indexOf('name', 16));

// 19-masala
// var namee = ' name name name name name name name '
// console.log(namee.lastIndexOf('name' ));
// console.log(namee.lastIndexOf('name', 16));


// 20-masala

// var namee = ' name name name name name name name '
// console.log(namee.search('name' ));

// 21-masala
// var a = 'Jamshidbek juda zor bola'
// console.log(a.slice(4, 7));
// console.log(a.slice(4, -7)); //minus qiymat oladi(-)

// 22-masala

// var a = 'Jamshidbek juda zor bola'
// console.log(a.substring(4, 7)); 

// 23-masala

// var a = 'Jamshidbek juda zor bola'
// console.log(a.substr(4, 7)); 

// 24-masala

// var a = 'Jamshidbek juda zor bola'
// console.log(a.replace('zor', 'yaxshi')); 
 
// 25-masala

// var a = 'Jamshidbek juda zor bola'
// console.log(a.split(''), '1');
// console.log(a.split(' '), '2');
// console.log(a.split('a'), '3');

//26-masala

// var a = 'Jamshidbek juda zor bola'
// console.log(a.includes('ju'));
// console.log(a.includes('a', 12));

// 27-masala

// console.log('2+2*3**2');
// console.log(eval('2+2*3**2'));

//28-masala

// var test1 = '10';
// let test2 = '10';
// function Jamshidbek(){
//     test1 = 20;
//     test2 = 20;
//     console.log(test1, test2);
// }

// Jamshidbek();
// console.log(test1 , test2);

// function hello(name){
//     console.log(`Hello ${name}`);
// }
// hello('Jamshidbek')
// hello('Jon')
// hello()
// hello('')

// function hello(name, surname, age='enter age'){
//     console.log(`Hello ${name} ${surname} ${age}`);
// }
// hello('Jamshidbek' , 'Sharipov', 18)
// hello('Jon', 'john', )

// function pow(a, b){
//     return a**b 
// }
// console.log(pow(2, 3));
// console.log(Math.pow(2, 3));  

// 29-masala

// const jamshid =(a)=>{
//     console.log(a);
// }
// jamshid(9)

// 30-masala

// ==, ===, >=, <=, !, &&, ||, !=, <, >;

console.log('10' === 10);
console.log('10' == 10);
console.log('10' <= 10);
console.log('10' >= 10);
console.log('10' < 10);
console.log('10' > 10);
console.log('10' != 10);
console.log('10' && 10);
console.log('10' || 10);
console.log(!true);