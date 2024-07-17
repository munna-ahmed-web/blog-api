import { userExist, createUser } from "../user/index.js";
import { generateHash } from "../../utils/hashing.js";
const register = async ({ name, email, password }) => {
  const hasUser = await userExist(email);
  if (hasUser) {
    const error = new Error("User already exist");
    error.status = 400;
    throw error;
  }
  const Hashedpass = await generateHash(password);
  const user = await createUser({ name, email, password: Hashedpass });
};

export default register;
