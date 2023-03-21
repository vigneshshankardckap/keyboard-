
const allbtn = document.querySelectorAll("button")
const input = document.querySelector("#text")
const capsLock = document.querySelector(".capsLock")
const voiceicons=document.querySelector("#voice")

for (let i = 0; i < allbtn.length; i++) {
    allbtn[i].addEventListener("click", (e) => {
        console.log(e.target.className)

        if (e.target.id === "caps") {
          caps()
        }
        if (e.target.innerText !== "tab" && e.target.innerText !== "backspace" && e.target.innerText !== "capslock" && e.target.innerText !== "enter" && e.target.innerText !== "shift" && e.target.innerText !== "space" && e.target.innerText !=="delete" && e.target.innerText !== "delete") {
            input.value += e.target.innerText;
        }
        if (e.target.innerText == "backspace") {
            input.value = input.value.slice(0, input.value.length - 1);
        }
        if (e.target.innerText == "tab") {
            input.value += `    `;
        }
        if (e.target.innerText == "space") {
            input.value += ` `;
        }
        if(e.target.innerText=="delete"){
            input.value="";
        }
        if(e.target.className == "fa-solid fa-microphone"){
            voiceaesst();
        }

    })


}

window.addEventListener("keyup", function (e) {
    console.log(e.key);
    for (let k = 0; k < allbtn.length; k++) {
        if (e.key.toLowerCase() == allbtn[k].innerText.toLowerCase()) {
            allbtn[k].classList.add("touch");

            setTimeout(() => {
                allbtn[k].classList.remove("touch")
            }, 200);
        }

    }

    if (e.key.toLowerCase() !== "tab" && e.key.toLowerCase() !== "backspace" && e.key.toLowerCase() !== "capslock" && e.key.toLowerCase() !== "enter" && e.key.toLowerCase() !== "shift" && e.key.toLowerCase() != "space" && e.key.toLowerCase() != "control" && e.key.toLowerCase() != "alt" && e.key.toLowerCase() != "wakeup" && e.key.toLowerCase() !=="delete") {
        input.value += e.key;
    }

    if (e.key.toLowerCase() == "backspace") {
        input.value = input.value.slice(0, input.value.length - 1);
    }
    if (e.key.toLowerCase() == "tab") {
        input.value += `    `;
    }
    if (e.key.toLowerCase() == "space") {
        input.value += ``;
    }
    if (e.key.toLowerCase() == "capslock") {
        caps();
        
    }
    if(e.key.toLowerCase()=="delete"){
        input.value="";
    }


})




function caps() {
    capsLock.classList.toggle("show")
    for (let j = 0; j < allbtn.length; j++) {
        if (capsLock.classList.contains("show")) {
            // alert("acc")
            if (allbtn[j].innerText !== "tab" && allbtn[j].innerText !== "backspace" && allbtn[j].innerText !== "capslock" && allbtn[j].innerText !== "enter" && allbtn[j].innerText !== "shift" && allbtn[j].innerText != "space") {
                allbtn[j].innerText = allbtn[j].innerText.toUpperCase()
            }
        }
        else {
            if (allbtn[j].innerText !== "tab" && allbtn[j].innerText !== "backspace" && allbtn[j].innerText !== "capslock" && allbtn[j].innerText !== "enter" && allbtn[j].innerText !== "shift" && allbtn[j].innerText != "space") {
                allbtn[j].innerText = allbtn[j].innerText.toLowerCase()

            }
        }

    }
}
function disable() {
    document.onkeydown =function (e) {
        return false;
    }
}



function voiceaesst(){
    voiceicons.classList.toggle("show")
    var speech = true;
    window.SpeechRecognition = window.SpeechRecognition
                    || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;


    recognition.addEventListener('result', (e) => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')

        text.value += transcript
    });

    if (speech == true) {
        recognition.start();
        recognition.addEventListener('end', recognition.start);
    }
}
