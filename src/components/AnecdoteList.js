import React from 'react'
import { connect } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'

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

const AnecdoteList = (props) => {

  const anecdotesToShow = () => {
    if (props.filter === null || props.filter === '') {
      // console.log('1', props.anecdotes)
      return props.anecdotes
    } else {
      const result = props.anecdotes
        .filter(anecdote => anecdote.content.toLowerCase()
          .includes(props.filter.toLowerCase())
        )
      // console.log('2', result)
      return result
    }
  }

  return (
    <div id='anecdoteLists' >
      {anecdotesToShow()
        .sort((a, b) => (a.votes < b.votes ? 1 : -1))
        .map(anecdote =>
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() =>  props.voteFor(anecdote.id) }
          />
        )
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    notification: state.notification,
    filter: state.filter,
  }
}

const mapDispatchToProps = {
  voteFor,
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AnecdoteList)

export default ConnectedAnecdoteList