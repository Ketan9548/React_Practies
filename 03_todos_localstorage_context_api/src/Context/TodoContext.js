import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"go market",
            check : false
        }
    ],
    addTodo: (todo) => {}
});


export const useTodo = () => {
    return useContext(TodoContext);
}


export const Todoprovider = TodoContext.Provider;