function randomColor (){
    var rNumber = Math.floor(Math.random() * 256);
    var gNumber = Math.floor(Math.random() * 256);
    var bNumber = Math.floor(Math.random() * 256);
    return 'rgb(' + rNumber + ',' + gNumber + ',' + bNumber + ')';
}
//     var i = Math.floor(Math.random() * 3);
//     var selectedbox = document.getElementsByClassName('color-box')[i];
//     // document.getElementById ('header-container').style.backgroundColor = result;
//     document.getElementById ('h1-container').innerHTML = result;
//     return result;
// };

var selectColor = document.getElementById('start');
selectColor.addEventListener('click', () => {
    selectBoxes();
    // console.log(randomColor());
});

function selectBoxes() {
    var selectedColor = randomColor();
    // console.log(selectedColor);
    document.getElementById ('h1-container').innerHTML = selectedColor;
    // console.log(document.getElementById ('h1-container').innerHTML);
    var rNumber = Math.floor(Math.random() * 256);
    var gNumber = Math.floor(Math.random() * 256);
    var bNumber = Math.floor(Math.random() * 256);
    var result = 'rgb(' + rNumber + ',' + gNumber + ',' + bNumber + ')';
    var i = Math.floor(Math.random() * 3);
    var selectedBox = document.getElementsByClassName('color-box')[i];
    var anotherBox = document.getElementsByClassName('color-box')[j];
    var allBox = document.getElementsByClassName('color-box');
        for (j = 0; j < allBox.length; j++) {
            if (j === i)
            selectedBox.style.backgroundColor = randomColor();
            } else {
            anotherBox.style.backgroundColor = result;
            }
}
