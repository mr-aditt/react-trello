import React from 'react'

export default function Card({card}) {
    return (
        <div className='list-card'>
            {card.content}
        </div>
    )
}
