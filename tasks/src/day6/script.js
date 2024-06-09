const dragImage = document.getElementById('drag-image');
const dropContainer = document.getElementById('drop-container');

dragImage.addEventListener('dragstart', dragStart);
dropContainer.addEventListener('dragover', dragOver);
dropContainer.addEventListener('dragleave', dragLeave);
dropContainer.addEventListener('drop', drop);

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    setTimeout(() => {
        event.target.classList.add('hide');
    }, 0);
}

function dragOver(event) {
    event.preventDefault();
    dropContainer.classList.add('over');
}

function dragLeave() {
    dropContainer.classList.remove('over');
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(data);
    dropContainer.appendChild(draggableElement);
    draggableElement.classList.remove('hide');
    dropContainer.classList.remove('over');
}
