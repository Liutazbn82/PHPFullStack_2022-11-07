let lygiu_sk = prompt("Kiek raundų norite žaisti?", "");
let sekundes_sk = prompt("Kiek laiko truks raundas (sekundėmis)?", "");
const pradetiZ = () =>{
    document.querySelector('.zaidimo_paleidimas').style="display:none";// paslepiame pradėti žaidimą mygtuką.
    document.querySelector('.zaidimo_pauze').style="display:block"; // parodome pauzės mygtuką

    // pasiimam kintamuosius
let laikmatis = document.querySelector('.nuliukai'); // paimame lauką, kuriame atvaizduosime laikmątį;
let zona = document.querySelector('.zaidimo_zona');// div elementas apibrėžiantis zoną, iš kurios ribų kvadratas neišeis.
let plotis = zona.offsetWidth; // div zonos plotis.
let aukstis = zona.offsetHeight; //div zonos aukštis;
let maxplotis = plotis -50; // maximalus plotis įskaitant kvadrato plotį;
let maxaukstis = aukstis -50; // maximalus aukštis įskaitant kvadrato aukštį.
let pauze = document.querySelector('.zaidimo_pauze');
let startas = document.querySelector('.zaidimo_pauze1');
let paspaudimai =  document.querySelector('.kvadratas');// kvadrato div elementas priskiriamas kintamajam.
let zaidejo_info = document.querySelector('.z_info');//Žaidėjo informacijos div elementas priskiriamas kintamajam.
let kompiuterio_info = document.querySelector('.k_info');// Kompiuterio informacijos div elementas priskiriamas kintamajam. 
let ztaskai =0; // kintamasis žaidėjo taškams rinkti.
zaidejo_taskai = []; // masyvas renkantis kiekvieno raundo žaidėjo taškus
kompiuterio_taskai= [];// masyvas renkantis kiekvieno raundo kompiuterio taškus
let trukme = sekundes_sk ; // raundo trukmė sekundėmis
let limit = lygiu_sk; // raundų kiekis 
let ktaskai =0; // kintamasis kompiuterio taškams rinkti.
let paspaustas = false; // gražinta reikšmė "false" jeigu kvadratas nepaspaustas.
let rezultatai ='';// rezultatų atvaizdavimas.
let raundai = 0; //  raundų skaičiavimas
let stopas = true; // žaidimo sustabdymas
timer = setInterval(function(){ // sukuriam funcija kuri kartosis kas 1s.
    pauze.addEventListener("click", function(){ stopas = false; });
    startas.addEventListener("click", function(){ stopas = true; });
    if(!stopas){
        document.querySelector('.zaidimo_pauze').style="display:none" 
        document.querySelector('.zaidimo_pauze1').style="display:block"
    }else{
        document.querySelector('.zaidimo_pauze').style="display:block" 
        document.querySelector('.zaidimo_pauze1').style="display:none"
    }
     if(stopas){ // tikriname ar žaidimą reikia stabdyti
        stopas = true;

   
    
    paspaudimai.addEventListener("click", function(){ paspaustas = true;; });  // paspaudus ant kvadrato priskiriama reikšmė, jog kvadratas paspaustas

    if(paspaustas === true) // tikriname ar kvadratas paspaustas, jei paspaustas pliusuojam žaidėjo taškus, jei ne - kompiuterio taškus. 
    {
       ztaskai++
    }else{
        ktaskai++
    }
    zaidejo_info.innerHTML="<h3>Žaidėjo taškai : "+ztaskai+"</h3>"; // žaidėjo taškų atvaizdavimas raunde
    kompiuterio_info.innerHTML="<h3>Kompiuterio taškai : "+ktaskai+"</h3>"; // kompiuterio tašku atvaizdavimas raunde. 
trukme--; // mažiname raundo trume -1

    if(trukme===0){ // tikriname ar raundas pasibaigęs.
        trukme = sekundes_sk ; // priskiriam naują reikšmę sekančiam raundui
        zaidejo_taskai.push(ztaskai); // pushinam žaidėjo taškus į masyvą.
        kompiuterio_taskai.push(ktaskai); // pushinam kompiuterio taškus į masyvą.
        kaslaimejo = kaslaimejoraunda(raundai)// tikriname kas laimėjo raundą, iššaukdami funkcija, perduodami jai raudo informacija, kaip masyvo indexa.
        ktaskai = 0;// nulinam kompiuterio taškus..
        ztaskai =0;// nuliname žaidėjo taškus. 
        rezultatai +=` <h3>Raundas ${raundai+1} : ${kaslaimejo} Rezultatas ${zaidejo_taskai[raundai]}:${kompiuterio_taskai[raundai]}</h3>`; // atvaizduojam rezultatus
        raundai++; // didinam raudus (atvaizdavimui).
        limit--;// minusuojam raundą.
    }
        if(limit === 0 || limit<0){ // tikrinam ar pasibaigė visi raundai.
            document.querySelector('.kvadratas').style= "display:none"
            document.querySelector('.zaidimo_paleidimas').style="display:block";
            document.querySelector('.zaidimo_pauze').style="display:none";
            document.querySelector('.zaidimo_pauze1').style="display:none";
            document.querySelector('.zaidimo_paleidimas1').style="display:none";
            clearInterval(timer); // žaidimas stabdomas


        }

    
    if(trukme<10){ //tikriname ar sekundės yra mažiau negu 10.
        if(limit === 0){//tikriname ar žaidimas baigtas.
            laikmatis.innerHTML="00:00";
        }else{
        laikmatis.innerHTML="00:0"+trukme // atvaizduojame 00:09 -> 00:00
        }
    }else{
        if(limit === 0){//tikriname ar žaidimas baigtas.
            laikmatis.innerHTML="00:00";
        }else{
            laikmatis.innerHTML="00:"+trukme  // atvaizduojame 00:30 ->00:10
        }
        
    }
let spalva = '#'+ Math.round(0xffffff * Math.random()).toString(16);  // random spalvos parinkimas.
let pozicija_x = (Math.random() * (maxplotis)).toFixed();// random kvadrato pozicija x ašyje.
let pozicija_y = (Math.random() * (maxaukstis)).toFixed(); // random kvadrato pozicija y ašyje. 
const kvadratas = document.querySelector('.kvadratas'); // priskiriame kvadrato divą kintamajam.
kvadratas.style.left = pozicija_x+"px"; // priskiriame pozicija x ašyje kvadratui.
kvadratas.style.top = pozicija_y+"px";  // priskiriame pozicija y ašyje kvadratui.
kvadratas.style.backgroundColor = spalva;   // priskiriame spalvą kvadratui.
if(limit === 0){ //tikriname ar žaidimas baigtas.
    kvadratas.style.display = "none"; // padarome nematomą kvadratą.
}else{
    kvadratas.style.display = "block"; // padarome matoma kvadratą.
}
paspaustas = false; // nustatome, kad kvadratas nepaspaustas.
document.querySelector('.rezultatai').innerHTML=rezultatai; // raundo rezultatų atvaizdavimas.
console.log(trukme,limit,ztaskai,ktaskai, zaidejo_taskai,kompiuterio_taskai); // konsolėje rodoma informacija.
}else{
}
}, 1000);
 
const kaslaimejoraunda = (i) =>{ //funcija tikrinanti kas laimėjo raundą gavus i reikšmę, kuri yra masyvo indexas.
    console.log(zaidejo_taskai[i],kompiuterio_taskai[i]); // consolėje atvaizduojame ir pasitikrinam ar viskas gerai atsivaizduoja
        if(zaidejo_taskai[i]>kompiuterio_taskai[i]){ // tikriname kieno taškai didesni, pagal tai grąžiname rezultatą, ten kur funkcija buvo iškviesta.
            return "Laimėjo <label style='color:green'>Žaidėjas!<label>";
        }else if(zaidejo_taskai[i]<kompiuterio_taskai[i]){
               return "Laimėjo <label style='color:red'>Kompiuteris!<label>";
            }
            else{
                return "<label style='color:blue'>Lygiosios!<label>";  
            }
        }
}