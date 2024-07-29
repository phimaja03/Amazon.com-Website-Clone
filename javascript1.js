//to change hero slides
const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';
}
changeSlide();

prev_btn.addEventListener('click', (e)=>{
    if(n>0){
        n--;
    } else {
        n = imgs.length-1;
    }
    changeSlide();
})

next_btn.addEventListener('click', (e)=>{
    if(n<imgs.length-1){
        n++;
    } else {
        n = 0;
    }
    changeSlide();
})

// Show or hide the "Back to Top" button based on scroll position
window.onscroll = function() {
    var backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll back to the top when the "Back to Top" button is clicked
document.getElementById("back-to-top").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

//drop-down menu
const accountMenu = document.getElementById("account-menu");
    const dropdown = document.getElementById("dropdown");

    accountMenu.addEventListener("mouseover", () => {
        dropdown.style.display = "block";
    });

    accountMenu.addEventListener("mouseleave", () => {
        dropdown.style.display = "none";
    });