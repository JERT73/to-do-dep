import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
    
        if (!token){
            return res.status(500).json({error: "Unauthorized access - no token provide"});
        }
    
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
        if (!decoded){
            return res.status(500).json({error: "Unauthorized access - invalid token"});
        }
    
        const user = await User.findById(decoded.userId).select("-password");
        // console.log("In protect router", user);

        if (!user){
            return res.status(404).json({error: "user not found"});
        }

        req.user = user;
        next();
    } catch (error){
        console.log("Error while protect Route middleware", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export default protectRoute;