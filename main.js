console.log("start");
console.log(document.getElementById("outcanvas"));
console.log(document.getElementById("buttonSwitch"));
var decoder = new _qrdecoder('outcanvas', 240, 180);
decoder.start()
.then(function(data){
    console.log(data);
});   
function switchCam(){
    decoder.switchCamera();
}