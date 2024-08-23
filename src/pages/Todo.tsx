import { useGetTodosQuery } from "@/redux/features/api/api";
import { addTodo, deleteTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hooks";
import { FormEvent } from "react";

const Todo = () => {
  const dispatch = useAppDispatch();
  //const { todos } = useAppSelector((state) => state.todos);

  const { isLoading ,data : todos}=useGetTodosQuery(undefined);

  if(isLoading){
    return <p>Loading....</p>
  }

//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(res => res.json())
//     .then(data => console.log(data))
//   },[])



  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = (
      e.currentTarget.elements.namedItem("title") as HTMLInputElement
    ).value;
    const description = (
      e.currentTarget.elements.namedItem("description") as HTMLInputElement
    ).value;
    const id = Math.random().toString(36).substring(2, 7);
    const data = {
      id,
      title,
      description,
    };
    dispatch(addTodo(data));
  };


  const handleDelete=(id : string)=>{
    dispatch(deleteTodo(id));
  }

  return (
    <div>
      <div className="p-10">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-4">
            <label htmlFor="">Title</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5  "
              type="text"
              name="title"
            />
          </div>
          <div className="flex items-center gap-4 mt-8">
            <label htmlFor="">Description</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5  "
              type="text"
              name="description"
            />
          </div>
          <button
            className="px-4 text-white bg-blue-300 rounded-xl py-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        {todos?.map((todo:any) => (
          <div key={todo.id} className="flex gap-4 bg-blue-300 p-4 m-4">
            <p>{todo.title}</p>
            <p>{todo.description}</p>
            <button onClick={()=>handleDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
