
const users = [

    user1 = {
        name: 'George',
        age: 40,
        email: 'exmaple@gmail.com',
        income: 50000 + ' ' + 'USD',
        location: 'Chile'
    },
    user2 = {
        name: 'Fer',
        age: 30,
        email: 'exmaple@gmail.com',
        income: 200000 + ' ' + 'USD',
        location: 'Chile'
    },
    user3 = {
        name: 'Daniel',
        age: 25,
        email: 'exmaple@gmail.com',
        income: 100000 + ' ' + 'USD',
        location: 'Chile'
    }
]


const div = document.querySelector('#user')

users.map((user) => {
    
    div.innerHTML += `
        <p class="user"> 
            Name: ${user.name}<br>
            Age: ${user.age}<br>
            Email: ${user.email}<br>
            Income: ${user.income}<br>
            Location: ${user.location}
        </p>
    `
})

    















