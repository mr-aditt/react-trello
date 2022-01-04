import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export default function Card({ card, index }) {

    return (
        <Draggable draggableId={card.id} index={index}>
            {(provided)=>(

            <div className='list-card'
                ref={provided.innerRef}
                {...provided.dragHandleProps}
                {...provided.draggableProps}
            >
                {card.content}
            </div>
            )}
            
        </Draggable>
    )
}
