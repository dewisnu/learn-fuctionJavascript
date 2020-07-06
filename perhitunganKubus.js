function jumnlahVolume(a,b) {
    var  volume1= a * a * a;
    var volume2= b * b *b;
    var hasil = volume1 + volume2;

return hasil;
}

var confirm = true;


while (confirm == true) {
    var sisiKubus1 = prompt('masukan sisi kubus pertama');
    var sisiKubus2 = prompt('masukan sisi kubus kedua');
    
    alert(jumnlahVolume(sisiKubus1,sisiKubus2));
    
   
    confirm = prompt('ingin mengulang?');
}  
