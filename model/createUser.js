const connection = require('./connection');

const createUser = async (user) => {
  await connection.execute('INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES(?, ? , ?, ?)',
  [ user.first_name, user.last_name, user.email, user.password ]);
};

module.exports = {
  createUser,
};
