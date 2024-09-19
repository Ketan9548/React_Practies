import React, { useState } from 'react'
import { useTodo } from '../Context'

const TodoForm = () => {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todo) {
            return
        }
        addTodo({ todo, check: false })
        setTodo("")
    }

    return (
        <>
            <form onSubmit={add} className='flex'>
                <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" placeholder='write... todo...' className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5' />
                <button type='submit' className='rounded-r-lg px-3 py-1 bg-green-500 text-white shrink-0'>Add</button>
            </form>
        </>
    )
}

export default TodoForm