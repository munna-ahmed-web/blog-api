import User from "./model/User.js";

const makeUser = () => {
  const user = new User({
    name: "Munna Ahmed",
    email: "dsfsdfsdf@gmail.com",
    password: "sdfiuyhdfdfffgfgdfuidf874456484",
  });

  user.save();
};

export default makeUser;
