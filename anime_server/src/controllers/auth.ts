import { Request, Response } from "express";
import { registerNewUser, loginUser, getUser } from "../services/auth";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interface/req-ext";

const getItem = async (req: RequestExt, res: Response) => {
  try {
    const user =await getUser(`${req.user?.id}`)
    res.send({
      msg:"user validado",
      user: user
    })
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
}

const registerCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);
  if(responseUser){
    res.json({
      "status":"success",
      "message":"User register successfully"
    });
  }
  
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });

  if (responseUser === "PASSWORD_INCORRECT") {
    res.status(403);
    res.send(responseUser);
  } else {
    res.send(responseUser);
  }
};

export { loginCtrl, registerCtrl, getItem };
