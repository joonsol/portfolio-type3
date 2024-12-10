gsap.registerPlugin(ScrollTrigger);


// nav
const navLinks = document.querySelectorAll('.gnb-item')

const activateLink = (link) => {
    navLinks.forEach(item => item.classList.remove('on'))
    link.classList.add('on')
}

const scrollSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId)

    if (!targetSection) {
        console.warn(`No section found with ID :${sectionId}`)
    }
    gsap.to(window, {
        scrollTo: {
            y: targetSection,
            autoKill: false,

        },
        duration: 1,
        ease: "power2.inOut"
    })


}
navLinks.forEach((link) => {

    link.addEventListener('click', event => {
        event.preventDefault()

        const targetId = link.innerText.toLowerCase()
        scrollSection(targetId)
        activateLink(link)
    })
})


// main drag
gsap.from(".main-txt .txt-box", {
    y: 50,
    opacity: 0,
    stagger: 1,
    duration: .4
})

gsap.to(".sticker-box img", {
    delay: 0.8,
    stagger: {
        from: "random",
        amount: 0.3,
    },
    opacity: 1,
    scale: 0.8,
});

$(function () {//시작

    $( document ).ready(function() {
      $('.sticker-box img').draggable();
  });
  });


  //푸터 하단 년도
const date = new Date();
const _year = date.getFullYear();
const thisYear = document.getElementById("this-year");
thisYear.innerText = _year;

//푸터 하단 로컬 시간
const time = document.getElementById("time");
function getTime() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  time.innerText = `${hour} : ${minutes} : ${second}`;
}
getTime();
setInterval(getTime, 1000);