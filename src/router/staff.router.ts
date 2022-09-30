import { Router } from "express";
import multer from 'multer';
import randomId from "../function/random.id.staff";
import Staff from '../schema/staff.model'
const upload = multer();
const staffRouter = Router();
staffRouter.get('/', async (req, res) => {
  let data = await Staff.find();
  res.render('home', { data: data })
})

staffRouter.get('/register', (req, res) => {
  res.render('register')
})
staffRouter.post('/register', upload.none(), async (req, res) => {
  let data = req.body;
  data.id_starff = randomId();
  console.log(randomId());

  let newStaff = await Staff.create(data)
  newStaff.save()
  res.redirect('/')
})
staffRouter.get('/delete', async (req, res) => {
  let staff_id = req.query.id;
  await Staff.findByIdAndDelete(staff_id);
  res.redirect('/')
})
staffRouter.get('/edit', async (req, res) => {
  let id: any = req.query.id
  let data = await Staff.findOne({ _id: id })
  res.render('editStaff', { data: data })
})
staffRouter.post('/edit', upload.none(), async (req, res) => {
  let data = req.body;
  await Staff.findOneAndUpdate({ _id: data.id }, data)
  res.redirect('/')
})
staffRouter.get('/sort', async (req, res) => {
  let data = await Staff.find()
  let dataStaff = JSON.stringify(data)
  res.end(dataStaff)
})
export default staffRouter