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
        console.error(error);
        return;
    }
    document.querySelector('#first-position').textContent = data[0].nombre;
    document.querySelector('#score-1').textContent = data[0].puntos;
    document.querySelector('#second-position').textContent = data[1].nombre;
    document.querySelector('#score-2').textContent = data[1].puntos;
    document.querySelector('#third-position').textContent = data[2].nombre;
    document.querySelector('#score-3').textContent = data[2].puntos;
}

document.querySelector('#update-btn').addEventListener('click', () => {
    updateData();
})