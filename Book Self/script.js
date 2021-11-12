
let div = document.querySelector('div')
let heading = document.querySelector('h1');
let form = document.querySelector('form');
let nam = document.querySelector('#name');
let author = document.querySelector('#author');
let isbn = document.querySelector('#isbn');
let pub = document.querySelector('#pub');

let btn = document.querySelector('#btn').addEventListener('click', submitBook);


function submitBook(n, a, i, p, br){

    n = nam.value + ".";
    a = author.value + ".";
    i = "ISBN-" + isbn.value;
    p = pub.value + ".";
    br = "</br>";
    
    h2.innerHTML = `Book Name : ${n} ${br}Author Name : ${a} ${br}ISBN Number : ${i} ${br}Publications : ${p}`;
    newelements();
    textstyle();
}

let h2 = document.createElement('h2');
let text = document.createTextNode("");
h2.appendChild(text);
div.appendChild(h2)

function newelements(){
    h2.style.color = 'white';
    h2.style.paddingLeft = '20px';
    h2.style.paddingBottom = '20px';
    h2.style.lineHeight = '35px';

}
function textstyle(){
    div.style.backgroundColor = '#4338CA';
    div.style.paddingBottom = "10px";
    form.style.display = "none";
    heading.style.border = "none";
    heading.style.color = "#16C60C";    
    heading.innerHTML = "✔️ It has added in your Book-self."
}