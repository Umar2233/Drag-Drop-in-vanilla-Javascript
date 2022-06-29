import React from 'react'

const Card = (props) => {

    const dragStart = e => {
        const target = e.target

        e.dataTransfer.setData('card_id', target.id);

    const newId = e.dataTransfer.getData('newId');

    setTimeout(() => {
        target.style.display = 'none'
    }, 0)

    if(!newId) {
        setTimeout(() => {
            target.style.display = 'block'
        }, 2000)
    }
}

    const dragOver = e => {
        e.stopPropagation();
    }

    return (
        <div
            id={props.id}
            className={props.className}
            draggable={props.dragable}
            onDragStart={dragStart}
            onDragOver={dragOver}
        >
            {props.children}
        </div>
    )
}

export default Card