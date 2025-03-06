import { useState } from "react";


function App() {

  // State to store the user's name
  const [name, setName] = useState('');

  // State to store the greeting message
  const [message, setMessage] = useState('');
  
  // Function to fetch the greeting message from the backend
  const fetchGreeting = async() => {
    // Check if the name is empty or not
    if(!name.trim()){
      setMessage('Name is required.');
      return;
    }
    try{
        // Fetch the greeting message from the backend API
        const response = await fetch(`http://localhost:5000/api/greet?name=${name}`);
        const data = await response.json();
        // Set the greeting message in the state
        setMessage(data.message || data.error);
    }catch(error){
      // Handle any errors that occur during the fetch
      setMessage('Error fetching greeting.');
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Display the greeting message if it exists */}
      {message && <p className="mt-4 text-lg text-green-600">{message}</p>}
      <h1 className="text-2xl font-bold mb-4">Greeting App</h1>
      {/* Input field for the user to enter their name */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-4 rounded"
        />

      {/* Button to fetch the greeting message */}
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
