const panels = document.querySelectorAll(".panel");

function toggleOpenClass() {
    this.classList.toggle('open');
}

function toggleOpenActive(event) {
    if (event.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpenClass));

panels.forEach(panel => panel.addEventListener('transitionend', toggleOpenActive));