function RandomStrings() {
    var input = document.getElementById('input').value;
    var strings = input.split(','); // A bemenetet vesszők mentén szétválasztjuk

    // Véletlenszerűen kiválasztunk 3 sztringet
    var chosenStrings = [];
    while (chosenStrings.length < 3 && strings.length > 0) {
        var randomIndex = Math.floor(Math.random() * strings.length);
        chosenStrings.push(strings.splice(randomIndex, 1)[0]);
    }

    // Kiírjuk az eredményt az oldalra
    document.getElementById('result').textContent = "Randomly chosen strings: " + chosenStrings.join(', ');
}