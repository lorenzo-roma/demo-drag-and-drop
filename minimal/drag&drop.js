function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("divId", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    let draggedId = ev.dataTransfer.getData("divId");
    ev.target.appendChild(document.getElementById(draggedId));
}
