window.sr = ScrollReveal({ reset: true });
sr. reveal('.nome-1', {rotate: { x: 0, y: 100, z: 0}, duration: 1500});

const menuItens = document.querySelectorAll(".menu a");

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdClick);
})

function getScrollTopByHref(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 60;
    scrollToPosition(to);
}

function scrollToPosition(to){
    window.scroll({
        top: to,
        behavior: "smooth",
    });
}

