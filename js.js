

function addOneDiv() {
    const container = document.querySelector('#containerE-A-S')
    div = document.createElement('div')
    container.appendChild(div)
    div.classList.add('divE-A-S') 
}

function addNbOfDivs(nb) {
    for (let i = 0; i <= nb; i++) {
        addOneDiv();
    }
}



addNbOfDivs(15)

const divs = document.querySelectorAll('.divE-A-S');
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('mouseover', () => {
        divs[i].classList.add('div-hover')
    });
}
