import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;

    users.push({...user, id: uuid()});
    
    res.send(`User [${user.username}] added to the database.`);
};

export const getUser = (req, res) => {
    res.send(req.params.id)
};

export const deleteUser = (req, res) => { 
    const { id } = req.params
    
    users = users.filter(user => user.id !== id)
    // users = users.filter((user) => user.id !== req.params.id);

    // console.log(`user with id ${req.params.id} has been deleted`);
    res.send(`user with id ${id} has been deleted`);
};

export const updateUser = (req, res) => {
    const { id } = req.params
    
    const user = users.find((user) => user.id === id);
    // const user = users.find((user) => user.id === req.params.id);
    
    
    const { username, age } = req.body
    if (username) {
        user.username = username
    }
    if (age) user.age = age
    // user.username = req.body.username;
    // user.age = req.body.age;

    
    res.send(`username has been updated to ${username}.age has been updated to ${age}`)
    // console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
};