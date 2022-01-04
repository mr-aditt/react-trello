import React, { useState } from 'react'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Title({ itemId, title }) {

    const [open, setOpen] = useState(false);
    const [newTitle, setNewTitle] = useState(title)

    function handleChange(e){
        setNewTitle(e.target.value);
        
    }
    
    return (
        <>
            {!open &&
                <div className='title title-nonEditable' onClick={() => setOpen(true)}>
                    {newTitle} <FontAwesomeIcon icon={faEllipsisH} className='ellipsis' />
                </div>}
            {open &&
                <div className='title' onBlur={() => setOpen(false)}>
                    <input type="text" className='title-text' value={newTitle} onChange={handleChange}/>
                    <FontAwesomeIcon icon={faEllipsisH} className='ellipsis' />
                </div>
            }
        </>
    )
}
