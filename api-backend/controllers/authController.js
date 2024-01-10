const jwt = require("jsonwebtoken");


const userLogin = (req, res) => {
    let { email, password } = req.body;

    let existingUser = {
        id: 1,
        email: 'juborajnaofel@mern-attendence-system.test',
        password: 'password',
    };
    if (!existingUser || existingUser.password != password) {
        const error = Error('Wrong details please check at once');
        return next(error);
    }

    let token = jwt.sign(
        { userId: existingUser.id, email: existingUser.email },
        'hello-world-secret',
        { expiresIn: '1h' }
    );

    res.status(200).json({
        success: true,
        data: {
            userId: existingUser.id,
            email: existingUser.email,
            token: token,
        },
    });
};

const sample = (req, res) => {
    res.status(200).json({
        success: true,
        message: 'done!'
    });
};

module.exports = {
    userLogin,
    sample
};
