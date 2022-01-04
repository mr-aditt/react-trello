import React from 'react'
import Card from './card';
import InputContainer from './inputContainer';
import Title from './title';


export default function List({ item }) {

    return (
        <div className='list'>
            
                <Title key={item.id} title={item.title} itemId={item.id}/>
                
                {item.cards.map(card =>( 
                    <Card key={card.id} card={card} />
                ))}
                <InputContainer listId={item.id} type="card"/>
        </div>
    )
}
