import { useState, useEffect } from "react";

interface ITodo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

interface Params {
  mouseOnDiv: boolean;
}

const fetchIt = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data: ITodo[] = await res.json();

    return data;
  } catch (e) {
    console.log("Error", e);
  }
};

const useFetchTodos = ({ mouseOnDiv }: Params) => {
  const [todos, setTodos] = useState<ITodo[]>();

  useEffect(() => {
    const run = async () => {
      const todosRes = await fetchIt();
      setTodos((oldState) => {
        if (todosRes !== undefined && oldState !== undefined) {
          return [...oldState, ...todosRes];
        }

        return oldState;
      });
    };

    if (mouseOnDiv === true) {
      run();
    }
  }, [mouseOnDiv]); // dependency array

  return { todos };
};

export default useFetchTodos;
