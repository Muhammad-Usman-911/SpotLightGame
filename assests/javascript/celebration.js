var confettiElement = document.getElementById('my-canvas');
var confettiSettings = { target: confettiElement };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();


function buttonClick() {
    console.log('Hello')
    document.querySelector('.card').style.display = "block";
    document.querySelector('#my-canvas').style.display = "block";
}
