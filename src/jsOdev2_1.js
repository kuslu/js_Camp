let asalMi=true

function findPrime(...sorgulanacakSayilar) {
    for(let j=0; j<sorgulanacakSayilar.length; j++){ //x parametre kadar dönmesi için for        
        for(let i=2; i<=sorgulanacakSayilar[j]-1; i++){ // kontrol edilecek sayı kadar dönmesi için for
            if(sorgulanacakSayilar[j]%i==0){
                asalMi=false
            }
        }
            if(sorgulanacakSayilar[j] == 1) asalMi=false
            if(asalMi == true){ 
                console.log(sorgulanacakSayilar[j] + " saysısı asaldır.") }
            else{
                console.log(sorgulanacakSayilar[j] + " saysısı asal değildir") }        
            asalMi=true
    }
}

findPrime(1,9,5,6,19,55,99,2)
