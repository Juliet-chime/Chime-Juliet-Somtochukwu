import React from 'react'

const UserInput = ({ setQuery }) => {
    return (
        <>
            <input placeholder="Search...." onChange={event => setQuery(event.target.value)} className='userInput' />
        </>
    )
}

export default UserInput
