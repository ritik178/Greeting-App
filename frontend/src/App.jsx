import { useState } from "react";


function App() {

  // State to store the user's name
  const [name, setName] = useState('');

  // State to store the greeting message
  const [message, setMessage] = useState('');

  // State to store the error Message
  const [errorMessage, setErrorMessage] = useState('');
  
  // Function to fetch the greeting message from the backend
  const fetchGreeting = async() => {
    // If the message or errorMessage is already set then reset it
    setErrorMessage('');
    setMessage('');
    // Check if the name is empty or not
    if(!name.trim()){
      setErrorMessage('Name is required.');
      return;
    }
    try{
        // Fetch the greeting message from the backend API
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/greet?name=${name}`);
        const data = await response.json();
        // Set the greeting message in the state
        if(data.message){
          setMessage(data.message);
        }
        if(data.error){
          setErrorMessage(data.error);
        }
    }catch(error){
      // Handle any errors that occur during the fetch
      setErrorMessage('Error fetching greeting.');
      console.log("error:",error);
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      {/* Display the greeting message if it exists */}
      {message && <p className="mt-4 text-lg text-green-600">{message}</p>}
      {errorMessage && <p className="mt-4 text-lg text-red-600">{errorMessage}</p>}
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
