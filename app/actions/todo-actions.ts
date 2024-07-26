'use server';


var TODOS: string[] = ['Go to market'];

export const getTodos = async () => {
    return TODOS;
}

export const createTodo = async (data: string) => {
    //sleep 1
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // save to database or API
    TODOS.push(data)
    return TODOS;
}