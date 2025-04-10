const handleLogout = (req, res) => {
    res.clearCookie("refreshToken", { httpOnly: true, secure: true, sameSite: "Strict"} );
    res.json({ "message" : "Logout successfully"});
};

module.exports = handleLogout;