// const BlocksToMarkdown = require("@sanity/block-content-to-markdown");
const client = require("../utils/sanityClient")
const urlFor = require("../utils/imageUrl")
// const serializers = require("../utils/serializers");


function generateMarkdownPage(ngPage) {
    let mastheadImagesResized = new Array(ngPage.mastheadImages.screentype.length)

    for (let index = 0; index < ngPage.mastheadImages.screentype.length; index++) {
        switch (ngPage.mastheadImages.screentype[ index ]) {
            case 'desktop':
                mastheadImagesResized[ index ] = urlFor(ngPage.mastheadImages.imgSource[ index ]).width(1600).height(876).url()
                break;
            case 'tablet':
                mastheadImagesResized[ index ] = urlFor(ngPage.mastheadImages.imgSource[ index ]).width(768).height(1024).url()
                break;
            case 'mobile':
                mastheadImagesResized[ index ] = urlFor(ngPage.mastheadImages.imgSource[ index ]).width(425).height(768).url()
                break;
            default:
                break;
        }

    }

    // Mash the two arrays and create one object --
    // {"desktop": "url for desktop", "tablet": "url for tablet", "mobile": "url for mobile"}
    const keys = ngPage.mastheadImages.screentype;
    const imgs = mastheadImagesResized;
    const keyImagePairs = keys.map((key, index) => [ key, imgs[ index ] ]);
    const mastheadImages = Object.fromEntries(keyImagePairs);
    const credits = ngPage.mastheadImageCredit
    const keyCreditPairs = keys.map((key, index) => [ key, credits[ index ] ]);
    const mastheadImagesCredits = Object.fromEntries(keyCreditPairs);

    console.dir(mastheadImages)
    console.dir(mastheadImagesCredits)

    return {
        title: ngPage.title,
        slug: ngPage.slug,
        mastheadImages: mastheadImages,
        mastheadImagesCredits: mastheadImagesCredits
    }
}



async function loadPages() {
    const pages = await client.fetch(
        '*[_type=="page"]{title, "slug":slug.current,"mastheadImages":{"screentype":mastheadImage[].screensize, "imgSource":mastheadImage[]}, "mastheadImageCredit": mastheadImage[].credit}'
    ).catch((err) => console.error(err));

    const markdownResult = pages.map(generateMarkdownPage)

    return markdownResult
}

module.exports = loadPages;