import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Nrityagram website.',
}

export default function PrivacyPage() {
  return (
    <div className="container">
      <div className="wrapper flow">
        <h1 className="center">Privacy Policy</h1>
        <p>
          Nrityagram values your privacy and is committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, and safeguard your data when you visit
          our website.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address, and phone number
          when you subscribe to our newsletter, make a donation, or contact us through our website.
        </p>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul className="basic">
          <li>Send you our newsletter and updates about Nrityagram</li>
          <li>Process donations and provide tax receipts</li>
          <li>Respond to your inquiries and requests</li>
          <li>Improve our website and services</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information from
          unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We may use third-party services for analytics, payment processing, and email marketing.
          These services have their own privacy policies governing their use of your information.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:info@nrityagram.org" className="bodylink">
            info@nrityagram.org
          </a>
          .
        </p>
      </div>
    </div>
  )
}
