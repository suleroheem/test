async function iterateWithAsyncAwait(array) {
    for (const value of array) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000)); 
    }
  }
  
  const values = [1, 2, 3, 4, 5];
  
  iterateWithAsyncAwait(values);



  async function awaitCall() {
    try {
    
      const response = await fetch('https://api.example.com/data');
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      
      
      const data = await response.json();
      
      
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  
  awaitCall();




  async function awaitCall() {
    try {
      // Simulate fetching data from an API (replace with actual API call)
      const response = await fetch('https://api.example.com/data');
      
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch data. Please try again later.');
      }
      
      // Parse the JSON response
      const data = await response.json();
      
      // Log the data
      console.log(data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  // Example usage:
  awaitCall();
  
  
  