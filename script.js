var id = document.getElementById('adviceid');
var advice=document.getElementById('advice');
function getAdvice(){
  fetch('https://api.adviceslip.com/advice').then((response)=>{
  return response.json()
    }).then((data)=>{
        id.innerText=data.slip.id;
        advice.innerText=`"${data.slip.advice}"`;

    }).catch((err)=>{
        console.log(err)
    })
}
getAdvice()