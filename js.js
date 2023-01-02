function addOneDiv() {
    const container = document.querySelector('#containerE-A-S')
    div = document.createElement('div')
    container.appendChild(div)
}

function addNbOfDivs(nb) {
    for (let i = 0; i <= nb; i++) {
        addOneDiv();
    }
}

addNbOfDivs(16)