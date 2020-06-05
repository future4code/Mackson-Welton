import { BaseDatabase } from "./BaseDatabase";

export class MusicDatabase extends BaseDatabase {
  private static TABLEGENRE: string = "spotenu_genre";
  private static TABLEMUSIC: string;

  public async addGenre(id: string, name: string): Promise<void> {
    await super.getConnection().raw(`
      INSERT INTO ${MusicDatabase.TABLEGENRE} (id, name)
      VALUES("${id}", "${name}")
    `)
  }

  public async getGenreByName(name: string): Promise<any> {
    const result = await super.getConnection().raw(`
      SELECT id, name FROM ${MusicDatabase.TABLEGENRE}
      WHERE name = "${name}"
    `)
    return result[0][0];
  }

  public async getAllGenres(): Promise<any> {
    const result = await super.getConnection().raw(`
      SELECT * FROM ${MusicDatabase.TABLEGENRE}
    `)
    return result[0][0];
  }

  public async 


}