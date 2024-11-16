function toggleMenu()
{
      subMenu.classList.toggle("open-menu");   
}
function toggleMenu1()
{
   subMenu1.classList.toggle("open-menu1"); 
}
function toggleMenu2()
{
   //alert("dddddd");
      subMenu2.classList.toggle("open-menu2");   
}




const btn = document.getElementById("btnn");
const klose = document.getElementById("subMenu1");
const clik = document.getElementById("tog-btn");
const clik2 = document.getElementById("tog-btn1");
btn.addEventListener("click",()=> {
   if(btn.innerText=='Band qilish'){
  btn.style.backgroundColor="red" ;
  btn.innerText="Tasdiqlash";
  }
  else if(btn.innerText=='Tasdiqlash')
  {
   setTimeout(()=>{
      btn.style.backgroundColor = "blue";
      alert("Siz joy band qildingiz. Eslatib o'tamiz band qilingan joyni yarim soat oldin atmen qilishingiz mumkin. Agarda siz yo'lovchi qonun qoidalarini buzsangiz 3ta ogohlantirishdan so'ng dasturdan vaqtinchalik foydalana olmaysiz!!! ")
      btn.innerText="Tasdiqlandi";
     klose.style.display="none";
     clik.innerText="Tasdiqlandi";
     clik.style.backgroundColor="green"
     clik2.style.display="block"
   },1000)

  }
  if(clik2.style.display=="block")
  {
alert("Siz buyurtmani bekor")
  }
  
})









let workTime = "01";
let seconds = "00"

window.onload = () => {
   document.getElementById("minuts").innerHTML = workTime;
   document.getElementById("seconds").innerHTML = seconds;

}
function start(){
   alert("Telifon raqamingizga kod yuborildi!!!")
var k = document.getElementById("start");
document.getElementById('start').style.display = "none"; 
document.getElementById('start2').style.display = "block"; 

   seconds = 10;
   let workminuts = workTime-1;

   let timerfunction = () =>{
      document.getElementById("minuts").innerHTML = workminuts;
      document.getElementById("seconds").innerHTML = seconds;
if(workminuts>=0 && seconds !=-1){seconds = seconds -1;}
      else{
         document.getElementById('start1').style.display = "none"; 
         if(k.style.display === "none"){
            document.getElementById('start').style.display = "block"; 
            document.getElementById('start2').style.display = "none";
         }
         else{
            document.getElementById('start').style.display = "block";  
         }
      }

      if((seconds == 0 && workminuts != 0 ))
      {
         workminuts = workminuts-1;
      }
      }
   
   setInterval(timerfunction, 1000);
}