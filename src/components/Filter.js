import React from 'react'
import { filterChange } from '../reducers/filterReducer'
import { connect } from 'react-redux'


const Filter = (props) => {
  // const dispatch = useDispatch()

  const handleChange = (event) => {
    event.preventDefault()
    props.filterChange(event.target.value)
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
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
  filterChange,
}

const ConnectedFilter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter)

export default ConnectedFilter