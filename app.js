import express from "express";
import "./dbConnect.js";
import UserModel from "./model/User.js";

const app = express();
const port = 3000;

app.get('/api/users', async (req, res) => {
    try {
        return res.status(200).json(
            await UserModel.find({}, '-__v')
        );
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Server Error!' });
    }
});

app.get('/api/users/:userid', async (req, res) => {
    try {
        const { userid } = req.params;
        const user = await UserModel.findById(userid, '-__v');

        if (!user)
            return res.status(404).json({ msg: 'User Not Found!' });

        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Server Error!' });
    }
});

app.listen(port, () =>
    console.log('Server running at', port));