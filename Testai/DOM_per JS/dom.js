// HTML failas pildomas su Vanilla java script pagalba
// DOM - (Document Object Model)
// Vykdysime užduotis iš eilės.

// Sukurti div
const div = document.createElement('div');
// pridedame div elementui klase wrapper
div.classList.add('wrapper');
// patalpiname div tage body
const body = document.querySelector('body');
// arba dar galima 
// const body = document.body;
body.appendChild(div);
//Sukuriam headeri h1 "DOM (Document Object Model)"
const header = document.createElement('h1');
header.textContent = 'DOM (Document Object Model)';
// pridedame h1 prieš div su klase wrapper
div.insertAdjacentElement('beforebegin', header)
// sukuriame sarasa <ul></ul>
// pridedame i sąrašą tris elementus su tekstu 'vienas, du, trys'
const ul = `
<ul>
    <li>vienas</li>
    <li>du</li>
    <li>trys</li>
</ul>
`;
// ul elementus patalpiname elemente div su klase wrapper
div.innerHTML = ul;
// =======================================
// sukuriame paveikslėlį
const img = document.createElement('img');
// pridedame savybes paveikslui
// 1. pridedame atributa source
img.src = 'http://picsum.photos/240';
// 2. pridedame atributą width su reikšme 240
img.width = 240;
// 3. pridedame klasę super
img.classList.add('super');
// 4. pridedame savybę alt su reikšme "Super man"
img.alt = 'Super Man';
// patalpiname paveikslą viduje div su klase wrapper
div.appendChild(img)
// Naudojant HTML eilutę, sukurti div su klase pDiv + dviem paragrafais
const elemHTML = `
<div class='pDiv'>
    <p>Paragrafas 1</p>
    <p>Paragrafas 2</p>
</div>`
// patalpiname paskutinį div su klase pDiv iki elemento <ul></ul>
const ulList = div.querySelector('ul');
ulList.insertAdjacentHTML('beforebegin', elemHTML);
// pridedame prie antro paragrafo klasę text
const pDiv = document.querySelector('.pDiv'); // sukuriame kintamaji pDiv 
pDiv.children[1].classList.add('text');
// pašaliname pirmą paragrafą
pDiv.firstElementChild.remove();
// sukuriame funkciją generateAutoCard,
// kuri priima tris argumentus: brand, color, year
const generateAutoCard = (brand, color, year) => {
    const curDate = new Date();
    const curYear = curDate.getFullYear();
    return `
        <div class="autoCard">
            <div>
                <h2>${brand.toUpperCase()} ${year}</h2>
                <p>Automobilis ${brand.toUpperCase()} - ${year} metų. Auto amžius - ${curYear - year} metų.</p>
                <p>Spalva: ${color}</p>
                <button type='button' class='btn'>Pašalinti</button>
            </div>
        </div>
    `;
}
// funkcija turi grąžinti eilutę HTML:
// <div class="autoCard">
//      <h2>BRAND YEAR</h2>
//      <p>Automobilis BRAND - YEAR metų. Auto amžius - YEAR metų.</p>
// </div>
// Sukurti naują div su klase autos
const carsDiv = document.createElement('div');
carsDiv.classList.add('autos');
// sukurti tris korteles, naudojant funkciją generateAutoCard
const carsList = [
    { brand: 'Tesla', year: 2015, color: 'Raudona' },
    { brand: 'Lexus', year: 2016, color: 'Mėlyna' },
    { brand: 'Nissan', year: 2012, color: 'Juoda' },
]

const carsHTML = carsList.map(car => {
    return generateAutoCard(car.brand, car.color, car.year)
}).join(''); // join sujungia masyvo elementus
// sukurtas tris korteles patalpinti į vidų DIV su klase autos
carsDiv.innerHTML = carsHTML;
// Div su klase autos patalpiname į DOM documentą - prieš div su klase wrapper
div.insertAdjacentElement('beforebegin', carsDiv);
// prie kiekvienos auto kortelės pridėti mygtuką Pašalinti

// paspaudus mygtuką pašalinti, ištrinama kortelė iš DOM struktūros
// 1. pasirenkame visus mygtukus
const buttons = document.querySelectorAll('.btn');
// 2. Sukuriame pašalinimo funkciją
function handleClick(event) {
    const currentButton = event.currentTarget;
    // currentButton.closest('.autoCard').remove();
    currentButton.parentElement.remove(); // trina tik child elementa. liks kortele.
    // currentButton.closest('.autoCard').remove(); galima naudoti trynimui ieškant iki artimiausio elemento.
    console.log(currentButton.parentElement)
}
// 3. naudoti ciklą, kad priskirti įvykio vykdymą kiekvienam mygtukui.
buttons.forEach(button => {
    button.addEventListener('click', handleClick)
})


console.log(buttons)
