//script 1 ET=15min   AT=7min
/*1.	Создайте объект calculator с методами:
a.	read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
b.	sum() возвращает сумму этих двух значений
c.	multi() возвращает произведение этих двух значений
d.	diff() возвращает разницу
e.	div() возвращает частное*/

let calculator={
    x:0,
    y:0,
    read : function(x,y){
        this.x=+prompt("firstValue");
        this.y=+prompt("secondValue");
        return this;
    },
    sum : function(){
        return this.x+this.y;
    },
    multi : function (){
        return this.x*this.y;
    },
    diff : function(){
        return this.x-this.y;
    },
    div : function (){
        return this.x/this.y;
    },
};
calculator.read();
alert( calculator.sum() );
alert( calculator.multi() );
alert( calculator.diff() );
alert( calculator.div() );


//script 2 ET=10min   AT=15min
/*2.	Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ 
и методом start(), при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно 
с сообщением, записанным в свойстве объекта message.*/

let coffeeMachine={
    message: "Your coffee is ready!",
    start:function(){
        setTimeout(()=>alert(this.message), 3000);
    },
};

coffeeMachine.start();


//script 3 ET=5min   AT=7min
/*3.	Создайте объект counter с методами увеличения, уменьшения значения счетчика и 
методом возврата текущего значения. Используйте концепцию chaining для создания цепочки вызовов.
*/
let counter={
    count:0,
    inc : function (){
        this.count++;
        return this;
    },
    dec() {
        this.count--;
        return this;},
    getValue() {return this.count;},

};
var current = counter.inc().inc().dec().inc().dec().getValue();
alert(current); 


//script 4 ET=10min   AT=10min
 /*4.	Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. 
 Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ 
 или ‘1 / 0 = Infinity’. Для расчетов все методы используют функционал ранее созданного калькулятора.*/

let me={
    x:0,
    y:0,
    getSum: function (a,b) {
        this.x=a;
        this.y=b;
        let val=calculator.sum.call(me);
        return `${this.x}+${this.y}=${val}`;
    },
    getDiff: function (a,b) {
        this.x=a;
        this.y=b;
        let val=calculator.diff.call(me);
        return `${this.x}-${this.y}=${val}`;
    },
    getMulti: function (a,b) {
        this.x=a;
        this.y=b;
        let val=calculator.multi.call(me);
        return `${this.x}x${this.y}=${val}`;
    },
    getDiv: function (a,b) {
        this.x=a;
        this.y=b;
        let val=calculator.div.call(me);
        return `${this.x}:${this.y}=${val}`;
    },
}

alert(me.getSum(1, 1));
alert(me.getDiv(1, 2));
alert(me.getMulti(1, 3));
alert(me.getDiff(1, 6));

 //script 5 ET=5min   AT=7min
 /*5.	
Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:
*/

  var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}
format.call(country,"",""); // Ukraine
format.apply(country,["[","]"]); // [Ukraine]
format.call(country.capital,"",""); // Kyiv
format.apply(country.capital,["",""]); // Kyiv
format.apply(null,["indefined",""]); // undefined

 
 /* script 6 ET=20min   AT=25min
  6. Создайте объект user с полем name. Создайте функцию format с параметрами start и end:
Привяжите функцию format() к объекту user таким образом, 
чтобы ее вызов возвращал отформатированное имя пользователя
Реализуйте 2 версии текущего задания, используя:
1. Анонимную функцию;
2. Метод bind().
 */

 let user={
     name:"John",
    
 }
function format(start, end) {
    console.log(start + this.name + end);
}
function userFormat (a,b) {
    format.call(user,a,b);
  }
userFormat('<<<', '>>>'); // <<<John>>>

let funcUser = format.bind(user);
funcUser('<<<', '>>>'); // <<<John>>>
 
let u=function(a,b) {
    format.call(user,a,b);
  }
  u('<<<', '>>>');

/* script 7 ET=10min   AT=7min
 7.	Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: 
 разделитель и строки передаются в параметрах функции.
  Используя карринг, создайте новую функцию hello, которая которая выводит приветствие тому, 
  кто передан в ее параметре:
 */
function concat (str1, r, str2) {
    return console.log(str1+r+str2);
}

let hello = concat.bind(null,"Hello", " ");

hello('World'); // Hello World
hello('John'); // Hello John


/* script 8 ET=5min   AT=5min
 8.	1.	Напишите функцию, которая возвращает 
 куб переданного числа, аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:
 */

function recur (x, st){
    if (st>0)
    {
        pow2*=x;
        st--;
        return recur(x,st);
    }
    else return;
}

let n=+prompt("value");
let pow1=1, pow2=1;

for (let i=0; i<3; i++){
    pow1*=n;
}
console.log ("for loop ="+pow1);

recur(n,3);
console.log ("for recurse ="+pow2);


 /* script 9 ET=5min   AT=8min
 9.	Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения
 */


function sum (... values){
    let it=0
    s=0;
    let arr=[].slice.call(values);
    let l=values.length;
    s=countSum(s,it,arr,l);
    return s;
}
function countSum(s,it,values,l){
    if (it<l){
        s+=values[it];
        it++;
        return countSum(s,it,values,l);
    }
    else{
        return s;  
    } 
}
 
console.log( sum(1, 2, 3, 4, 5) ); 
console.log( sum(1, 2, 3, -2, -1) ); 
 