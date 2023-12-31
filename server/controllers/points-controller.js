const knex = require('knex')(require('../knexfile'));

const validatePhoneNumber = (data) => {
    const requiredFields = [
        'phone'
    ];

    for (const field of requiredFields) {
        if (!data[field]) {
            return {
                valid: false,
                message: `${field} is required.`,
            };
        }
    }
    return {
        valid: true,
    };
};

const findOne = async (req, res) => {
    try {
        const userFound = await knex("points").where({ phone: req.params.points });

        if (!userFound || userFound.length === 0) {
            return res.status(404).json({
                message: `User with phone number ${req.params.points} not found`
            });
        }

        const userData = userFound[0];
        res.json(userData);
    } catch (error) {
        res.status(500).json({
            message: `Unable to retrieve user data for user with phone number ${req.params.points}`,
        });
    }
};

const addUser = async (req, res) => {
    const { phone } = req.body;

    try {
        const existingUser = await knex("points").where({ phone });

        if (existingUser && existingUser.length > 0) {
            return res.status(400).json({
                message: `User with phone number ${phone} already exists`,
            });
        }

        const newUser = {
            phone,
            points: 0,
        };

        await knex("points").insert(newUser);

        return res.status(201).json({
            message: `New user added with phone number ${phone}`,
            user: newUser,
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: `Unable to add new user with phone number ${phone}`,
        });
    }
};

module.exports = {
    findOne,
    addUser,
};
