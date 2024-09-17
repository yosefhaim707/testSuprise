const button = document.createElement('button');
button.setAttribute('id', 'button');
button.textContent = 'Show Square';
button.classList.add('buttonClass');
document.body.appendChild(button);

const square = document.createElement('div');
square.setAttribute('id', 'square');
square.classList.add('squareClass');
document.body.appendChild(square);

let isShown = false;

button.addEventListener('click', () => {
    if (!isShown) {
        square.style.display = 'block';
        isShown = true;
    }
    else {
        square.style.display = 'none';
        isShown = false;
    }
})

const firstName = document.createElement('p');
firstName.setAttribute('id', 'firstName');
firstName.classList.add('nameClass');
firstName.textContent = 'First Name: ';
document.body.appendChild(firstName);

const lastName = document.createElement('p');
lastName.setAttribute('id', 'lastName');
lastName.classList.add('nameClass');
lastName.textContent = 'Last Name: ';
document.body.appendChild(lastName);

async function generateName() {
    let request = await fetch('https://randomuser.me//api');
    let json = await request.json();
    firstName.textContent += json.results[0]['name']['first'];
    lastName.textContent += json.results[0]['name']['last'];
}

generateName();