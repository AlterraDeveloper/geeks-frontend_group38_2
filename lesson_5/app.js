// Rendering engine (HTML + CSS) -> Interface
// Parser (HTML + CSS) -> DOM (Document Object Model)

// DOM manipulations: search, remove, edit, create, event handling

const button = document.querySelector("#colorButton");
// const button = document.getElementById("colorButton");

const popup = document.querySelector(".popup");
// const popup = document.getElementsByClassName("popup");

popup.remove();

// button.innerText = "<strike>JavaScript</strike>";
// button.innerHTML = "<strike>JavaScript</strike>";
button.textContent = "Hello DOM";
// button.style.backgroundColor = "orange";

// <div class="popup">Copied!</div>
function buildPopup(text){
    const div = document.createElement("div"); // <div></div>
    div.className = "popup"; // <div class="popup"></div>
    // div.classList.add("popup")
    div.innerText = text; // <div class="popup">TEXT</div>
    return div;
}

function changeBackground(){
    const color = chroma.random().hex();
    document.body.style.backgroundColor = color;
    button.textContent = color.toString().toUpperCase();

    const popup = document.querySelector(".popup");
    popup.remove();
}

function copyColor(){
    const color = button.innerText;
    navigator.clipboard.writeText(color)
        .then(function(){
            const popup = buildPopup("Copied!");
            document.body.append(popup);

            setTimeout(function (){
                popup.remove();
            }, 2000);
        });
}

button.addEventListener("click", changeBackground);
// button.addEventListener("mouseleave", copyColor);
button.onmouseleave = copyColor;

// CDN - Content Delivery Network

