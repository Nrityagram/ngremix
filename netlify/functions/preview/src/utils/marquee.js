const marquees = document.querySelectorAll('.marquee')

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    marquees.forEach(marquee => {
        marquee.setAttribute("data-animated", true)

        const marqueeContent = marquee.querySelector('.marquee-content')
        const marqueeChildren = Array.from(marqueeContent.children)

        marqueeChildren.forEach(item => {
            const duplicatedItem = item.cloneNode(true)
            // hide the duplicated item from the screen reader
            duplicatedItem.setAttribute("aria-hidden", true)
            marqueeContent.appendChild(duplicatedItem)
        })
    })
}

