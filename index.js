// Add your code here
// create a function submitData
// set arguments as user's name and user's email
function submitData(userName, userEmail) {
    let formData = {
        name: userName,
        email: userEmail
    };// set a fetch request to the server
    // set headers for 'Content-Type' and 'Accept'
    // set body with the formData for the name and email passed as arguments to submitData
    // stringify the formData

    let userInfoObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body:JSON.stringify(formData)
        //use then to access response and use its response.json() method to parse the contents of the body
        // use a second then to access the newly converted object
        // from this object,find the new id and append this to the DOM 
    };
    return fetch("http://localhost:3000/users", userInfoObj)
      .then(response => response.json())
      .then(data => {
        document.body.innerHTML += `
        <p>User ID:${data.id}</p>`;
      })
      .catch(error => {
        document.body.innerHTML += `
        <p>ERROR:${error.message}</p>`;
      });
}
