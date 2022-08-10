import React from 'react'
import './ListItem.scss'
const ListItem = ({ id, item, handleDelete, handleChange, completed, handleEdit, handleActive, handleSave }) => {
    return (
        <div className='item mt-10 '>
            <div className='item_todo'>
                <div className={`flex ${completed ? 'status' : ''}`}>
                    <div className='item_todo__icon' onClick={() => handleChange(id)}>
                        <i class="fa-solid fa-check"></i>
                    </div>
                    {
                        !item.change ? (<div className='item_todo__plan'>{item.plan}</div>)
                            : (<input
                                type='text'
                                value={item.plan}
                                onChange={(e) => handleActive(e, id)}
                                onKeyUp={(e) => handleSave(e, id)}
                            />)
                    }

                </div>

                <div className='item_todo__change'>
                    <div onClick={() => handleEdit(id)}>
                        {
                            !item.change ? (
                                <i class="fa-solid fa-pen mr-3"></i>
                            ) : (<i class="fa-solid fa-circle-check mr-3"></i>)
                        }

                    </div>
                    <div onClick={() => handleDelete(id)}>
                        <i class="fa-solid fa-circle-minus"></i>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ListItem