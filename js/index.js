
// click STORE, SHARE, FAVORITE, ORGANIZE to change  color to white


let h2 = document.querySelectorAll('h2');
h2.forEach(element1 => element1.addEventListener("click", e => {
    e.target.style.color = "white";
}))



let name = document.querySelector('h1');
name.addEventListener('hover', e => {
    Element.body.style.color = "white";
})


