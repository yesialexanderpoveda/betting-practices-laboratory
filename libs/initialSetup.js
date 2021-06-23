const Role = require('../models/roles');

module.exports = async () => {
    try {
        const count = await Role.estimatedDocumentCount()

        if (count > 0) return;

        const values = await Promise.all(
            [
                new Role({ name: 'user' }).save()

            ]);
        console.log(values);
    } catch (error) {
        console.log(error);
    }

};