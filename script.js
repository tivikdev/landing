// Hello, stranger

const helloText = document.getElementById("helloText");
const welcomeMessageDiv = document.getElementById("welcomeMessage");
const txtArray = [
"Oh... Hello there",
"Feeling better",
"Nice to see you!",
"Omae Wa Mou",
"Fresh coconut",
"Some tonic",
"No way",
"Friday night yeah",
"Aand slide up",
"uwu",
"aaaaaaaaaa",
"Tastes good",
"C# is Java?",
"Coconut milk",
"Building the open net",
"Feels you with determination",
"Get the banana",
"Never gonna let you down",
"Debian being just stable🗿",
"Certified big shot",
"It's 'cause of these things",
"Let's make our fast plan",
"To sleep perchance to dream",
"All the things you thought were true",
"Hello, 47",
"Time's gonna wash away all pain",
"NNN is crazy",
"Sleep is the key",
"Maybe some sleep?",
"Potassium",
"Who we truly are?",
"Middle of adventure",
"Perfect place to start",
"First time spark",
"I'm afraid I'm just the same",
"(Waiting for something to happen?)",
"Vertical gameplay",
"Reward yourself",
"When I flex, I feel my best!!",
"I'm just overwhelmed",
"Faded amber",
"It means everything.",
"Welcome to white space",
"Overcome inertia is hard",
"I'm thinking Miku, Miku ooh-ee-ooh",
"Do You remember?",
"Undefined",
"Overthink every little thing",
"Daydreaming",
"I hate ads",
"Drawing at classes",
"The same as all special people",
"math...",
"Giant snowball",
"Rise and shine!",
"Warm place",
"Take your pills",
"Not a candle queen",
"No JS - no fun",
"Here we go again",
"They are everywhere",
"Time management sucks, at least mine",
"No ads",
"True false one zero",
"Well done!",
"lowercase life",
"AAAAAAAAAAAAAAA",
"Aubread",
"Oyasumi",
"Fighting back the rush of emotions",
"It's a long walk",
"objectification...",
"dehumanization...",
"What will You sacrifice?",
"Eye contact is hard",
"Infantile freak",
"Something's wrong",
"Is that a freedom?",
"Good and bad are just simplification for kids?",
"Over, over, over and over",
"Where is my time?",
"Endure",
"Omg",
"I mean it's alright like",
"Headache",
"Patience",
"Hu Tao enjoyer",
"Tries to stay in a bubble",
"Everything is going to be okay.",
"You have been living here for as long as you can remember.",
"Doesn't feel so right",
"I had a dream",
"Did you see it too?",
"Gawr",
"Driving the bus of life",
"Bonus level",
"Things are not so easy",
"Stop grinding please, calm down",
"Play the main quest",
"Bed rotting",
"Late night conversations",
"Welcome back",
];

const speed = 50;
let txt = "";
let i = 0;


function JSNotDisabled(){
    txt = txtArray[Math.floor(Math.random() * txtArray.length)];
    welcomeMessageDiv.style.display = "flex";
    typeWriter();
}

function typeWriter()
{
    if (i < txt.length) {
        helloText.innerHTML += txt.charAt(i++);
        setTimeout(typeWriter, Math.floor(Math.random() * speed));
    }
    else {
        setTimeout(hideWelcomeMessage, 600)
    }
}

function hideWelcomeMessage(){
    welcomeMessageDiv.className = "hide";
}

addEventListener("DOMContentLoaded", JSNotDisabled);
