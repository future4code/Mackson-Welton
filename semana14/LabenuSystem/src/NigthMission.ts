import { Missions } from "./missions";

export class NightMission extends Missions {

  public setName(name: string) {
    if (name.indexOf('-na-night') === -1) {
      super.setName(name);
    }
  }
}