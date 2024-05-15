const flowElemList = document.getElementsByClassName('flow')
const wrapperFlowElemList = document.querySelectorAll('.wrapper.flow')

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

for (const wrapFlowElem of wrapperFlowElemList) {
    const nextElem = wrapFlowElem.nextElementSibling
    if (nextElem && nextElem.classList.contains('wrapper') && nextElem.classList.contains('flow')) {
        wrapFlowElem.classList.add('flow-flushbottom')
    }
}

console.log(wrapperFlowElemList)
