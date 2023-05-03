function fetchDataFromServer(callback) {
    // Some time-consuming code to fetch data from a remote server...
    const data = { /* ... */ };
  
    // Once the data has been fetched, call the callback function
    callback(data);
  }
  function displayData(data) {
    console.log("Data received:", data);
  }
  
  fetchDataFromServer(displayData);
  /**
   * callback functions in javascript provide a way to work with the language's asynchronous nature and 
   * handle the results of asynchronous operations
   */