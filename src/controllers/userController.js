const User = require("../models/User");
const mongoose = require("mongoose");

exports.createUser = async function (req, res) {
    try {
        const user = await User.create(req.body);
        console.log(user)
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.getAllUsers = async function (req, res) {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

exports.getOneUser = async function (req, res) {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid user ID" });
    }

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.updateUser = async function (req, res) {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: "Invalid User ID" });
    }


    try {
        const user = await User.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
            context: 'query',
        });

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.deleteUser = async function(req, res) {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "Invalid user ID"});
    }

    try {
        const user = await User.findByIdAndDelete(id);

        if(!user) {
           return res.status(400).json({error: "User not found"});
        }

        await user.save();
        res.json({message: "User successfully deleted"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}