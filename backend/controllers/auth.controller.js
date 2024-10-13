import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookies from '../utils/generateToken.js';

export const signup = async (req, res) => {
    try {
        const {fullname, username, password, confirmPassword, gender} = req.body;

        // check if password and its confirmation are same
        if (password !== confirmPassword){
            return res.status(400).json({error:"Passwords don't match"});
        }
        // check if user with given username already exists
        const user = await User.findOne({username});
        // if user already exists
        if (user){
            return res.status(400).json({error: "Username already in use"});
        }

        // generate hashed password
        const salt = await bcrypt.genSalt(10);
        const hasedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullname,
            username,
            password: hasedPassword,
            profilePic: gender === 'male'? boyProfilePic : girlProfilePic,
            gender, 
        })

        
        if (newUser){
            generateTokenAndSetCookies(newUser._id, res)
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json({error: "Invalid user data"});
        }

    } catch (error){
        console.log("Error in signup controller", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user.password || "");
        if (!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid username or password"});
        }
        generateTokenAndSetCookies(user._id, res);

        res.status(201).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic
        })

    } catch (error){
        console.log("Error in login controller", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt","",{maxAge: 0}); // deleting a cookie
        res.status(200).json({message: "logged out succesfully"});
    } catch (error){
        console.log("Error in logout controller", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}