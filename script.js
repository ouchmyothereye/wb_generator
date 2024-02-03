let jsonData = null;  // This will hold your JSON data

document.addEventListener('DOMContentLoaded', function() {
    // Fetch JSON data when the DOM is fully loaded
    fetch('generators.json')  // Make sure this path is correct!
        .then(response => response.json())
        .then(data => {
            jsonData = data;  // Store the data in jsonData
            console.log(jsonData);  // For debugging, remove later
        })
        .catch(error => console.error('Error loading data:', error));
});

// Function to get a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to randomly select and display a pantheon type
function selectRandomPantheonType() {
    // Filter jsonData for pantheon types
    const pantheonTypes = jsonData.filter(item => item.gen_type === 'pantheon' && item.gen_name === 'type');

    // Get a random index based on the length of pantheonTypes
    const randomIndex = getRandomInt(0, pantheonTypes.length - 1);

    // Select a random pantheon type
    const randomPantheonType = pantheonTypes[randomIndex].value;

    // Display the random pantheon type in the element with id 'pantheonType'
    document.getElementById('pantheonType').textContent = randomPantheonType;
}

// Attach the selectRandomPantheonType function to the button click event
document.getElementById('generatePantheonType').addEventListener('click', selectRandomPantheonType);

// Function to randomly select and display a pantheon size
function selectRandomPantheonSize() {
    // Filter jsonData for pantheon sizes
    const pantheonSizes = jsonData.filter(item => item.gen_type === 'pantheon' && item.gen_name === 'size');

    // Get a random index based on the length of pantheonSizes
    const randomIndex = getRandomInt(0, pantheonSizes.length - 1);

    // Select a random pantheon size
    const randomPantheonSize = pantheonSizes[randomIndex].value;

    // Display the random pantheon size in the element with id 'pantheonSize'
    document.getElementById('pantheonSize').textContent = randomPantheonSize;
}

// Attach the selectRandomPantheonSize function to the button click event
document.getElementById('generatePantheonSize').addEventListener('click', selectRandomPantheonSize);

function determineNumberOfPowers() {
    const size = document.getElementById('pantheonSize').textContent;
    let numGreat, numIntermediate, numLesser, numDemi;

    // Define ranges for each size category
    const ranges = {
        'Small': {great: [1, 2], intermediate: [1, 3], lesser: [2, 5], demi: [1, 4]},
        'Medium': {great: [1, 3], intermediate: [1, 4], lesser: [2, 7], demi: [1, 6]},
        'Large': {great: [1, 4], intermediate: [1, 6], lesser: [3, 9], demi: [1, 8]},
        'Huge': {great: [2, 6], intermediate: [2, 8], lesser: [3, 13], demi: [1, 10]}
    };

    if (size in ranges) {
        // Determine the number of each type of power based on the selected size
        numGreat = getRandomInt(...ranges[size].great);
        numIntermediate = getRandomInt(...ranges[size].intermediate);
        numLesser = getRandomInt(...ranges[size].lesser);
        numDemi = getRandomInt(...ranges[size].demi);
    } else {
        console.error('Invalid size:', size);
        return;
    }

    // Display the results
    document.getElementById('numGreat').textContent = numGreat;
    document.getElementById('numIntermediate').textContent = numIntermediate;
    document.getElementById('numLesser').textContent = numLesser;
    document.getElementById('numDemi').textContent = numDemi;
}

