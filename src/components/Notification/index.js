import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {title, description, color, icon} = props

  return (
    <li className="Notification-card ">
      <div className="icon" style={{color}}>
        {' '}
        {icon}
      </div>
      <div className="text-container">
        <div>
          <h1 className="heading" style={{color}}>
            {title}
          </h1>
          <p className="description-style">{description}</p>
        </div>
        <div className="cross-mark-icon">
          <GrFormClose />
        </div>
      </div>
    </li>
  )
}

export default Notification
