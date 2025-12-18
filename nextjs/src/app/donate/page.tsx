'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Banner, ImageCard } from '@/components'

export default function DonatePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDonateOption = (option: string) => {
    switch (option) {
      case 'india':
      case 'nri':
        window.location.href = '/makeadonation'
        break
      case 'usa':
        window.location.href = '/makeadonation-usa'
        break
      case 'othercountry':
        window.location.href = '/makeadonation-other'
        break
    }
  }

  return (
    <>
      <Banner
        images={{
          desk: 'https://res.cloudinary.com/nrityagram/image/upload/v1588613881/donate_iwpz5s.jpg',
          tab: 'https://res.cloudinary.com/nrityagram/image/upload/v1589077339/ipad/Donate_y5gy2s.jpg',
          mob: 'https://res.cloudinary.com/nrityagram/image/upload/v1588613847/mobile/donate-mob_mezskh.jpg',
        }}
        title="Donate"
        alt="Make a Donation"
        credit="Guillermo Consejo"
      />
      <div className="container">
        <div className="wrapper flow">
          <p>Your support is vital to Nrityagram.</p>
          <p>
            A Donation of any amount - even ₹500 or $10 - will make it possible for us to
            strengthen our institution, so that our artists can continue creation, performance and
            engagement programmes, and teachers can continue to offer dance outreach activities for
            children who are poorly served in this area.
          </p>
          <p>Thank you for making a Donation to Nrityagram today!</p>
          <br />
          <div className="open-modal modal-button" onClick={() => setIsModalOpen(true)}>
            <div className="button red-plastic center">
              <div className="glare"></div>
              Make a Donation
            </div>
          </div>
        </div>
      </div>
      <div className="container accent-bg">
        <div className="wrapper ultra-wide flow flow-flushbottom">
          <div className="even-columns">
            <div className="left-column">
              <ImageCard
                href="/support"
                src="https://res.cloudinary.com/nrityagram/image/upload/v1570033128/support-us-banner_ejya2i.jpg"
                alt="Support Us Card"
                title="Support Us"
                credit="Uma Dhanwatey"
              />
            </div>
            <div className="right-column">
              <ImageCard
                href="/corpusfund"
                src="https://res.cloudinary.com/nrityagram/image/upload/v1591009076/support-the-corpus-fund_gho51g.jpg"
                alt="Support the Corpus Fund Card"
                title="Support the Corpus Fund"
                credit="Shalini Jain"
              />
            </div>
          </div>
          <div className="even-columns">
            <div className="left-column">
              <ImageCard
                href="/otherwaystogive"
                src="https://res.cloudinary.com/nrityagram/image/upload/v1570033127/infrastructure-development_egkkk1.jpg"
                alt="Other Ways to Give Card"
                title="Other Ways to Give"
                credit="Sreedhar Vaidya"
              />
            </div>
            <div className="right-column">
              <ImageCard
                href="/sponsorship"
                src="https://res.cloudinary.com/nrityagram/image/upload/v1570033127/festivals-and-events_ec7zal.jpg"
                alt="Sponsorship Card"
                title="Sponsorship"
                credit="Shalini Jain"
              />
            </div>
          </div>
        </div>
        <div className="wrapper ultra-wide flow">
          <p className="infotext center">
            We are happy to work with you on additional ideas that appeal to your funding interests
            and giving priorities.
            <br />
            Write to us at{' '}
            <a href="mailto:lynne@nrityagram.org" target="_blank" className="bodylink">
              lynne@nrityagram.org
            </a>
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <dialog id="donate-options" className="modal" open>
          <div className="wrapper flow flow-flushtop flow-flushbottom">
            <div className="modal-header">
              <h4>Select one</h4>
              <div className="close-button" aria-label="close" onClick={() => setIsModalOpen(false)}>
                ×
              </div>
            </div>
            <div className="modal-content flow-inbetween">
              <div>
                <label htmlFor="india" className="radio">
                  <input
                    type="radio"
                    value="india"
                    name="nationality"
                    className="citizen-type"
                    id="india"
                    onChange={() => handleDonateOption('india')}
                  />
                  Citizen of India (Tax Deductible)
                </label>
              </div>
              <div>
                <label htmlFor="nri" className="radio">
                  <input
                    type="radio"
                    value="nri"
                    name="nationality"
                    className="citizen-type"
                    id="nri"
                    onChange={() => handleDonateOption('nri')}
                  />
                  Non-Resident Indian (Tax Deductible)
                </label>
              </div>
              <div>
                <label htmlFor="usa" className="radio">
                  <input
                    type="radio"
                    value="usa"
                    name="nationality"
                    className="citizen-type"
                    id="usa"
                    onChange={() => handleDonateOption('usa')}
                  />
                  Citizen of USA (Tax Deductible)
                </label>
              </div>
              <div>
                <label htmlFor="othercountry" className="radio">
                  <input
                    type="radio"
                    value="othercountry"
                    name="nationality"
                    className="citizen-type"
                    id="othercountry"
                    onChange={() => handleDonateOption('othercountry')}
                  />
                  Citizen of another country
                </label>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  )
}
