console.log("Mükemmel Sayılar: ")
for(let sayi=2;sayi<1000;sayi++){
    let toplam = 0
    for (let i = 1; i <sayi; i ++) 
       if (sayi% i == 0) toplam = toplam + i       
    if (toplam == sayi) console.log(sayi)
}
