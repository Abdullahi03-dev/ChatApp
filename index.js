let dropnavbtn=document.getElementById('navbar');
let closebtn=document.getElementById('closebtn');
let dropnav=document.querySelector('.navbar')
dropnavbtn.addEventListener('click',()=>{
    dropnav.classList.add('show_nav')
})
closebtn.addEventListener('click',()=>{
    dropnav.classList.remove('show_nav')

})
