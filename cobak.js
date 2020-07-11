function tampilAngka(n) {
    if (n === 0) {
        return 0;
    }    
    return n + tampilAngka(n - 1);
}

console.log(tampilAngka(10));




function pangkat(a,b) {
    if (b === 0) {
        return 1;
    }
    return a* pangkat (a,b - 1);
    
}
console.log(pangkat(5, 2));