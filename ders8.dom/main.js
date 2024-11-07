const div = document.createElement('div');
div.className = 'box';

div.style.backgroundColor = 'green';
div.style.width = '200px';
div.style.height = '200px';
div.style.borderRadius = '10px';
div.style.border = '3px solid orange';


const h3 = document.createElement('h3');
h3.textContent = 'Azmp 202';
h3.style.textAlign = 'center';
h3.style.color = 'white';

div.appendChild(h3);

document.body.appendChild(div);