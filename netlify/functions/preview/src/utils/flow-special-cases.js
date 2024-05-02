const flowElemList = document.getElementsByClassName('flow')

for (const flowElem of flowElemList) {
    const nextElem = flowElem.nextElementSibling
    // get all flow elements whose next sibling is owl-carousel
    if (nextElem && nextElem.classList.contains('owl-carousel')) {
        flowElem.classList.add('flow-flushbottom')
    }
}
