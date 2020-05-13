import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

//defines the structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const todo = res.data as Todo;

  const ID = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(ID, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    the todo with id: ${id}
    has a title of: ${title}
    it is completed ${completed}
    `);
};
