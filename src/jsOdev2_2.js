let birinciSayi=17296
let ikinciSayi=18416
let birinciSayininToplami = 0
let ikinciSayininToplami = 0

for (let i = 1; i < birinciSayi; i++){
    if (birinciSayi % i == 0){
        birinciSayininToplami +=  i}
    }

for (i = 1; i < ikinciSayi; i++){
    if (ikinciSayi % i == 0){
        ikinciSayininToplami +=  i}
    }

    if (birinciSayi == ikinciSayininToplami && ikinciSayi == birinciSayininToplami){
        console.log(birinciSayi + " sayısı ile " + ikinciSayi + " sayısı, arkadaş sayılardır")}
    else{
        console.log(birinciSayi + " sayısı ile " + ikinciSayi + " sayısı, arkadaş sayı değiller")}