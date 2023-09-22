console.log('läuft');

nichtmich = document.getElementById('nichtmich');
drebbin = document.getElementById('Drebbin');
drebbin.addEventListener('click', utter);

function utter() {
    nichtmich.innerHTML = 'Doch nicht auf mich, verdammt!'
    setTimeout(emptyString, 5000)
}

function emptyString() {
    nichtmich.innerHTML = '---'
}
