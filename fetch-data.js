
     async function fetchUserData(params) {
         const apiUrl = 'https://jsonplaceholder.typicode.com/users'
         const dataContainer = document.getElementById("api-data")

        try {
            let response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const users = await response.json();
            dataContainer.innerHTML = ''
            const userList = document.createElement("ul")
            users.forEach(element => {
                let user = document.createElement("li")
                user.innerHTML = element.name;
                userList.appendChild(user)
            });
            dataContainer.append(userList)
            
        } catch (error) {
            dataContainer.innerHTML = ''
            dataContainer.textContent = "Failed to load user data."
        }
}
    
document.addEventListener("DOMContentLoaded", function () {
    fetchUserData()
})