
// click STORE, SHARE, FAVORITE, ORGANIZE to change  color to white


let h2 = document.querySelectorAll('h2');
h2.forEach(element1 => element1.addEventListener("click", e => {
    e.target.style.color = "white";
}))

// h2.forEach(element1 => element1.addEventListener("click", e => {
//     e.target.style.color = "red";
// }))



let name = document.querySelector('h1');
name.addEventListener('mouseover', e => {
    e.target.style.color = "white";
})

name.addEventListener('mouseleave', e => {
    e.target.style.color = "red";
})
console.log(name);

