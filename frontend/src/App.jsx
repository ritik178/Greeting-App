import { useState } from "react";


function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  
  const fetchGreeting = async() => {
    if(!name.trim()){
      setMessage('Name is required.');
      return;
    }
    try{
        const response = await fetch(`http://localhost:5000/api/greet?name=${name}`);
        const data = await response.json();
        setMessage(data.message || data.error);
    }catch(error){
      setMessage('Error fetching greeting.');
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {message && <p className="mt-4 text-lg text-green-600">{message}</p>}
      <h1 className="text-2xl font-bold mb-4">Greeting App</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-4 rounded"
        />
      <button
        onClick={fetchGreeting}
        className="bg-blue-500 text-white px-4 py-2 rounded "
      >
        Get Greeting
      </button>
      
    </div>
  )

}

export default App;
