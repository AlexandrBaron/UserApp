const userRepository = require('../repositories/userRepository');

exports.getUsers = () => {
    return userRepository.getAll();
};

exports.createUser = (data) => {
    return userRepository.create(data);
}