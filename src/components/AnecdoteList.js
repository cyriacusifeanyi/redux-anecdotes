import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { removeNotification, notificationChange } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(state => {
    if (state.filter === null || state.filter === '') {
      return state.anecdotes
    } else {
      return state.anecdotes
        .filter(anecdote => anecdote.content.toLowerCase()
          .includes(state.filter.toLowerCase())
        )
    }
  })

  const upvoteAction = (id) => {
    dispatch(voteFor(id))
    
    dispatch(notificationChange('VOTE_ANECDOTE_NOTIFICATION'))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
  }

  return (
    <div id='anecdoteLists' >
      {anecdotes
        .sort((a, b) => (a.votes < b.votes ? 1 : -1))
        .map(anecdote =>
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() => { upvoteAction(anecdote.id) }}
          />
        )
      }
    </div>
  )
}

export default AnecdoteList