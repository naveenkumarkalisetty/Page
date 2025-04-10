const path = require('path');
const jwt = require('jsonwebtoken');
const refreshTokenValidation = async (req, res) => {
    try {
        const cookies = req.cookies;
        if (!cookies?.refreshToken) {
            return res.sendFile(path.join(__dirname, 'login.html'));
        }

        const refreshToken = cookies.refreshToken;
        console.log(refreshToken);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.sendFile(path.join(__dirname, 'login.html'));
            return res.sendFile(path.join(__dirname, 'dashboard.html'));
        });

    } catch(err) {
        console.log(err.message);
        res.sendFile(path.join(__dirname, 'login.html'));
    }
}

module.exports = refreshTokenValidation;