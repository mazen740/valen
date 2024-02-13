document.addEventListener('DOMContentLoaded', function () {
    const popupContainer = document.getElementById('popupContainer');
    const closePopup = document.getElementById('closePopup');

    popupContainer.style.display = 'flex';

    closePopup.addEventListener('click', function () {
        popupContainer.style.display = 'none';
    });
});


let heartRateInterval;

function updateHeartRate() {
    const heartRate = document.getElementById('heartRateSlider').value;
    clearInterval(heartRateInterval);
    heartRateInterval = setInterval(createRain, heartRate);
}
updateHeartRate();



const waterCanvas = document.getElementById('waterCanvas');
const waterContext = waterCanvas.getContext('2d');

let mouseX = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
});

function drawWater() {
    waterCanvas.width = window.innerWidth;
    waterCanvas.height = 150;

    const gradient = waterContext.createLinearGradient(0, 0, window.innerWidth, 0);
    gradient.addColorStop(0, 'rgba(250, 250, 250)');
    gradient.addColorStop(0.5, 'rgba(250, 250, 250)');
    gradient.addColorStop(1, 'rgba(250, 250, 250)');
    waterContext.fillStyle = gradient;
    waterContext.beginPath();
    waterContext.moveTo(0, 150);
    waterContext.quadraticCurveTo(mouseX, 50, window.innerWidth, 150);
    waterContext.lineTo(window.innerWidth, 150);
    waterContext.lineTo(0, 150);
    waterContext.closePath();
    waterContext.fill();

    requestAnimationFrame(drawWater);
}

drawWater();


window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
});
const heroText = document.querySelector('.hero-text');
const quoteElement = document.querySelector('.quote');


function typeText(element, text) {
    let index = 0;
    const intervalId = setInterval(() => {
        element.textContent += text[index];
        index++;
        if (index === text.length) {
            clearInterval(intervalId);

            currentFontIndex = fonts.findIndex(font => font.includes('Dancing Script'));
        }
    }, 200);
}

const heroTextContent="<3بحبك يا لجيني";
typeText(heroText, heroTextContent);

const fontChangeInterval = setInterval(() => {
    if (heroText.textContent.length === heroTextContent.length) {
        clearInterval(fontChangeInterval);
    } else {
        changeFont();
    }
}, 1500);


const bgMusic = document.getElementById('bgMusic');
const musicButton = document.getElementById('musicButton');

document.addEventListener("DOMContentLoaded", function () {
    initiatePlayback();
});

function initiatePlayback() {
    bgMusic.play().then(() => {
        updateMusicButton();
    }).catch((error) => {
        console.error("Auto-play prevented:", error);
        musicButton.style.display = "inline-block";
    });
}

function updateMusicButton() {
    if (bgMusic.muted) {
        musicButton.textContent = "🔈";
    } else {
        musicButton.textContent = "🔊";
    }
}

musicButton.addEventListener('click', toggleMusic);

function toggleMusic() {
    bgMusic.muted =! bgMusic.muted;
    updateMusicButton();
}


const quotes = [
" انت عمري والي اغلي من كدة كمان",
"حياتي بحس بيها بس وانا معاكي",
"مهما زعلتك سامحيني",
"لاني بحبك وما اقدرش علي زعلك", 
" هفضل معاكي",
" مهما يحصل هفضل معاكي",
"هنتجوز وهتكوني ملكي", 
"وهفضل اتأملك بقية عمري",
"كل الي عايزه انت", 
"عايز بيت صغير اركانه مليانة بريحتك", 
" انت بتخليني اتنطط بس لما تفتحي", 
"انت عالمي كله", 
"اي صورة بشوفها ليكي", 
" علي طول ابتسامتي بتترسم علي وشي", 
" انت الشخص الي عمره ما يتكرر مرتين", 
" ببقي فخور بيكي دايما", 
" وبفرح كأني اب ليكي لما تنجحي في حاجة", 
" انت صاحبة اجمل ابتسامة شوفتها في حياتي", 
"اعرفي ان لو الدنيا كلها وقفت قدامك", 
"هكون اول واحد يقف جنبك", 
" وخليكي دايما عارفة", 
" إن", 
"انا", 
"بحبك", 

];

let currentQuoteIndex = 0;

function getNextQuote() {
    const nextQuote = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    return nextQuote;
}

function updateQuote() {
    const quoteElement = document.querySelector('.quote');
    const newQuote = getNextQuote();
    quoteElement.textContent = newQuote;
    setTimeout(updateQuote, 3000);
}

updateQuote();
function createRain() {
    const heartCatcher = document.querySelector('.click-catcher');

    const heart = document.createElement("div");
    heart.classList.add("heart");

    const size = Math.floor(Math.random() * (100 - 40 + 1)) + 40;

    const blur = Math.floor(Math.random() * 7) + 1;
    heart.style.width = size + "px";
    heart.style.height = size + "px";
    heart.style.filter = `blur(${blur}px)`;

    const opacity = Math.random() * 0.4 + 0.6;
    heart.style.opacity = opacity;

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    const heartImage = document.createElement("img");
    heartImage.src = "https://cdn.discordapp.com/attachments/1035231349180747826/1190672860776255598/heart_6.PNG";
    heartImage.alt = "Heart";
    heartImage.style.width = "100%";
    heart.appendChild(heartImage);

    heartCatcher.appendChild(heart);

    heart.addEventListener('click', () => {
        const popSound = document.getElementById('popSound');
        popSound.play();

        setTimeout(() => {
            heart.remove();
        }, 0);
    });

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createRain, 160);
