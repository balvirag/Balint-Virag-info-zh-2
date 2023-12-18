function AreaBaseHeight() {
    var e = document.getElementById('unit1');
    var unit1 = e.options[e.selectedIndex].value;

    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);

    var area1 = base * height;

    document.getElementById('area1').textContent = "The area of the Paralellogram is: " + area1 + " " + unit1 + ".";
}

function AreaAngleSides() {
    var e = document.getElementById('unit2');
    var unit2 = e.options[e.selectedIndex].value;
    
    var angle = parseFloat(document.getElementById('angle').value);
    var side1 = parseFloat(document.getElementById('side1').value);
    var side2 = parseFloat(document.getElementById('side2').value);
    var area2 = side1 * side2 * Math.sin(angle * Math.PI / 180);

    document.getElementById('area2').textContent = "The area of the Paralellogram is: " + area2 + " " + unit2 + ".";
}