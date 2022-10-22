

const daysValue =document.querySelector("#days");
const hoursValue =document.querySelector("#hours");
const minutesValue =document.querySelector("#minutes");
const secondsValue =document.querySelector("#seconds");
const countdownDateTime = new Date(2023,1,1,0,0,0).getTime();

function countDown()
{
  const dateTimeNow = new Date().getTime();
  let difference = countdownDateTime - dateTimeNow;

  //Days
 // calculating in milliseconds so we multiply by 1000
  const daysValueNumber = Math.floor(difference / (1000*60*60*24));
  //hours
  const hoursValueNumber = Math.floor(difference / (1000*60*60*24));
  //minutes
  const minutesValueNumber = Math.floor(difference / (1000*60) %60);
  //seconds
  const secondsValueNumber = Math.floor(difference / (1000)%60);

  daysValue.innerHTML=daysValueNumber;
  hoursValue.innerHTML=hoursValueNumber;
  minutesValue.innerHTML=minutesValueNumber;
  secondsValue.innerHTML=secondsValueNumber;



 // console.log(daysValueNumber , hoursValueNumber  , minutesValueNumber , secondsValueNumber);

}

setInterval(function(){
  countDown();
},1000);



