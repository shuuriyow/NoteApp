const notesContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelectorAll("input-box");

// check if there is any notes in the local storage and show them on the screen 
function showNotes(){
    
        notesContainer.innerHTML = localStorage.getItem("notes");
    
}
showNotes();
function upddateStorage()
{
    localStorage.setItem("notes", notesContainer.innerHTML);

}
createBtn.addEventListener('click', () => {
    const InputBox = document.createElement("p");
    let img = document.createElement("img");
   InputBox.className = "input-box";
   InputBox.setAttribute("contenteditable", "true");
    InputBox.textContent = "Enter your notes here";
    img.src ="delete.png";
    notesContainer.appendChild(InputBox).appendChild(img);
});


notesContainer.addEventListener('click', (e) => {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        upddateStorage();
    }
    // marka browerka refresh la dhaho in geydiyo p tag wax ku qoran
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                upddateStorage();
            }
        });
    }
});

document.addEventListener("keydown",event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();

    }
});
