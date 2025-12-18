import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Nrityagram website.',
}

export default function TermsConditionsPage() {
  return (
    <div className="container">
      <div className="wrapper flow">
        <h1 className="center">Terms & Conditions</h1>
        <p>
          Welcome to the Nrityagram website. By accessing and using this website, you agree to
          comply with and be bound by these Terms and Conditions.
        </p>

        <h2>Use of Website</h2>
        <p>
          The content of this website is for general information and use only. It is subject to
          change without notice.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content on this website, including but not limited to text, graphics, logos, images,
          and videos, is the property of Nrityagram or its content suppliers and is protected by
          copyright laws.
        </p>

        <h2>Photography and Videography</h2>
        <p>
          Photography and videography of our dancers is not allowed without prior written
          permission from Nrityagram.
        </p>

        <h2>Donations</h2>
        <p>
          All donations made through our website are final and non-refundable unless otherwise
          stated. Tax receipts will be provided as applicable.
        </p>

        <h2>External Links</h2>
        <p>
          This website may contain links to external websites. We are not responsible for the
          content or privacy practices of these external sites.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          Nrityagram shall not be liable for any direct, indirect, incidental, or consequential
          damages arising from your use of this website.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact us at{' '}
          <a href="mailto:info@nrityagram.org" className="bodylink">
            info@nrityagram.org
          </a>
          .
        </p>
      </div>
    </div>
  )
}
