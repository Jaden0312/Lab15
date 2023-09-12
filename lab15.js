var selectedColor = randomColor();

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
    setBoxes();
    console.log(selectedColor);
    console.log(document.getElementById('first-color').style.backgroundColor);
    console.log(document.getElementById('second-color').style.backgroundColor);
    console.log(document.getElementById('third-color').style.backgroundColor);
    // console.log(randomColor());
});

var allBox = document.getElementsByClassName('color-box');
function setBoxes() {
    document.getElementById ('h1-container').innerHTML = selectedColor;
    // console.log(document.getElementById ('h1-container').innerHTML);
    var i = Math.floor(Math.random() * 3);
    document.getElementsByClassName('color-box')[i].style.backgroundColor = selectColor;
    console.log(i);
    console.log(document.getElementsByClassName('color-box')[i].style);
    console.log(document.getElementsByClassName('color-box')[i].style.backgroundColor);
            for (j = 0; j < allBox.length; j++) {
            var anotherBox = document.getElementsByClassName('color-box')[j];
            if (j === i) {
            
            // document.getElementById ('h1-container').innerHTML = selectedColor;
            } else {
            anotherBox.style.backgroundColor = randomColor();
            }
        }
    }

var selectFirstBox = document.getElementById('first-color');
var selectSecondBox = document.getElementById('second-color');
var selectThirdBox = document.getElementById('third-color');
selectFirstBox.addEventListener('click',() => {
    if ( selectedColor === document.getElementById('first-color').style.backgroundColor) {
        document.getElementById ('header-container').style.backgroundColor = selectedColor;
        document.getElementById('second-color').style.backgroundColor = selectedColor;
        document.getElementById('third-color').style.backgroundColor = selectedColor;
        alert('Sucess!')
    } else {
        document.getElementById('first-color').style.visibility = 'hidden';
    }
});

selectSecondBox.addEventListener('click',() => {
    if ( selectedColor === document.getElementById('second-color').style.backgroundColor) {
        document.getElementById ('header-container').style.backgroundColor = selectedColor;
        document.getElementById('first-color').style.backgroundColor = selectedColor;
        document.getElementById('third-color').style.backgroundColor = selectedColor;
        alert('Sucess!')
    } else {
        document.getElementById('second-color').style.visibility = 'hidden';
    }
});

selectThirdBox.addEventListener('click',() => {
    if ( selectedColor === document.getElementById('third-color').style.backgroundColor) {
        document.getElementById ('header-container').style.backgroundColor = selectedColor;
        document.getElementById('first-color').style.backgroundColor = selectedColor;
        document.getElementById('second-color').style.backgroundColor = selectedColor;
        alert('Sucess!')
    } else {
        document.getElementById('third-color').style.visibility = 'hidden';
    }
});
