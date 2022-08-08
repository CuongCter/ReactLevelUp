import React from 'react'
import './ListItem.scss'
const ListItem = ({ id, item, handleDelete, handleChange, completed }) => {
    return (
        <div className='item mt-10 '>
            <div className='item_todo'>
                <div className={`flex ${completed ? 'status' : ''}`}>
                    <div className='item_todo__icon' onClick={() => handleChange(id)}>
                        <i class="fa-solid fa-check"></i>
                    </div>
                    <div className='item_todo__plan'>{item.plan}</div>
                </div>

                <div className='item_todo__delete' onClick={() => handleDelete(id)}>
                    <i class="fa-solid fa-circle-minus"></i>
                </div>
            </div>
        </div >
    )
}

export default ListItem