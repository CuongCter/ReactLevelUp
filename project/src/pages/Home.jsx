import React from 'react'
import { useState } from 'react'
import AddItem from '../components/addItem/AddItem'
import ListItem from '../components/listItem/ListItem'
import './Home.scss'

const Home = () => {
    const [todo, setTodo] = useState({
        plan: "",
        completed: false,
        change: false
    })
    const local = () => {

    }
    const [listTodo, setListTodo] = useState([])
    //Add
    const handleAdd = (e) => {
        if (e.keyCode === 13) {
            if (todo.plan === "") {
                alert("You have not entered the plan")
            }
            else {
                const arr = [...listTodo];
                arr.push(todo);
                setListTodo(arr);
                setTodo({
                    plan: "",
                    completed: false,
                })
            }

        }
    }
    //Delete
    const handleDelete = (idx) => {
        const arrUpdate = [...listTodo];
        arrUpdate.splice(idx, 1);
        setListTodo(arrUpdate);
    }
    //Complete
    const handleChange = (id) => {
        const arrUpdate = [...listTodo];
        arrUpdate.length > 0 && arrUpdate.map((item, idx) => {
            if (idx === id) {
                return item.completed = !item.completed
            }
            return item
        })
        setListTodo(arrUpdate)
    }
    //Edit
    const handleEdit = (id) => {
        const arr = [...listTodo]
        arr && arr.map((item, index) => {
            if (index === id) return (item.change = !item.change)
            return item
        })
        setListTodo(arr)
    }
    const handleActive = (e, id) => {
        const arr = [...listTodo]
        arr && arr.map((item, index) => {
            if (index === id) {
                return (item.plan = e.target.value)
            }
            return item
        })

        setListTodo(arr);
    }
    const handleSave = (e, id) => {
        const arr = [...listTodo]
        arr && arr.map((item, index) => {
            if (index === id && e.keyCode === 13)
                return item.change = !item.change
            return item
        })

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
                            handleDelete={handleDelete}
                            handleChange={handleChange}
                            completed={item.completed}
                            handleEdit={handleEdit}
                            handleActive={handleActive}
                            handleSave={handleSave}
                        />

                    </li>
                ))}
            </ul>
        </div >
    )
}

export default Home