import React from 'react'
import './AddItem.scss'
const AddItem = ({ todo, setTodo, handleAdd }) => {
    return (
        <>

            <div className='container'>
                <h1>todos</h1>
                <div className='container_in'>
                    <input type="text"
                        placeholder='What do you need to do?'
                        value={todo.plan}
                        onChange={(e) => {
                            setTodo(prev => ({
                                ...prev,
                                plan: e.target.value
                            }))
                        }}
                        onKeyUp={e => handleAdd(e)} />
                </div>
            </div>
        </>
    )
}

export default AddItem