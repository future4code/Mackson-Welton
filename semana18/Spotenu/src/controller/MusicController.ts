import { Request, Response } from 'express';
import { MusicBusiness } from '../business/MusicBusiness';
import { IdGenerator } from '../service/idGenerator';

export class MusicController {
  public async addGenre(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;
      const name = req.body.name;

      const id = new IdGenerator().generate();

      await new MusicBusiness().addGenre(id, name, token)

      res.status(200).send({ message: "Registered successfully"})
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err })
    }
  }

  public async getGenreByName(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;
      const name = req.query.name as string;

      console.log(name)
  
      const result = new MusicBusiness().getGenreByName(name, token);

      res.status(200).send(result)

    } catch(err) {
      res.status(err.errorCode || 400).send({message: err})
    }
  }
}