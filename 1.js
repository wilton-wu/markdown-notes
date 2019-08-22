var countdown = 10;

function settime(val) {

  console.log(countdown)
  countdown--
  if(countdown>=0){

  setTimeout(function () {
    settime(val)
  }, 1000)
  }else{
    count=10
  }
 
}

settime()