import crypto from 'crypto'
import multer from 'multer'

import {extname, resolve} from 'path'

// Essa função serve para dar destino onde eu quero salvar a foto [ enviando folder] e o nome do arquivo a ser salvo

export default {
  upload(folder: string) {
    return{
      
      storage: multer.diskStorage({
        
        destination:resolve(__dirname, '..','..', folder),
        
        
        // Para evitar repetições de nomes
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString("hex")
          const filename = `${fileHash}-${file.originalname}`

          return callback(null, filename)
        }
        
      })
      
    }
  }
}