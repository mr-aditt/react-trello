import React, { useState } from 'react'
import InputCard from './inputCard'

export default function InputContainer({ listId, type }) {

    const [open, setOpen] = useState(false)
    return (
        <>
            {open && <InputCard setOpen={setOpen} listId={listId} type={type} />}
            {!open && <div className='inputContainer' onClick={() => setOpen(!open)}>
                {type === "card" ? "+ Add a card" : "+ Add a list"}
            </div>}
        </>
    )
}
