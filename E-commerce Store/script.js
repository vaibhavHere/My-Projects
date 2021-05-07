let i = 1;
const images = document.querySelectorAll('.images img');
function leftClick() {
    i--;
    images.forEach((ele) => { ele.removeAttribute('active') })
    i = i < 1 ? 5 : i;
    image.style.backgroundImage = `url(images/${i}.jpg)`
    images[i - 1].setAttribute("active", "")
}
function rightClick() {
    i++;
    i = i > 5 ? 1 : i;
    images.forEach((ele) => { ele.removeAttribute('active') })
    image.style.backgroundImage = `url(images/${i}.jpg)`
    images[i - 1].setAttribute("active", "")
}


