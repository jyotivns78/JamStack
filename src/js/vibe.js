const vibes = [
    "happy",
    "sad",
    "angry",
    "excited",
    "bored",
];

// Choose a random vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// Display the vibe
document.querySelector(".vibe").append(vibe);