// DOMContentLoaded to ensure this doesnt do anything till page is 100% loaded
document.addEventListener("DOMContentLoaded", function () {
    // make my div a variable
    const userList = document.getElementById('userList');
    //fetch api
    fetch('http://localhost:3000/users')
        // turn response to json
        .then(response => response.json())
        // if no users display 'no user text'
        .then(users => {
            if (users.length === 0) {
                userList.innerHTML = '<h3>No Users Available!</h3>';
            } else {
                // if there is a user do this
                // make a ul a variable
                const ul = document.createElement('ul');
                // for each user, make the li text content their email
                users.forEach(user => {
                    const li = document.createElement('li');
                    li.textContent = `${user.email}`;
                    // make the li a child of the ul
                    ul.appendChild(li);
                });
                // make all above a child of the original div we are wanting this to display at in our html
                userList.appendChild(ul);
            }
        })
        // display errors in console
        .catch(e => {
            console.log(`error fetching: ${e}`)
        })
})
