import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = {
    content,
    votes: 0
  }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const voteFor = async (id) => {

  const anecdoteToVote = await (await axios.get(baseUrl.concat('/', id))).data

  const changedAnecdote = {
    ...anecdoteToVote,
    votes: anecdoteToVote.votes + 1
  }
  
  return await axios.patch(baseUrl.concat('/', id), changedAnecdote)
}

export default {
  getAll,
  createNew,
  voteFor
}