// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');

const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');

const reportEl = document.getElementById('report');

const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let head = 0;
let middle = 0;
let bottom = 0;

// set state for all of the character's catchphrases
const catchphrase = [];
const dropdowns = [headDropdown, middleDropdown, bottomDropdown];
const elements = [headEl, middleEl, bottomEl];

dropdowns.map((dropdown, index) => {
    let part = dropdown.id.slice(0, -9);
    if (part === 'bottom') part = 'pants';
    dropdown.addEventListener('change', () => {
        elements[index].style.backgroundImage = `url("./assets/${dropdowns[index].value}-${part}.png")`
        switch (part) {
            case 'head':
                head++;
                break;
            case 'middle':
                middle++;
                break;
            case 'pants':
                bottom++;
                break;
            case 'default':
                break;
        }
        displayStats();
    });
});

catchphraseButton.addEventListener('click', () => {
  const value = catchphraseInput.value;
  catchphrase.push(value);
  catchphraseInput.value = '';
  displayCatchphrases();
});

function displayStats() {
    reportEl.textContent = `Head: ${head}, Middle: ${middle}, Bottom: ${bottom}`;
}

function displayCatchphrases() {
    catchphrasesEl.innerHTML = ' ';
    catchphrase.map(term => {
        const newDiv = document.createElement('div');
        newDiv.textContent = term;
        catchphrasesEl.appendChild(newDiv);
    })
}
