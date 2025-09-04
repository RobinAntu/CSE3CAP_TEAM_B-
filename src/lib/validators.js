export const isEmail = (s = "") => /^\S+@\S+\.\S+$/.test(s);
export const isPasswordOk = (s = "") => s.length >= 6 && s.length <= 64;

