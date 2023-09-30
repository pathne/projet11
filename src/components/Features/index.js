
import './index.css'

import FeatureItem from '../FeatureItem'

export default function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeatureItem
        icon="icon-chat-152w.jpg"
        iconText="Chat Icon"
        title="You are our #1 priority"
        text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <FeatureItem
        icon="icon-money-152w.jpg"
        iconText="Chat Icon"
        title="More savings means higher rates"
        text="The more you save with us, the higher your interest rate will be!"
      />
      <FeatureItem
        icon="icon-security-152w.jpg"
        iconText="Chat Icon"
        title="Security you can trust"
        text="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
  )
}
