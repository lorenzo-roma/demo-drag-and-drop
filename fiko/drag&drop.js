function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("divId", ev.target.id);
    ev.dataTransfer.setData("parentDivId", ev.target.parentElement.id);
}

function drop(ev) {
    ev.preventDefault();
    const chest = ev.target;
    if (isChest(chest) && hasSpace(chest)) {
        const fruitId = ev.dataTransfer.getData("divId");
        const oldChestId = ev.dataTransfer.getData("parentDivId");
        const newChestId = chest.id;
        ev.target.appendChild(document.getElementById(fruitId));
        updateState(newChestId, fruitId);
        updateState(oldChestId, null);
    }

}

function isChest(div) {
    return Object.values(div.classList).includes('chest');
}

function hasSpace(chest) {
    const chestId = chest.id;
    return state[chestId] == null;
}

function updateState(chestId, fruitId) {
    if (!chestId) return;
    state[chestId] = fruitId;
    console.log('State updated');
    console.log(state);
}

const state = {
    "chest-1": null,
    "chest-2": null,
    "chest-3": null,
}