// Select all the key elements (A, S, D, F, G, H, J, K and L)
const keys = document.querySelectorAll(".key");

// Listen for a keydown event
document.addEventListener("keydown", playSound);

// Listen for the transition on each key element and when the transition ends, remove it
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

// A function to play a sound when a key is pressed
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    if (audio) {
        audio.currentTime = 0; // rewind the audio element to the start
        audio.play();
        key.classList.add("playing");
    } else {
        return; // If there is no audio element, exit the function
    }
}

// A function to remove the transition from each key element
function removeTransition(e) {
    // Remove the "playing" class from the "key" element after the "transform" CSS property is added
    if (e.propertyName === "transform") {
        this.classList.remove("playing");
    } else {
        return;
    }
}