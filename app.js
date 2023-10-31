const url = 'https://score-word-of-the-dat.onrender.com/scores';

const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error fetching data');
    }
    const data = await response.json();
    return data;
}

const updateData = async () => {
    let data;
    try {
        data = await fetchData(url);
    } catch (error) {
        document.querySelector('#error-message').style.display = 'block';
        console.error(error);
        return;
    }
    document.querySelector('#first-position').textContent = data[0].nombre;
    document.querySelector('#score-1').textContent = data[0].puntos;
    document.querySelector('#second-position').textContent = data[1].nombre;
    document.querySelector('#score-2').textContent = data[1].puntos;
    document.querySelector('#third-position').textContent = data[2].nombre;
    document.querySelector('#score-3').textContent = data[2].puntos;
    const players = document.querySelector('#players');
    players.innerHTML = '';
    for (let i = 3; i < data.length; i++) {
        const player = document.createElement('div');
        player.classList.add('player');
        player.innerHTML =
            `
            <div class="place-number">${i + 1}th</div>
            <div id="${i + 1}-position" class="player-name">${data[i].nombre}</div>
            <div class="score"><span id="score-${i + 1}">${data[i].puntos}</span> palabras adivinadas</div>
        `;
        players.appendChild(player);
    }
}

document.querySelector('#update-btn').addEventListener('click', () => {
    updateData();
})