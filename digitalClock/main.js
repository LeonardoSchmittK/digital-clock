
document.body.onload=updateDate();

function updateDate(){
 let txt=window.document.getElementById('time');
 let date= new Date().toLocaleTimeString()

  // if(date.indexOf('PM')!=-1 || date.indexOf('AM')!=-1) {

  // }
  txt.innerText=date.slice(0,7)
  setInterval(updateDate,1000)
} 

