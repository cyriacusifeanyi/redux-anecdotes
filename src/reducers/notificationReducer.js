// It is enough for the application to display 
// the initial value set for the message in the notificationReducer.
// const initialNotificationMessage = {
//   'NEW_ANECDOTE_NOTIFICATION': 'Anecdote was created successfully.',
//   'UNSUCCESSFUL_CREATION_NOTIFICATION': 'Anecdote creation was unsuccessfully.',
//   'VOTE_ANECDOTE_NOTIFICATION': 'Upvoting antecdote was successful.',
//   'UNSUCCESFUL_UPVOTE_NOTIFICATION': 'Upvoting antecdote was unsuccessful.',
// }

const notificationReducer = (state = null, action) => {
  // console.log('state now: ', state)
  // console.log('ACTION: ', action)

  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data
    case 'NOTIFICATION_TIMEOUT':
      return null
    default:
      return state
  }
}

export const notificationChange = (message, timeout_in_sec) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: message
    })
    setTimeout(() => {
      dispatch(removeNotification())
    }, (timeout_in_sec * 1000))
  }
}

export const removeNotification = () => {
  return {
    type: 'NOTIFICATION_TIMEOUT'
  }
}

export default notificationReducer