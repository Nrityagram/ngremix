import { Metadata } from 'next'
import Image from 'next/image'
import { Banner, ImageCard } from '@/components'

export const metadata: Metadata = {
  title: 'Visit Us',
  description:
    'Fun and interesting activities to do in Nrityagram. Nrityagram is a one-of-a-kind collective of artistes, where dance is a way of life.',
  openGraph: {
    images: [
      {
        url: 'https://res.cloudinary.com/nrityagram/image/upload/w_600/v1718195137/visit-masthead-desk_a5rmuq.png',
      },
    ],
  },
}

export default function VisitPage() {
  return (
    <>
      <Banner
        images={{
          desk: 'https://res.cloudinary.com/nrityagram/image/upload/v1718195137/visit-masthead-desk_a5rmuq.png',
          tab: 'https://res.cloudinary.com/nrityagram/image/upload/v1718195187/visit-masthead-tablet_tgylwl.png',
          mob: 'https://res.cloudinary.com/nrityagram/image/upload/v1718195154/visit-masthead-mobile_szqagf.png',
        }}
        title="Visit Us"
        alt="Visit Us"
        credit="Courtesy Colorado Fine Arts Association"
      />
      <div className="container">
        <div className="wrapper flow">
          <p>
            Nrityagram offers people a unique opportunity to view dance classes and rehearsals at
            our beautiful campus and we are happy to welcome visitors from all over India, as well
            as guests from all over the world.
          </p>
          <div>
            <h3>Visiting Hours</h3>
            <ul className="basic no-bullets">
              <li>10am to 2pm on Friday, Saturday and Sunday.</li>
            </ul>
          </div>
          <div>
            <h3>Class Timings</h3>
            <ul className="basic">
              <li>Friday and Saturday from 10.30am to 1pm.</li>
              <li>
                Sunday from 10am to 1pm for our Community Outreach programme, in which we teach
                approximately 100 children / young adults.
              </li>
            </ul>
          </div>
          <div>
            <h3>Closed</h3>
            <ul className="basic no-bullets">
              <li>
                Mondays and all National and State holidays. This is in addition to regular school
                vacations.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container accent-bg">
        <div className="wrapper flow">
          <h1 className="center">Things to do at Nrityagram</h1>

          <div className="image-plus top-flow">
            <Image
              src="https://res.cloudinary.com/nrityagram/image/upload/v1580706722/thingstodo_1_o2zpyi.jpg"
              alt="Rehearsals and classes at Nrityagram"
              width={1046}
              height={700}
              sizes="(max-width: 560px) 560px, (max-width: 768px) 768px, 1046px"
            />
            <div className="credit" data-image-credit="Lynne Fernandez"></div>
          </div>

          <h2 className="center">Take a Casual Tour</h2>
          <ul className="basic">
            <li>
              This is a self-guided tour. You will be given a brief orientation, after which you
              can explore our beautiful campus and watch rehearsals / classes.
            </li>
            <li>Cost is ₹150 per person (Subject to change).</li>
            <li>No Payment for Adults over 75 years and Children below 12 years.</li>
          </ul>
          <br />

          <div className="image-plus">
            <Image
              src="https://res.cloudinary.com/nrityagram/image/upload/v1580706722/thingstodo_2_mfisqg.jpg"
              alt="Guided Tours at Nrityagram"
              width={1046}
              height={700}
              sizes="(max-width: 560px) 560px, (max-width: 768px) 768px, 1046px"
            />
            <div className="credit" data-image-credit="Surupa Sen"></div>
          </div>

          <h2 className="center">Book a Guided Tour</h2>
          <ul className="basic">
            <li>
              This is a 45 minute guided tour of our campus, following which you have time to
              watch rehearsal / classes, and explore our campus further.
            </li>
            <li>Minimum 20 people.</li>
            <li>Advance Booking and payment required.</li>
            <li>
              Email{' '}
              <a href="mailto:info@nrityagram.org" className="bodylink">
                info@nrityagram.org
              </a>{' '}
              for cost
            </li>
          </ul>
          <br />

          <div className="image-plus">
            <Image
              src="https://res.cloudinary.com/nrityagram/image/upload/c_scale,w_800/v1580706723/thingstodo_3_rs6fte.jpg"
              alt="Private performance at Nrityagram"
              width={1046}
              height={700}
              sizes="(max-width: 560px) 560px, (max-width: 768px) 768px, 1046px"
            />
            <div className="credit" data-image-credit="Surupa Sen"></div>
          </div>

          <h2 className="center">Watch a Private Performance</h2>
          <ul className="basic">
            <li>
              This includes a guided tour for 45 minutes and a 45 minute Odissi Performance
              followed by a 15 minute Q & A.
            </li>
            <li>Minimum 20 people.</li>
            <li>Advance Booking and payment required.</li>
            <li>
              Email{' '}
              <a href="mailto:info@nrityagram.org" className="bodylink">
                info@nrityagram.org
              </a>{' '}
              for cost.
            </li>
          </ul>
          <br />

          <div className="image-plus">
            <Image
              src="https://res.cloudinary.com/nrityagram/image/upload/c_scale,w_800/v1580706722/thingstodo_4_gftome.jpg"
              alt="Lecture demonstration at Nrityagram"
              width={1046}
              height={700}
              sizes="(max-width: 560px) 560px, (max-width: 768px) 768px, 1046px"
            />
            <div className="credit" data-image-credit="Surupa Sen"></div>
          </div>

          <h2 className="center">Attend an Informance</h2>
          <ul className="basic">
            <li>
              Come by yourself or in a small group and enjoy the rich legacy of Odissi in an
              intimate studio setting with the renowned performers and Gurus of Nrityagram.
            </li>
            <li>
              To be held on select weekends from 11AM to 1PM (including a Q & A and Guided Tour).
            </li>
            <li>Advance Booking and payment is required.</li>
            <li>
              Email{' '}
              <a href="mailto:info@nrityagram.org" className="bodylink">
                info@nrityagram.org
              </a>{' '}
              for cost and schedule.
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="wrapper flow">
          <h1 className="center">Additional Information</h1>
          <ul className="basic">
            <li>
              Nrityagram is presently not wheelchair-accessible, so keep this in mind when
              planning your visit. Call us in advance so we can make arrangements.
            </li>
            <li>Photography and Videography of our dancers is not allowed.</li>
            <li>Our campus is not available to be used as a location for photo or film shoots.</li>
            <li>
              We do not serve meals or have accommodation for rent. Ask our Office for options
              nearby.
            </li>
          </ul>
        </div>
        <div className="wrapper ultra-wide flow">
          <div className="even-columns">
            <div className="left-column">
              <ImageCard
                href="/findyourway"
                src="https://res.cloudinary.com/nrityagram/image/upload/v1718211757/findyourway-masthead-desk_eqmvd0.png"
                alt="Find Your Way Card"
                title="Find Your Way"
                credit="Ravi Shankar"
              />
            </div>
            <div className="right-column">
              <ImageCard
                href="/virtualtour"
                src="https://res.cloudinary.com/nrityagram/image/upload/v1718212901/virtual_tour_card_he3zta.jpg"
                alt="Virtual Tour Card"
                title="Virtual Tour"
                credit="Surupa Sen"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
