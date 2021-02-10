import anecdoteService from '../services/anecdotes'
import { notificationChange } from './notificationReducer'
const anecdoteReducer = (state = [], action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch (action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE_ANECDOTE':
      return action.data
    default:
      return state
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export const voteFor = (id) => {
  return async dispatch => {
    const updatedAnecdote = await (await anecdoteService.voteFor(id)).data
    console.log(updatedAnecdote)
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'VOTE_ANECDOTE',
      data: anecdotes
    })

    dispatch(notificationChange(`new anecdote '${updatedAnecdote.content}'`, 5))
  }
}

export default anecdoteReducer