let btn1=document.querySelector('.btn1');
let btn2=document.querySelector('.btn2');
let btn3=document.querySelector('.btn3');
let btn4=document.querySelector('.btn4');
let btn5=document.querySelector('.btn5');
let btn6=document.querySelector('.btn6');
let count1=0
let count2=0;
btn1.addEventListener('click',function () {
  document.querySelector('.num1').innerHTML=++count1;
})
btn2.addEventListener('click',function () {
  count1+=2;
  document.querySelector('.num1').innerHTML=count1;
})
btn3.addEventListener('click',function () {
  count1+=3;
  document.querySelector('.num1').innerHTML=count1;
})
btn4.addEventListener('click',function () {
  document.querySelector('.num2').innerHTML=++count2;
})
btn5.addEventListener('click',function () {
 count2+=2;
  document.querySelector('.num2').innerHTML=count2;
})
btn6.addEventListener('click',function () {
 count2+=3;
  document.querySelector('.num2').innerHTML=count2;
})