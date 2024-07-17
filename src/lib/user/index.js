import User from "../../model/User.js";

export const findUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user ? user : false;
};

export const userExist = async (email) => {
  const user = await findUserByEmail(email);
  return user ? true : false;
};

export const createUser = async ({ name, email, password }) => {
  const user = new User({ name, email, password });
  await user.save();
  return { ...user._doc, id: user.id };
};
