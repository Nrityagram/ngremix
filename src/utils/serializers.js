const BlocksToMarkdown = require("@sanity/block-content-to-markdown");
const urlFor = require("../utils/imageUrl");
const client = require("../utils/sanityClient")
const serializers = require("../utils/serializersSimpleContent")

const pageSettings = require("../utils/pageSettings")


function formatPopupContent(str) {
    // Order is important - first h4 then h3 then h2 and last h1

    //  Replace substrings that begin with #### and end with a newline
    str = str.replace(/####(.*)\n/g, '<h4>$1</h4>')

    // Replace substrings that begin with ### and end with a newline
    str = str.replace(/###(.*)\n/g, '<h3>$1</h3>')

    // Replace substrings that begin with ## and end with a newline
    str = str.replace(/##(.*)\n/g, '<h2>$1</h2>')

    // Replace substrings that begin with a single # and end with a newline
    str = str.replace(/#(.*)\n/g, '<h1>$1</h1>')

    return str
}

const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/

// asset._ref:image-2be3816058af1a2aedbbae41c381def16ee052ec-1079x1095-jpg
const decodeAssetId = id => {
    const [ , assetId, dimensions, format ] = pattern.exec(id)
    const [ width, height ] = dimensions.split("x").map(v => parseInt(v, 10))

    return {
        assetId,
        dimensions: { width, height },
        format,
    }
}

module.exports = {
    types: {
        a11yImage: ({ node }) => {
            const image = new Object()
            image.credit = node.credit
            image.caption = node.imgcaption
            image.alt = node.imgalt
            image.assets = decodeAssetId(node.asset._ref)

            const widths = { "mob": 560, "tab": 768, "desk": 1046 }
            const webpURLs = new Object()
            const sizes = "(max-width: 800px) 200px, 50vw"
            const loadingOption = "lazy", decoding = "async"
            const desk_h = image.assets.dimensions.height / image.assets.dimensions.width * widths.desk

            for (const screenKey in widths) {
                webpURLs[ screenKey ] = urlFor(node).format('webp').width(widths[ screenKey ]).url()
            }

            // console.dir(webpURLs)

            return `<div class="image-plus top-flow"><picture><source type="image/webp" srcset="${webpURLs[ "mob" ]} 560w, ${webpURLs[ "tab" ]} 768w, ${webpURLs[ "desk" ]} 1046w" sizes="${sizes}">
            <img alt="${image.alt}" loading="${loadingOption}" decoding="${decoding}" src="${webpURLs[ "mob" ]}" width="${widths[ "desk" ]}" height="${desk_h}"></picture><div class="credit" data-image-credit="${image.credit}" ></div></div>`
        },
        imageSlider: ({ node }) => {
            pageSettings.setSlider()
            const widths = { "mob": 425, "tab": 768, "desk": 1600 }
            const images = node.images
            const imageDetailList = new Array()
            const aspectRatio = 1046 / 618 // Fixed for slider images
            const sizes = "(max-width: 800px) 200px, 50vw"
            const loadingOption = "lazy", decoding = "async"

            images.forEach(image => {
                const webpURLs = new Object()
                const credit = image.credit
                const alt = image.alt
                const assets = decodeAssetId(image.asset._ref)
                const desk_h = assets.dimensions.height / assets.dimensions.width * widths.desk

                for (const screenKey in widths) {
                    webpURLs[ screenKey ] = urlFor(image).format('webp').width(widths[ screenKey ]).url()
                }

                const pictureElem = `<div class="item rounded"><picture><source type="image/webp" srcset="${webpURLs[ "mob" ]} 425w, ${webpURLs[ "tab" ]} 768w, ${webpURLs[ "desk" ]} 1600w" sizes="${sizes}"><img alt="${alt}" loading="${loadingOption}" decoding="${decoding}" src="${webpURLs[ "mob" ]}" width="${widths[ "desk" ]}" height="${desk_h}"></picture><div class="photo-credit">Photo : ${credit}</div></div>`

                imageDetailList.push(pictureElem)
            });

            const sliderImagesHTML = imageDetailList.join('')
            // console.log(sliderImagesHTML)

            return `</div><div class="owl-carousel ultra-wide owl-theme">${sliderImagesHTML}</div><div class="wrapper flow">`
        }
    },
    marks: {
        center: ({ mark, children }) => {
            return `<span class="centerflex">${children}</span>`;
        },
        right: ({ mark, children }) => {
            return `<span class="rightflex">${children}</span>`
        },
        semibold: ({ mark, children }) => {
            return `<span style="font-weight: 400">${children}</span>`
        },
        underline: ({ mark, children }) => {
            return `<span class="underline">${children}</span>`
        },
        redtext: ({ mark, children }) => {
            return `<span class="redtext">${children}</span>`
        },
        greytext: ({ mark, children }) => {
            return `<span class="infotext">${children}</span>`
        },
        extlink: ({ mark, children }) => {
            var { url } = mark
            // Get rid of anything following a ? in the link
            url = url.split("?")[ 0 ]
            return `<a href=${url} class="bodylink" target="_blank" rel="noopener noreferer">${children}</a>`
        },
        intlink: ({ mark, children }) => {
            const { slug = {} } = mark
            const href = `/${slug.current}`
            return `<a href=${href} class="bodylink">${children}</a>`
        },
        popuplink: ({ mark, children }) => {
            const { modalId, modalWindow } = mark
            const modalTitle = modalWindow.modalTitle
            const modalContent = BlocksToMarkdown(modalWindow.content, {
                serializers,
                ...client.config()
            })

            const modifiedModalContent = formatPopupContent(modalContent)

            return `<span class="open-modal" id="openModal-${modalId}">
            <a class="bodylink redtext">${children}</a></span><dialog id="m${modalId}" class="modal"><div class="wrapper flow flow-flushtop flow-flushbottom"><div class="modal-header"><h4>${modalTitle}</h4><div class="close-button" id="closeModal-${modalId}" aria-label="close">&#215;</div></div><div class="modal-content flow-inbetween">${modifiedModalContent}</div></div></dialog><script type="text/javascript">const modal_${modalId} = document.querySelector('#m${modalId}');const openModal_${modalId} = document.querySelector('#openModal-${modalId}');const closeModal_${modalId} = document.querySelector('#closeModal-${modalId}');openModal_${modalId}.addEventListener('click', () => {modal_${modalId}.showModal();});closeModal_${modalId}.addEventListener('click', () => {modal_${modalId}.close();});</script>`
        }
    },
    list: ({ type, children }) => {
        // console.dir(type) //-- gives the type of list style, bullet, nobullet,number, etc
        const listStr = children.join('') //remove the , between list items

        switch (type) {
            case 'bullet':
                return `<ul class="basic">${listStr}</ul>`
            case 'nobullet':
                return `<ul class="basic no-bullets">${listStr}</ul>`
            case 'number':
                return `<ol class="basic">${listStr}</ol>`
            default:
                break;
        }
    },
    listItem: ({ node, children }) => {
        // console.log(node.listItem) -- gives the type of list style, bullet, nobullet, numberetc
        return `<li>${children}</li>`
    }
}