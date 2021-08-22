import React from 'react'

const Anecdote = ({ anecdote }) => {
    return (
        <div>
            <h3>
                { anecdote.content }
            </h3>
            <div>
                has {anecdote.votes}
            </div>
            <span>
                for more info see
            </span>
            <a href={anecdote.info}>
                {anecdote.info}
            </a>
        </div>
    )
}

export default Anecdote
