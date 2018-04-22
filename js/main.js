/* TANIM */
var name = {
    btn: document.getElementById('btn_name'),
    inpt: document.getElementById('inpt_name'),
    txt: document.getElementById('txt_name'),
}

var day = {
    btn: document.getElementById('btn_day'),
    inpt: document.getElementById('inpt_day'),
    txt: document.getElementById('txt_day'),
}

var clock = {
    btn: document.getElementById('btn_clock'),
    inpt: document.getElementById('inpt_clock'),
    txt: document.getElementById('txt_clock'),
}

var peroid = {
    btn: document.getElementById('btn_peroid'),
    inpt: document.getElementById('inpt_peroid'),
    txt: document.getElementById('txt_peroid'),
}

var chat = {
    btn: document.getElementById('btn_chat'),
    inpt: document.getElementById('inpt_chat'),
    txt: document.getElementById('txt_chat'),
}

     
function show_img() {
    var avatar = document.querySelector('#avatar');
    var file = document.querySelector('input[type=file]').files[0];
    var f_reader = new FileReader();

    f_reader.onloadend = function () {
        avatar.src = f_reader.result;
    }

    if (file) {
        f_reader.readAsDataURL(file);
    } else {
        avatar.src = "/img/example.svg";
    }
}
show_img();
/* Resmi Göster */



/* MAGIC Fonksiyonu */
function magic(array) {

    /* Giriş Boş ise Hata Ver */
    if (array.inpt.value == "") {
        window.alert("Please Fill The Blanks");
        return
    }

    /* Input ile Text değerleri eşle */
    array.txt.innerHTML = array.inpt.value;

    /* Input u gizle */
    array.inpt.style.display = "none";

    /* Butonu gizle */
    array.btn.style.display = "none";

    /* Text i inline olacak şekilde göster */
    array.txt.style.display = "inline";
}

show_img();
/* Resmi Göster */