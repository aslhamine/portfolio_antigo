const icon = document.querySelector(".icon-change");
const show = document.querySelector(".show");

icon.addEventListener("click", () =>{
    show.classList.add("show-menu");
    setTimeout(() => {
        show.classList.remove("show-menu");
    }, 8000);
});


const btn = document.getElementById("message-btn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
message.classList.add("show");
setTimeout(() => {
    message.classList.remove("show");
}, 6000);
});



const toggle = document.querySelector('.toggle');

toggle.addEventListener('click',()=>{
    const sharebtn = document.querySelector('.share');
    sharebtn.classList.toggle('active');
})