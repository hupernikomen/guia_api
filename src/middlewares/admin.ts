import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken';

interface Payload {
  email: string
}


// Middleware que verifica se usuario é autenticado e libera rota

export function Admin(
  req: Request,
  res: Response,
  next: NextFunction
) {

  // Receber o Token
  const authToken = req.headers.authorization

  if (!authToken) {
    return res.status(401).end()
  }

  const [, token] = authToken.split(" ")

  try {

    const { email } = verify(
      token,
      process.env.JWT_SECRET
    ) as Payload

    if (email) {
      
      return next()
    }



  } catch (error) {
    return res.status(401).end()
  }


}