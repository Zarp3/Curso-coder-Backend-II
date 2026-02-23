import jwt from "jsonwebtoken";

const PRIVATE_KEY = "coderSecret";

export const generateToken = user => {
    return jwt.sign(
        {
            id: user._id,
            email: user.email,
            role: user.role
        },
        PRIVATE_KEY,
        { expiresIn: "1h" }
    );
};