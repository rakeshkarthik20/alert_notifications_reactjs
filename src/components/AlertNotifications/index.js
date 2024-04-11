// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const NotificationsList = [
  {
    id: 1,
    title: 'Success',
    description: 'You can access all the files in the folder',
    color: '#2dca73',
    icon: <AiFillCheckCircle />,
  },
  {
    id: 2,
    title: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
    color: ' #ff0b37',
    icon: <RiErrorWarningFill />,
  },
  {
    id: 3,
    title: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
    color: '#ffb800',
    icon: <MdWarning />,
  },
  {
    id: 4,
    title: 'info',
    description: 'Anyone on the internet can view these files',
    color: '#0f81e0',
    icon: <MdInfo />,
  },
]

class AlertNotifications extends Component {
  render() {
    return (
      <div className="Notification-container">
        <h1>Alert Notifications</h1>
        <ul className="lists">
          {NotificationsList.map(each => (
            <Notification
              key={each.id}
              title={each.title}
              description={each.description}
              color={each.color}
              icon={each.icon}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default AlertNotifications
