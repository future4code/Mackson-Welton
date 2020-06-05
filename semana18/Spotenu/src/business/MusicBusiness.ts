import { MusicDatabase } from "../data/MusicDatabase";
import { TokenGenerator } from "../service/tokenGenerator";
import { InvalidParameterError } from "../Erros/InvalidParameterError";
import { NotFoundError } from "../Erros/NotFoundError";
import { GenericError } from "../Erros/GenericError";

export class MusicBusiness {
  public async addGenre(id: string, name: string, token: string): Promise <void> {

    const getName = new MusicDatabase().getGenreByName(name);

    if (!getName) {
      throw new GenericError("This genre already exists in the database")
    }

    const userRole = new TokenGenerator().verify(token).role;

    if (userRole !== "ADMINISTRATOR") {
      throw new InvalidParameterError("You must be an administrator to access this feature.");
    }

    await new MusicDatabase().addGenre(id, name);

  }

  public async getGenreByName(name: string, token: string): Promise<any> {

    const userRole = new TokenGenerator().verify(token).role;

    if (userRole !== "ADMINISTRATOR") {
      throw new InvalidParameterError("You must be an administrator to access this feature.");
    }

    const result = new MusicDatabase().getGenreByName(name);

    if (!result) {
      throw new GenericError("This genre already exists in the database")
    }

    return result;
  }
}