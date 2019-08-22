var countdown = 10;

function settime() {

  console.log(countdown)
  countdown--
  if(countdown>=0){

  setTimeout(function () {
    settime()
  }, 1000)
  }else{
    count=10
  }
 
}

settime()