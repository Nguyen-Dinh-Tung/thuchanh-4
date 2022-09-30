function randomId() {
  let date = new Date();
  let string = 'qwertyuiopasdfghjklzxcbvnm';
  let idStaff: any = date.getMilliseconds();
  for (let i = 0; i < 8; i++) {
    idStaff += string[Math.floor(Math.random() * string.length)];
  }
  return idStaff
}
export default randomId;