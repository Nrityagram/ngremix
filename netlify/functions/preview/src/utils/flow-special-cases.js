const flowElemList = document.getElementsByClassName('flow')

for (const flowElem of flowElemList) {
    const nextElem = flowElem.nextElementSibling
    // get all flow elements whose next sibling is owl-carousel
    if (nextElem && nextElem.classList.contains('owl-carousel')) {
        flowElem.classList.add('flow-flushbottom')
        // Add flow-flushtop to the element following the owl-carousel
        const elemAfterCarousel = nextElem.nextElementSibling
        elemAfterCarousel.classList.add('flow-flushtop')
    }
}
