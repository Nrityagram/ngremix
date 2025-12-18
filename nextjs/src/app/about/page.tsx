import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Banner, ImageCard } from '@/components'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We aspire to be a dynamic artistic community that practices and upholds the holistic traditions associated with the classical arts of India. Nrityagram is a one-of-a-kind collective of artistes, where dance is a way of life.',
  openGraph: {
    images: [
      {
        url: 'https://res.cloudinary.com/nrityagram/image/upload/w_600/v1580623152/1_w9kze2.jpg',
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <>
      <Banner
        images={{
          desk: 'https://res.cloudinary.com/nrityagram/image/upload/v1729587394/about-desk_upscayl_2x_realesrgan-x4plus_nkwiey.png',
          tab: 'https://res.cloudinary.com/nrityagram/image/upload/v1729587392/about-tablet_upscayl_2x_realesrgan-x4plus_khopec.png',
          mob: 'https://res.cloudinary.com/nrityagram/image/upload/v1729587391/about-mobile_upscayl_2x_realesrgan-x4plus_kitcyo.png',
        }}
        title="About Us"
        alt="About Us"
        credit="Darial Sneed"
      />
      <div className="container">
        <div className="wrapper flow">
          <p>
            Once upon a time, a dreamer saw a land of wilderness and red mud, and imagined a haven
            for dance, and thus was born the idea of Nrityagram, which literally means
            dance-village. In a world that did not know what a woman entrepreneur meant,{' '}
            <Link href="/protima" className="bodylink">
              Protima Gauri
            </Link>{' '}
            single-handedly strove to make the dream real, fueled by a sense of adventure and a
            commitment to artistic excellence.
          </p>
          <p>
            Today, Nrityagram is a thriving collective of artistes dedicated to the practice and
            nurture of Odissi, a 2000-year-old classical dance of India. The village is home to a{' '}
            <Link href="/gurukula" className="bodylink">
              School
            </Link>{' '}
            inspired by the Gurukula, an ancient teaching paradigm, and an internationally renowned
            Dance{' '}
            <Link href="/ensemble" className="bodylink">
              Ensemble
            </Link>
            .
          </p>
          <p>
            Our mission is to nurture dance professionals through the gurukula system, perform on a
            global stage and forge a community through outreach.
          </p>
          <p>
            We aspire to be a dynamic artistic community that practises and upholds the holistic
            traditions associated with the classical arts of India. A place that nurtures artistic
            growth and exchange, and enables deeper connections between people and art, beyond
            political, social and cultural differences.
          </p>
        </div>
      </div>
      <div className="container accent-bg">
        <div className="wrapper ultra-wide flow">
          <div className="even-columns">
            <div className="left-column">
              <ImageCard
                href="/history"
                src="https://res.cloudinary.com/nrityagram/image/upload/v1572106197/history_kaf95n.jpg"
                alt="History Card"
                title="History"
                credit="Avinash Pasricha"
              />
            </div>
            <div className="right-column">
              <ImageCard
                href="/space"
                src="https://res.cloudinary.com/nrityagram/image/upload/v1647179355/Space-cat2-desk_rix0hl.jpg"
                alt="Space Card"
                title="Space"
                credit="Surupa Sen"
              />
            </div>
          </div>
          <div className="even-columns">
            <div className="left-column">
              <ImageCard
                href="/future"
                src="https://res.cloudinary.com/nrityagram/image/upload/v1718198365/future-masthead-desk_pcffe4.png"
                alt="Future Card"
                title="Future"
                credit="Karthik Venkatraman"
              />
            </div>
            <div className="right-column">
              <ImageCard
                href="/board"
                src="https://res.cloudinary.com/nrityagram/image/upload/v1569995939/board-of-trustees-banner_srxmvn.jpg"
                alt="Board of Trustees Card"
                title="Board of Trustees"
                credit="Karthik Venkatraman"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
