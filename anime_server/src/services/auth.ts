import { Auth } from "../interface/auth.interface"
import { User } from "../interface/user.interface";
import UserModel from "../model/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name, number, hobbies, img }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "ALREADY_USER";
  const passHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
    number,
    hobbies,
    img
  });
  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "NOT_FOUND_USER";

  const passwordHash = checkIs.password; //TODO el encriptado!
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) return "PASSWORD_INCORRECT";

  const token = generateToken(checkIs.email);
  const data = {
    token,
    user: checkIs,
  };
  return data;
};

const getUser= async (email: string) => {
  const responseItem = await UserModel.findOne({ email: email });
  return responseItem;
};

export { registerNewUser, loginUser, getUser };
