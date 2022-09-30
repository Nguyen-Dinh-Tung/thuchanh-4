"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomId() {
    let date = new Date();
    let string = 'qwertyuiopasdfghjklzxcbvnm';
    let idStaff = date.getMilliseconds();
    for (let i = 0; i < 8; i++) {
        idStaff += string[Math.floor(Math.random() * string.length)];
    }
    return idStaff;
}
exports.default = randomId;
//# sourceMappingURL=random.id.staff.js.map