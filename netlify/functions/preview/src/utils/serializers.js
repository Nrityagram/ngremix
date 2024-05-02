// import { urlFor } from "./imageUrl"
const BlocksToMarkdown = require("@sanity/block-content-to-markdown");
const client = require("../utils/sanityClient")
const serializers = require("../utils/serializersSimpleContent");

module.exports = {
    types: {
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

            console.log(modalContent)

            return `<span class="open-modal" id="openModal-${modalId}">
            <a class="bodylink redtext">${children}</a></span><dialog id="${modalId}" class="modal"><div class="wrapper flow flow-flushtop flow-flushbottom"><div class="modal-header"><h4>${modalTitle}</h4><div class="close-button" id="closeModal-${modalId}" aria-label="close">&#215;</div></div>${modalContent}</div></dialog>`
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