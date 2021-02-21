const connection = require('./connection');

const updateUser = async (id, userObj) => {
  await connection.execute(
    "UPDATE users_crud.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?",
    [userObj.first_name, userObj.last_name, userObj.email, userObj.password, id]
  );
};

module.exports = {
  updateUser,
}