import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'

import path from 'path'

import { router } from './routes';

const app = express();
app.use(cors())
app.use(express.json())



app.use(router)

// Para pegar o link da imagem (localhost:3333/files/produtos/nomedaimagem) 
app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    
    //Se cair em um erro...(mostrar mensagem amigavel)

    if(err instanceof Error){
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: "error",
        message: 'Internal server error.'
    })
})

app.listen(process.env.PORT, () => {
    console.log("Rodando - Porta 3333")
})