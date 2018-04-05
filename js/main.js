function magic(array) {
    


var name = {
    btn: document.getElementById('btn_name'),
    inpt: document.getElementsByName('inpt_name'),
    txt: document.getElementById('txt_name'),
}

var day = {
    btn: document.getElementById('btn_day'),
    inpt: document.getElementsByName('inpt_day'),
    txt: document.getElementById('txt_day'),
}
var clock = {
    btn: document.getElementById('btn_clock'),
    inpt: document.getElementsByName('inpt_clock'),
    txt: document.getElementById('txt_clock'),
}
var peroid = {
    btn: document.getElementById('btn_peroid'),
    inpt: document.getElementsByName('inpt_peroid'),
    txt: document.getElementById('txt_peroid'),
}
var chat = {
    btn: document.getElementById('btn_chat'),
    inpt: document.getElementsByName('inpt_chat'),
    txt: document.getElementById('txt_chat'),
}
array.btn.style.display = "none";
console.log("Button gizlendi")
array.inpt.style.display = "none";
console.log("Input gizlendi")
array.btn.style.display = "block";
console.log("Text gösterildi")

}

