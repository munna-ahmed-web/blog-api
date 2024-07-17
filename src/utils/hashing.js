import bcrypt from "bcryptjs";

export const generateHash = async (payload) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(payload, salt);
  return hash;
};

export const hashMatched = async (raw, hash) => {
  const result = await bcrypt.compare(raw, hash);
  return result;
};
