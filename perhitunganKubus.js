function jumnlahVolume(a,b) {
     return a * a * a + b * b * b;
}

var confirm = true;


while (confirm == true) {
    var sisiKubus1 = parseInt(prompt('masukan sisi kubus pertama'));
    var sisiKubus2 = parseInt(prompt('masukan sisi kubus kedua'));
    
    alert(jumnlahVolume(sisiKubus1,sisiKubus2));
    
   
    confirm = prompt('ingin mengulang?');
}  
