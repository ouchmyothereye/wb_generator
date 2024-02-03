document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('randomizeButton');
    const display = document.getElementById('pantheonChoice');

    button.addEventListener('click', function() {
        fetch('https://github.com/ouchmyothereye/wb_generator/tree/main/data/pantheon_type.json')
            .then(response => response.json())
            .then(data => {
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomChoice = data[randomIndex].choice;
                display.textContent = randomChoice;
            })
            .catch(error => console.error('Error loading data:', error));
    });
});
