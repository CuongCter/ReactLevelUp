import React from 'react'
import { useState } from 'react'
import AddItem from '../components/addItem/AddItem'
import ListItem from '../components/listItem/ListItem'
import './Home.scss'
const arrTodo = [
    {
        plan: "Study",
        completed: false,
    },
    {
        plan: "Play football",
        completed: false,
    }
]
const Home = () => {
    const [todo, setTodo] = useState({
        plan: "",
        completed: false,
    })
    const [listTodo, setListTodo] = useState([])

    const handleAdd = (e) => {
        if (e.keyCode === 13) {
            const arr = [...listTodo];
            arr.push(todo);
            setListTodo(arr);
            setTodo({
                plan: "",
                completed: false,
            })
        }
    }
    const handleDelete = (idx) => {
        const arrUpdate = [...listTodo];
        arrUpdate.splice(idx, 1);
        setListTodo(arrUpdate);
    }
    const handleChange = (id) => {
        const arrUpdate = [...listTodo];
        arrUpdate.length > 0 && arrUpdate.map((item, idx) => {
          if (idx === id) {
            return item.completed =  !item.completed
          }
          return item
        })
        setListTodo(arrUpdate)
      }
    return (
        <div className='main'>
            <AddItem todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <ul>
                {listTodo && listTodo.map((item, index) => (
                    <li key={index} >
                        <ListItem
                            id={index}
                            item={item}
                            handleDelete  = {handleDelete}
                            handleChange = {handleChange}
                            completed={item.completed}/>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default Home