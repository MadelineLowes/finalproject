const { UserModel } = require('../models');

const createUsers = async () => { 
    const users = [
        { 
            email: 'pam@test.com',
            password: 'password'
        },
        { 
            email: 'tim@test.com',
            password: 'password'
        },
        { 
            email: 'elliot@test.com',
            password: 'password'
        },
        { 
            email: 'cameron@test.com',
            password: 'password'
        },
        { 
            email: 'frankie@test.com',
            password: 'password'
        }
    ];
    await UserModel.insertMany(users);
}

const removeAllUsers = async () => {
    await UserModel.remove({});
}

module.exports = { createUsers, removeAllUsers };