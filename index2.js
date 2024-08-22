var frontpagediv =  document.getElementById("frontpagedivid");
var gamediv = document.getElementById("grid")
var backarrow = document.getElementById("backarrowid")
var isonsomethingelse = false
var updatesdiv =  document.getElementById("updatesdivid");




function sussy(){
  frontpagediv.style.transform = 'translateY(-150%)';
  updatesdiv.style.transform = 'translate(180%,-50%)';

  gamediv.style.transform = 'translateY(-110%)';
  backarrow.style.opacity = 1;
}

backarrow.onclick = function(){
  if (backarrow.style.opacity == 1){
    gamediv.style.transform = 'translateY(600px)';
    frontpagediv.style.transform = 'translateY(0%)';
    updatesdiv.style.transform = 'translate(180%,-193%)';

    backarrow.style.opacity = 0;
  }

}

