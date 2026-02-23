import passport from "passport";
import local from "passport-local";
import jwt from "passport-jwt";
import { userModel } from "../models/user.model.js";
import { createHash, isValidPassword } from "../utils/bcrypt.js";

const LocalStrategy = local.Strategy;
const JwtStrategy = jwt.Strategy;
const ExtractJwt = jwt.ExtractJwt;

const PRIVATE_KEY = "coderSecret";

export const initializePassport = () => {

    passport.use("register",
        new LocalStrategy(
            { passReqToCallback: true, usernameField: "email" },
            async (req, username, password, done) => {
                try {
                    const { first_name, last_name, age } = req.body;

                    const exists = await userModel.findOne({ email: username });
                    if (exists) return done(null, false);

                    const user = {
                        first_name,
                        last_name,
                        age,
                        email: username,
                        password: createHash(password)
                    };

                    const result = await userModel.create(user);
                    return done(null, result);

                } catch (error) {
                    return done(error);
                }
            }
        )
    );

    passport.use("login",
        new LocalStrategy(
            { usernameField: "email" },
            async (username, password, done) => {
                try {
                    const user = await userModel.findOne({ email: username });
                    if (!user) return done(null, false);

                    if (!isValidPassword(user, password))
                        return done(null, false);

                    return done(null, user);

                } catch (error) {
                    return done(error);
                }
            }
        )
    );

    passport.use("jwt",
        new JwtStrategy(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: PRIVATE_KEY
            },
            async (jwt_payload, done) => {
                try {
                    return done(null, jwt_payload);
                } catch (error) {
                    return done(error);
                }
            }
        )
    );
};