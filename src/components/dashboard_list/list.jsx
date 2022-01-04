import React from 'react'
import Card from './card';
import InputContainer from './inputContainer';
import Title from './title';
import { Droppable } from 'react-beautiful-dnd';

export default function List({ item }) {

    return (
        <div className='list'>
            
                <Title key={item.id} title={item.title} itemId={item.id}/>
                <Droppable droppableId={item.id}>
                    {(provided)=>(
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                        {item.cards.map((card, index) =>( 
                            <Card key={card.id} card={card} index={index}/>
                        ))}
                        {provided.placeholder}
                        </div>

                    )}
                
                </Droppable>
                <InputContainer listId={item.id} type="card"/>
        </div>
    )
}
