let shoppingCart = document.querySelector ('.shopping-cart');

document.querySelector('#cart').onclick = () =>{
    shoppingCart.classList.toggle('active');
}


const photoGallery = document.querySelectorAll('.photowrapper');
const buttonList = document.querySelector('.dots');

let buttonListHtml = "";

for(let i = 0; i < photoGallery.length; i++) {
    buttonListHtml += `<input type="radio" name="button-group" value="${i}" >`
}
buttonList.innerHTML = buttonListHtml;

let buttonListArray = document.querySelectorAll('input');

for(let button of buttonListArray) {
    button.addEventListener('click', changeImage);
}

function changeImage(event) {
    let imageIndex = event.target.value;
    for(let image of photoGallery) {
        image.classList.remove("active-image");
    }
    photoGallery[imageIndex].classList.add("active-image");
}