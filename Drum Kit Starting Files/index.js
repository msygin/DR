let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i<numberOfDrumButtons; i++) {

//Detect button press
document.querySelectorAll('.drum')[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML)  
});

}

//Detect keyboard press

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key)  
});


function makeSound(key) {
    switch (key) {
        case "w":
                let crash = new Audio('sounds/crash.mp3')
               crash.play();
            break;
        case "a":
                let kickBass= new Audio('sounds/kick-bass.mp3')
               kickBass.play();
            break;
        case "s":
                let snare = new Audio('sounds/snare.mp3')
               snare.play();
            break;
        case "d":
                let tomOne= new Audio('sounds/tom-1.mp3')
               tomOne.play();
            break;
        case "j":
                let audio = new Audio('sounds/tom-4.mp3')
               audio.play();
            break;
        case "k":
                let tomTwo = new Audio('sounds/tom-2.mp3')
               tomTwo.play();
            break;
        case "l":
                let tomThree = new Audio('sounds/tom-3.mp3')
               tomThree.play();
            break;

        default: console.log(this.innerHTML);
            break;
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

// let audio = new Audio('sounds/tom-1.mp3')
//    audio.play();