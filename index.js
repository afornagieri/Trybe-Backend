const express = require('express');
const bodyParser = require('body-parser');

const { createUser } = require('./model/createUser');
const { getAllUsers } = require('./model/getAllUsers');
const { updateUser } = require('./model/updateUser');
const { deleteUser } = require('./model/deleteUser');

const app = express();

app.use(bodyParser.json());

app.post('/user', async (req, res) => {

  const newUser = {
    first_name,
    last_name,
    email,
    password
  } = req.body;

  if(!newUser) {
    res.status(200).json({ message: 'Dados inválidos' });
  }

  await createUser(newUser);

  res.status(201).json({ message: 'Usuário criado !' });
});

app.get('/user', async (_req, res) => {
  res.status(200).json( await getAllUsers() );
})

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const foundUser = await getAllUsers();
  res.status(200).json( foundUser.find(user => user.id === Number(id)) );
});

app.put('/user/:id', async (req, res) => {
  const { id } = req.params;

  const newUser = {
    first_name,
    last_name,
    email,
    password
  } = req.body;

  if(!newUser) {
    res.status(200).json({ message: 'Dados inválidos' });
  }

  await updateUser(Number(id), newUser)
  res.status(200).json({ message: 'Usuário atualizado !'});
});


app.delete('/user/:id', async (req, res) => {
  const { id } = req.params;

  await deleteUser(Number(id));

  res.status(200).json({ message: "Usuario deletado com sucesso !" });
});

app.listen(3000, () => {
  console.log('ouvindo na porta 3000...')
})