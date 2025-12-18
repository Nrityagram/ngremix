import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any

export const sanityClient = createClient({
  projectId: 'a81875ul',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Page query for Sanity
export const pageQuery = `*[_type=="page"]{
  title,
  "slug":slug.current,
  "mastheadImageDeskCredit":mastheadImageDesk.credit,
  "mastheadImageDeskAlt":mastheadImageDesk.alt,
  mastheadImageDesk,
  "mastheadImagesCredit": mastheadImages[].credit,
  "mastheadImagesScreenTypes": mastheadImages[].screensize,
  "mastheadImageSources": mastheadImages[],
  contentBlocks[]{
    "bgColour":bgColour.label,
    "anchorId":anchorLinkName,
    content[]{
      ...,
      _type=="pictureCards"=>{
        "cards":@.cards[]{
          ...,
          "credit":@.credit,
          "alt":@.alt,
          "slug":@.pageReference->slug,
          "cardTitle":@.cardTitle,
          "cardSubtitle":@.cardSubtitle
        }
      },
      _type=="redButton"=>{
        ...,
        "slug":@.pageReference->slug,
        "modalId":@._key,
        "modalWindow":@.modalWindow{
          modalTitle,
          content[]{
            ...,
            markDefs[]{
              ...,
              _type=="intlink"=>{
                ...,
                "slug":@.pageReference->slug
              }
            }
          }
        }
      },
      _type=="radioButtonList"=>{
        ...,
        "options":@.options[]{
          ...,
          "slug":@.pageReference->slug
        }
      },
      markDefs[]{
        ...,
        _type=="intlink"=>{
          ...,
          "slug":@.pageReference->slug
        },
        _type=="popuplink"=>{
          ...,
          "modalId":@._key,
          "modalWindow":@.modalWindow{
            modalTitle,
            content[]{
              ...,
              markDefs[]{
                ...,
                _type=="intlink"=>{
                  ...,
                  "slug":@.pageReference->slug
                }
              }
            }
          }
        }
      },
      children[]{...}
    }
  }
}`

export async function getPages() {
  return sanityClient.fetch(pageQuery)
}

export async function getPageBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type=="page" && slug.current == $slug][0]{
      title,
      "slug":slug.current,
      "mastheadImageDeskCredit":mastheadImageDesk.credit,
      "mastheadImageDeskAlt":mastheadImageDesk.alt,
      mastheadImageDesk,
      "mastheadImagesCredit": mastheadImages[].credit,
      "mastheadImagesScreenTypes": mastheadImages[].screensize,
      "mastheadImageSources": mastheadImages[],
      contentBlocks[]{
        "bgColour":bgColour.label,
        "anchorId":anchorLinkName,
        content[]{
          ...,
          _type=="pictureCards"=>{
            "cards":@.cards[]{
              ...,
              "credit":@.credit,
              "alt":@.alt,
              "slug":@.pageReference->slug,
              "cardTitle":@.cardTitle,
              "cardSubtitle":@.cardSubtitle
            }
          },
          _type=="redButton"=>{
            ...,
            "slug":@.pageReference->slug,
            "modalId":@._key,
            "modalWindow":@.modalWindow{
              modalTitle,
              content[]{
                ...,
                markDefs[]{
                  ...,
                  _type=="intlink"=>{
                    ...,
                    "slug":@.pageReference->slug
                  }
                }
              }
            }
          },
          _type=="radioButtonList"=>{
            ...,
            "options":@.options[]{
              ...,
              "slug":@.pageReference->slug
            }
          },
          markDefs[]{
            ...,
            _type=="intlink"=>{
              ...,
              "slug":@.pageReference->slug
            },
            _type=="popuplink"=>{
              ...,
              "modalId":@._key,
              "modalWindow":@.modalWindow{
                modalTitle,
                content[]{
                  ...,
                  markDefs[]{
                    ...,
                    _type=="intlink"=>{
                      ...,
                      "slug":@.pageReference->slug
                    }
                  }
                }
              }
            }
          },
          children[]{...}
        }
      }
    }`,
    { slug }
  )
}
