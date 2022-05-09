let navbar = document.querySelector('header .navbar')
let hamburger = document.querySelector('#hamburger')

hamburger.onclick = () =>{
    hamburger.classList.toggle('fa-times');
    navbar.classList.toggle('active')

}