"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const missions_1 = require("./missions");
class NightMission extends missions_1.Missions {
    setName(name) {
        if (name.indexOf('-na-night') === -1) {
            super.setName(name);
        }
    }
}
exports.NightMission = NightMission;
//# sourceMappingURL=NigthMission.js.map