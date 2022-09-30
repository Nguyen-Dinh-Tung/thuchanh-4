import { Schema, model } from 'mongoose';

interface Staffs {
  name: string;
  age: number;
  id_starff: string;
  department: string
}

const staffsSchemal = new Schema<Staffs>({
  name: String,
  age: Number,
  id_starff: String,
  department: String,
})
const Staff = model<Staffs>('staff', staffsSchemal);
export default Staff;