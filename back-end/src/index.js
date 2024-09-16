// panggil function express
const express = require('express')

// membuat app dari express
const app = express();

// membuat variable env
const dotenv = require('dotenv');

// melakukan configurasi dotenv
dotenv.config()

// melakukan import class Prisma Client
const { PrismaClient } = require('@prisma/client')



// membuat objek prisma dari class PrismaClient
const prisma = new PrismaClient();

const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const saltRounds = 10;

app.use(bodyParser.json());

// membuat variable port yang diambil dari .env
const PORT = process.env.PORT;

// testing url api di webrowser
app.get("/api", (req, res) => {
    res.send('ulala..');
});

// testing mengambil seluruh users
app.get("/users", async (req, res)=> {
    const users = await prisma.users.findMany();
    res.send(users);
})

app.post('/users', async(req, res)=> {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    try {
    const newUser = await prisma.users.create({
        data: {
        name,
        email,
        password: hashedPassword,
        role: role || 'user', 
        created_at: new Date(),
        updated_at: new Date(),
        },
    });

    res.status(201).json('created data user successfully');
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
})

// membuat app agar membaca / mendengarkan port kita
app.listen(PORT, ()=> {
    console.log('API running on', + PORT);
});

