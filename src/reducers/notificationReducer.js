// It is enough for the application to display 
// the initial value set for the message in the notificationReducer.
const initialNotificationMessage = {
  'NEW_ANECDOTE_NOTIFICATION': 'Anecdote was created successfully.',
  'UNSUCCESSFUL_CREATION_NOTIFICATION': 'Anecdote creation was unsuccessfully.',
  'VOTE_ANECDOTE_NOTIFICATION': 'Upvoting antecdote was successful.',
  'UNSUCCESFUL_UPVOTE_NOTIFICATION': 'Upvoting antecdote was unsuccessful.',
}

const notificationReducer = (state = null, action) => {
  // console.log('state now: ', state)
  // console.log('ACTION: ', action)

  switch (action.type) {
    case 'NEW_ANECDOTE_NOTIFICATION':
      return initialNotificationMessage[action.type]
    case 'UNSUCCESSFUL_CREATION_NOTIFICATION':
      return initialNotificationMessage[action.type]
    case 'VOTE_ANECDOTE_NOTIFICATION':
      return initialNotificationMessage[action.type]
    case 'UNSUCCESFUL_UPVOTE_NOTIFICATION':
      return initialNotificationMessage[action.type]
    case 'NOTIFICATION_TIMEOUT':
      return null
    default:
      return state
  }
}

export const notificationChange = (notificationType) => {
  return {
    type: notificationType
  }
}

export const removeNotification = () => {
  return {
    type: 'NOTIFICATION_TIMEOUT'
  }
}

export default notificationReducer