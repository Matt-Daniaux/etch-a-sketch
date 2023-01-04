//Create one div
function addOneDiv() {
    const container = document.querySelector('#containerE-A-S')
    div = document.createElement('div')
    container.appendChild(div)
    div.classList.add('divE-A-S') 
}

//Remove all divs --> before creating new grid
function removeDivs() {
    const container = document.querySelector('#containerE-A-S')
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }
}

//Create number of div according to user request 
function addNbOfDivs(nb) {
    nb = (number ** 2);
    if (number > 100) {
        alert('Number of square should be 100 or less.')
    } else {
    for (let i = 1; i <= nb; i++) {
        addOneDiv();
    }
}
}

//Actualize divs variable
function divSelectAllDiv() {
    divs = document.querySelectorAll('.divE-A-S');
}

//Set height + width of each div 
function addDimensionToDiv () {
    let height = 960/number ;
    divSelectAllDiv()
    for(let i = 0; i < divs.length; i++) {
        divs[i].style.height = `${height}px`
        divs[i].style.width =  `${height}px`
    }
}    

//Array nb of div + value for each of them for background transparency 
function divBackGroundColor() {
    let backgrounds = [...document.querySelectorAll('.divE-A-S')]
    for(let i = 0; i < backgrounds.length; i++) {
        backgrounds[i] = 0.3;
    }
    divSelectAllDiv()
    //For each div, apply increase of transparency & add to corresponding background array value  
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('mouseover', () => {
            divs[i].style.background = `rgba(108, 255, 255, ${backgrounds[i]} )` 
            backgrounds[i] += 0.3
            })
    }
}


//Number of divs in x (& y) for E-A-S
let number = 16;

//Selects all nodes for E-A-S display surface
let divs = document.querySelectorAll('.divE-A-S');



//Add the divs 
addNbOfDivs()

//add dimension to div 
addDimensionToDiv()

//Add background color when hover 
divBackGroundColor()

//create clickable button for nb of square
//New input for number of div 
let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    number = prompt('How many squares in X ?', '16');
})
btn.addEventListener('click', removeDivs)
btn.addEventListener('click', addNbOfDivs)
btn.addEventListener('click', addDimensionToDiv)
btn.addEventListener('click', divBackGroundColor)







