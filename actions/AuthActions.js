"use server";

import { signIn } from "../auth";

export const authenticate = async (prevState, formData) => {
    console.log("formData", formData);
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password });
    } catch (err) {
        if (err.message.includes("CredentialsSignin")) {
            return "Wrong Credentials";
        }
        throw err;
    }
};
