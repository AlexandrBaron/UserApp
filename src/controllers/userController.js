const userService = require('../services/userService');

exports.getAllUsers = async (request, response) => {
  const users = await userService.getUsers();
  response.json(users);
};

exports.createUser = async (request, response) => {
  const { name, email } = request.body;
  const newUser = await userService.createUser({ name, email });
  response.status(201).json(newUser);
};
