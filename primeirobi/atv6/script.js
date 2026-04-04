const input = document.getElementById("input");
const form = document.getElementById("input-area");
const list = document.getElementById("list");

function addItem(event) {
    event.preventDefault();
    const value = input.value.trim();
    if (value) {
        const li = document.createElement("li");

        li.textContent = value;
        list.appendChild(li);
        input.value = "";
    }
}

list.addEventListener("click", () => {
    if (event.target.tagName == 'LI') {
        
        event.target.remove();
    }
})
