import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Subscribe to our Newsletter',
  description:
    'Subscribe to our Newsletter and stay connected with us. Nrityagram is a one-of-a-kind collective of artistes, where dance is a way of life.',
}

export default function SubscribePage() {
  return (
    <div className="container">
      <div className="wrapper flow">
        <h2 className="center">Subscribe to our Newsletter</h2>
        <iframe
          width="540"
          height="1000"
          src="https://ad245a8d.sibforms.com/serve/MUIFAPX6-10gsyh5gy7bH6yVYn2VKUKp_XQITuDX6CNdv9VeWoJ92Q3DEmb_7ea4s2hhJUc27nudtPCbLIZtjWll1owJQp3ocetsrjZ8lo2Hb2XzptBxw80dOA4PdEHMRhp5uxcSFgwtkEUmQSVltb0RHeysUlsokZ8__lg0U-ZfGAc-b2qLbVwR5I35ZlYhg4UNR_ttRvFer3zb"
          frameBorder="0"
          scrolling="auto"
          allowFullScreen
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '100%',
            overflowY: 'visible',
          }}
        />
      </div>
    </div>
  )
}
