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

