const connection = require('./connection');


const deleteUser = async (id) => {
  await connection.execute('DELETE FROM users_crud.users WHERE id = ?', [id]);
}

module.exports = {
  deleteUser,
}