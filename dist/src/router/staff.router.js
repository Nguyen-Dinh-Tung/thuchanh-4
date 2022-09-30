"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const random_id_staff_1 = __importDefault(require("../function/random.id.staff"));
const staff_model_1 = __importDefault(require("../schema/staff.model"));
const upload = (0, multer_1.default)();
const staffRouter = (0, express_1.Router)();
staffRouter.get('/', async (req, res) => {
    let data = await staff_model_1.default.find();
    res.render('home', { data: data });
});
staffRouter.get('/register', (req, res) => {
    res.render('register');
});
staffRouter.post('/register', upload.none(), async (req, res) => {
    let data = req.body;
    data.id_starff = (0, random_id_staff_1.default)();
    console.log((0, random_id_staff_1.default)());
    let newStaff = await staff_model_1.default.create(data);
    newStaff.save();
    res.redirect('/');
});
staffRouter.get('/delete', async (req, res) => {
    let staff_id = req.query.id;
    await staff_model_1.default.findByIdAndDelete(staff_id);
    res.redirect('/');
});
staffRouter.get('/edit', async (req, res) => {
    let id = req.query.id;
    let data = await staff_model_1.default.findOne({ _id: id });
    res.render('editStaff', { data: data });
});
staffRouter.post('/edit', upload.none(), async (req, res) => {
    let data = req.body;
    await staff_model_1.default.findOneAndUpdate({ _id: data.id }, data);
    res.redirect('/');
});
exports.default = staffRouter;
//# sourceMappingURL=staff.router.js.map