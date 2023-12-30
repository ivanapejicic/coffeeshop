exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('points').del();
    return knex('points').insert([
        {
            phone: "3057481891",
            points: 30,
        },
        {
            phone: "95542132323",
            points: 0,
        },
        {
            phone: "3051231231",
            points: 50,
        },
        {
            phone: "3051231234",
            points: 10,
        },
        {
            phone: "7861231231",
            points: 0,
        },
    ]);
};