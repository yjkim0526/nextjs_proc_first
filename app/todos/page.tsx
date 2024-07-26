'use client';

import { useMutation, useQuery } from "react-query";
import { createTodo, getTodos } from "../actions/todo-actions";
import { useState } from "react";

export default function TodosPage(){

    const [todoInput, setTodoInput] = useState("");

    const todosQuery = useQuery({
        queryKey: ["todos"],
        queryFn: () => getTodos(),
    });

    const createTodoMutation = useMutation({
        mutationFn: async() => {
            if (todoInput === "") throw new Error("TODO를 입력하세요");
            return createTodo(todoInput);
        },
        onSuccess: (TODOS) => {
            console.log("SUCCESS");
            console.log(TODOS);
        }
    })

    console.log("todosQuery");
    //console.log(todosQuery.data);

    return (<div>
        <h1>Todos</h1>

        {/* TODO를 생성하는 부분 */}

        <input type="text" placeholder="Enter TODO" value={todoInput} onChange={(e) => setTodoInput(e.target.value)}></input>
        <button onClick={}>할일 생성</button>
        {/* TODO를 보여주는 부분 */ }
        {todosQuery.isLoading && <p>Loading...</p>}
        {todosQuery.data && todosQuery.data.map((todo, index) => {<p key={index}>{todo}</p>})}

    </div>)
}
