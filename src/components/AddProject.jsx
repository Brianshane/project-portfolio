import { useState } from "react";

function AddProjectForm({ onAddProject }) {
  const [title ,setTitle]= useState('')
  const[description, setDescription]= useState('')
const handleSubmit = (e)=> {
    e.preventDefault();
    if(!title.trim() || !description.trim()) return
    onAddProject({title , description});
    setTitle('');
    setDescription('');
};

  return (
   <div className="border border-gray-300 rounded -lg p-4 my-4"> <h2 className ="text xl font-bold mb-4" >add project</h2>
   
   <form onSubmit={handleSubmit}>
    <label className ="block front-medium mb-1">
        Title:
    </label>
    <input 
    type="text" 
    value={title} 
    onChange={(e)=>setTitle(e.target.value)}
    claasName="w-full border borde-gray-300 rounded -md p-2 mt-1 focus:outline none focus:ring-2 focus: ring-blue-500"
    placeholder="project Title"
    />
    <div className="=mb-3">
        <label className="block font-medium mb-1">
            description
        </label>
        <textarea
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        row={4}
        className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="project Description"
        />
    </div>
<button
type="submit"
className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
>
    Add
    </button>


   </form>
   
   
   
   </div>
       
  );
}

export default AddProjectForm;