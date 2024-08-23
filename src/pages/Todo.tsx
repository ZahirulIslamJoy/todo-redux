import { addTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hooks";
import { FormEvent } from "react";

const Todo = () => {
    const dispatch = useAppDispatch();


    const handleSubmit=(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const title = (e.currentTarget.elements.namedItem('title') as HTMLInputElement).value;
        const description = (e.currentTarget.elements.namedItem('description') as HTMLInputElement).value;
        const data = {
            title , description
        }
        dispatch(addTodo(data))
       
    }

    return (
        <div className="p-10">
            <form onSubmit={handleSubmit}>
                <div className="flex items-center gap-4">
                <label  htmlFor="">Title</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5  " type="text" name="title" />
                </div>
                <div className="flex items-center gap-4 mt-8">
                <label htmlFor="">Description</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5  " type="text" name="description" />
                </div>
                <button className="px-4 text-white bg-blue-300 rounded-xl py-2" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Todo;