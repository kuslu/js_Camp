console.log("2..1000 arasındaki asal sayılar:")
for(let j=2; j<1000; j++){
    let asalMi=true
    for(let i=2; i<=j-1; i++){ // kontrol edilecek sayı kadar dönmesi için for
        if(j%i==0) asalMi=false
    }
        if(asalMi == true) console.log(j)
        asalMi=true
}
