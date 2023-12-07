

const users = document.querySelector('#users-display');


const getData = async () => {
    
    const res = await fetch('users.json');
    const data = await res.json();
    console.log(data);
    return data;
}
getData();

const displayUsers = async () => {

    const usersData = await getData();
    
    let dataDisplay = usersData.map((user) => {

        
        const {first_name, last_name, email, country, website, id} = user;

        return `

            <div class='container'>
            <p class='user-id p'>${id}</p>
            <p class='user-first-name p'>${first_name}</p>
            <p class='user-last-name p'>${last_name}</p>
            <p class='user-email p'>${email}</p>
            <p class='user-country p'>${country}</p>
            <p class='user-website p'>${website}</p>
            </div>
        `;
    });

    users.innerHTML = dataDisplay.join('');
}
displayUsers();







