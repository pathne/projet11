
import './index.css'

export default function FeatureItem(props) {
  return (
    <div className="feature-item">
      <img src={`./img/${props.icon}`} alt={props.iconText} className="feature-icon" />
      <h3 className="feature-item-title">{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}
