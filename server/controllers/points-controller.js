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
        const userFound = await knex("points").where({ phone: req.params.phone });

        if (!userFound || userFound.length === 0) {
            return res.status(404).json({
                message: `User with phone number ${req.params.phone} not found`
            });
        }

        const userData = userFound[0];
        res.json(userData);
    } catch (error) {
        res.status(500).json({
            message: `Unable to retrieve user data for user with phone number ${req.params.phone}`,
        });
    }
};

module.exports = {
    findOne
};