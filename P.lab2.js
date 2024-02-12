// mouseover 
const mouseoverEjemplo1 = () => {
    alert('Nemo necesita un psicologo');
}

const mouseoverEjemplo2 = () => {
    document.body.style.backgroundColor = 'lightblue';
}

const mouseoverEjemplo3 = () => {
    const p = document.createElement('p');
    p.textContent = 'Nemo ta solo';
    document.body.appendChild(p);
}

document.getElementById('mouseover-ejemplo1').addEventListener('mouseover', mouseoverEjemplo1);
document.getElementById('mouseover-ejemplo2').addEventListener('mouseover', mouseoverEjemplo2);
document.getElementById('mouseover-ejemplo3').addEventListener('mouseover', mouseoverEjemplo3);

// click 
const clickTocar1 = () => {
    alert('Nemo esta loco');
}

const clickTocar2 = () => {
    document.body.style.backgroundColor = 'pink';
}

const clickTocar3 = () => {
    const p = document.createElement('p');
    p.textContent = 'Nemo ta Triste';
    document.body.appendChild(p);
}

document.getElementById('click-ejemplo1').addEventListener('click', clickTocar1);
document.getElementById('click-ejemplo2').addEventListener('click', clickTocar2);
document.getElementById('click-ejemplo3').addEventListener('click', clickTocar3);

// Focus
function handleFocus1() {
    const focusInput1 = document.getElementById('focus-1').querySelector('.focus-input');
    focusInput1.style.backgroundColor = 'red';
}

function handleFocus2() {
    const hiddenText = document.getElementById('hidden-text');
    hiddenText.style.display = 'block';
}

function handleFocus3() {
    const focusBox3 = document.getElementById('focus-3');
    focusBox3.style.backgroundColor = 'lightgreen';
    const focusInput3 = focusBox3.querySelector('.focus-input');
    focusInput3.style.backgroundColor = '#fff'; 
}

document.getElementById('focus-1').querySelector('.focus-input').addEventListener('focus', handleFocus1);
document.getElementById('focus-2').querySelector('input').addEventListener('focus', handleFocus2);
document.getElementById('focus-3').querySelector('.focus-input').addEventListener('focus', handleFocus3);

// Nombres y códigos de los integrantes
const footer = document.createElement('footer');
footer.innerHTML = 'Integrantes: Arnold David Villatoro Santos - SMSS032621, Marcela Nohemy Hernández Villatoro - SMSS072922';
document.body.appendChild(footer);
