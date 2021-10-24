const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())

const port = 5000;

app.get('/', (req, res) =>{
    res.send('Hello from my second node wow i am learning node ');
});

const users = [
    {id:0, name: 'shabna', email: 'shabana@gmail.com', phone: '0174898392'},
    {id:1, name: 'shabnor', email: 'shabana@gmail.com', phone: '0174898392'},
    {id:2, name: 'shrabonti', email: 'shabana@gmail.com', phone: '0174898392'},
    {id:3, name: 'suchorita', email: 'shabana@gmail.com', phone: '0174898392'},
    {id:4, name: 'soniya', email: 'shabana@gmail.com', phone: '0174898392'},
    {id:5, name: 'sabrina', email: 'shabana@gmail.com', phone: '0174898392'}
]

app.get('/users', (req, res) =>{
   const search = req.query.search;
   if(search){
    const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
    res.send(searchResult);
   }else{
    res.send(users)
   }
   
});

// app.METHOD
app.post('/users',(req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body)
    res.send(JSON.stringify(newUser))
})

//dynamic api
app.get('/users/:id', (req, res) =>{
    const index = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits', (req, res) =>{
    res.send(['mango', 'oranges', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) =>{
    res.send('Yummy Yummy tok marka fazli');
});

app.listen(port, () =>{
    console.log('listing to port', port);
});