/* 
TODO:
- select all of important elements
- grab all of element from Speech web api 
- Alexa response function here
- toggle show command area
*/

/* STEP: 1 select all of important elements  */
const microphoneBtn = document.getElementById('microphone');
const voiceText = document.getElementById("voiceText");

/* STEP: 2 grab all of element from Speech web api  */
const speechRecognition = () => {
    let recognition = new webkitSpeechRecognition();

    recognition.onstart = () => {
        microphoneBtn.classList.add('pulse')
        voiceText.innerHTML = `<small class="text-muted"> listening.... </small>`;
    }
    recognition.onend = () => {
        microphoneBtn.classList.remove('pulse');
        voiceText.innerHTML = `<small class="text-muted"> Not hear yet. </small>`;
    }

    recognition.start();
    recognition.onresult = (event) => {
        let userVoiceText = event.results[0][0].transcript;
        voiceText.innerText = userVoiceText;
        alexResponse(userVoiceText);
    }
}

/* STEP: 3 Alexa response function here  */
const alexResponse = (text) => {
    let speech = new SpeechSynthesisUtterance(text);
    /* Command Put Here*/
    if (text == 'hey Alexa how are you doing') {
        speech.text = 'Yeah! I am good how about you?';
    } else if (text == 'hey Alexa') {
        speech.text = 'Yeah! how can i help you';
    } else if (text == 'hey Alexa please open the Google') {
        speech.text = 'ok bruh! opening google';
        window.location.href = 'https://www.google.com';
    } else if (text == 'hey Alexa please open the YouTube') {
        speech.text = 'Okay opening!';
        window.location.href = 'https://www.youtube.com/';
    } else if (text == 'hey Alexa please open the YouTube and play nice song') {
        speech.text = 'oky this is my favorite one! hope you like it';
        window.location.href = 'https://www.youtube.com/watch?v=Vqfy4ScRXFQ&list=RDMMHQooYn2OReE&index=2';
    } else if (text == "hey Alexa do you know what's the programming Hero") {
        speech.text = 'yeah i know them cool stuff they are one of the most biggest software production company in the world.';
    } else if (text == 'I am good') {
        speech.text = 'ohh thank you';
    } else if (text == 'ok thank you') {
        speech.text = 'your most welcome broh';
    } else if (text == 'ok I am Aashiq Muhammad') {
        speech.text = 'yeah! now I know you by name of Ashiq Muhammad'
    } else if (text == 'hey Alexa do you know me') {
        speech.text = 'Noooo! Who are you?'
    } else if (text == 'hey Alexa do you have a girlfriend') {
        speech.text = "nope broh! what are you talking about? I am machine I don't need girlfriend. I think you should need girlfriend that's why asked me. hahahah";
    } else if (text == 'hey Alexa please change the background colour') {
        speech.text = "ok changing temporary background color";
        document.querySelector('html').classList.add('theme');
    } else if (text == 'hey Alexa please set the default colour') {
        speech.text = "ok set a default background color";
        document.querySelector('html').classList.remove('theme');
    } else {
        speech.text = 'Speech Recognize Failed. please keep your microphone nearest as much as possible.';
    }



    document.getElementById("alexText").innerText = speech.text;
    window.speechSynthesis.speak(speech);
}

microphoneBtn.addEventListener('click', speechRecognition);

/* STEP: 4 toggle show command area  */
document.getElementById("question-btn").addEventListener('click', () => {
    document.querySelector(".command-area").classList.toggle('active');
})