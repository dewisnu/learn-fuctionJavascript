//sebelum menerapkan refactoring pada fuction jumblahDuaBilangan
//function jumblahDuaBilangan(a,b) {
   // var jumblah = a + b;
    
    //return jumblah;
//}


// setelah menerapkan refactoring pada fuction jumblahDuaBilangan
// fuction menjadi lebih efisien dalam tampilan dan performa 
function jumblahDuaBilangan(a,b) {
  
    return a + b;
}

var penguranganDuaBilangan = function (a,b) {
    
    mengurang = a - b;

    return mengurang;
}

alert(jumblahDuaBilangan(1,2));
alert(penguranganDuaBilangan(2,1));