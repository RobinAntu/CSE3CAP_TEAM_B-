export const validateName = (name: string) => /^.{2,60}$/.test(name);
export const validatePhone = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const validatePassword = (pw: string) => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(pw);
