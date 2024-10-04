const results = {
  load(imga, namea, ida, patha, downloada, time){
    let img = imga;
    let name = namea;
    let id = ida;
    let path = patha;
    let download = downloada;
    document.getElementById("result").innerHTML = '<div id="box"><div style="float: left;"><img src="' + img + '" width="30px" class="img"></div><div style="float: right;margin-left: 200px">name : ' + name + ' <br> id : ' + id +', day & time : ' + time + ' <br> <a href="' + path + '" download="' + download + '"><button>Download</button></div>';
  }
}

// image codes are accessed

// image code 001
// img id img-001
document.getElementById("img-001").addEventListener("click", function(){
  results.load("img/img_001.jpeg", "Image 001 Technology Image", "001", "img/img_001.jpeg", "Technology Image id-001 by kartimages", "03/01/2024, 21:38pm India");
})

// img 002
document.getElementById("img-002").addEventListener("click", function(){
  results.load("img/img_002.jpeg", "Image 002 Technology Image", "002", "img/img_002.jpeg", "Technology Image id-002 by kartimages", "03/01/2024, 21:38pm India");
})


// img 003
document.getElementById("img-003").addEventListener("click", function() {
  results.load("img/img_003.jpeg", "Image 003 Technology Image", "003", "img/img_003.jpeg", "Technology Image id-003 by kartimages", "03/01/2024, 21:38pm India");
})


// img 004
document.getElementById("img-004").addEventListener("click", function() {
  results.load("img/img_004.jpeg", "Image 004 Technology Image", "004", "img/img_004.jpeg", "Technology Image id-004 by kartimages", "03/01/2024, 21:38pm India");
})