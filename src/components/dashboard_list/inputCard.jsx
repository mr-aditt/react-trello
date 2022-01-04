import React from 'react';
import { useContext, useState } from 'react';
import { listContext } from '../context';

export default function InputCard({setOpen, listId, type}) {

    const {addMoreCard, addMoreList} = useContext(listContext);
    const [title, setTitle, ] = useState('');

    function handleChange(e){
        setTitle(e.target.value);
    }

    function handleBtnConfirm(){
        if(type==="card"){
            console.log(listId, title);
            addMoreCard(listId, title)
            setOpen(false)
        }else{
            addMoreList(title)
            setOpen(false)
        }
    }

    return (
        <div className='inputCard'>
            <textarea name="input-card-area" className='input-card-area' onChange={handleChange} />
            <div className='add-card-btn-container'>
                <button onClick={handleBtnConfirm}>{type==="card"?"Add card":"Add list"}</button>
                <button className='close-card' onClick={()=>setOpen(false)}>x</button>
            </div>
        </div>
    )
}
