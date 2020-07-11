function tambah() {
    a = eval(kalkulator.satu.value);
    b = eval(kalkulator.dua.value);
    c = a + b;
    kalkulator.hasil.value = c;
}
function kosong() {
    kalkulator.satu.focus();
    kalkulator.satu.value = "";
    kalkulator.dua.value = "";
    kalkulator.hasil.value = "";
}
function kurang() {
    a = eval(kalkulator.satu.value);
    b = eval(kalkulator.dua.value);
    c = a - b;
    kalkulator.hasil.value = c;
}
function pangkat() {
    a = eval(kalkulator.satu.value);
    b = eval(kalkulator.dua.value);
    c = Math.pow(a, b);        // khusus huruf M pada Math dengan huruf besar
    kalkulator.hasil.value = c;
}


