const boxes = document.querySelectorAll('input[type="checkbox"]');
console.log(boxes);

let lastChecked;

function handleCheck(event) {
    let inBetween = false;
    if (event.shiftKey && this.checked) {
        boxes.forEach(box => {
            console.log(box);
            if (box === this || box === lastChecked) {
                inBetween = !inBetween;
                console.log("starting to check them inbetween");
            }

            if (inBetween) {
                box.checked = true;
            }
        });
    }
    lastChecked = this;
}
boxes.forEach(box => box.addEventListener('click', handleCheck));;