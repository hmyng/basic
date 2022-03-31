import React from 'react'
import "./Input.css"

const Input = () => {
    return (
        <div className='input__container'>
            <input type="text" className='input__text'/>
            <button type='submit' className='input__submit'>Submit</button>
        </div>
    )
}

export default Input
