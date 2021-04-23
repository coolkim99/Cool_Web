import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const GuestSchema = new Schema({
    guestname: String,
    hashedPassword: String,
    text : String,
    date: {
        type: Date,
        default: Date.now,
      }
});

GuestSchema.methods.setPassword = async function(password) {
    const hash = await bcrypt.hash(password, 10);
    this.hashedPassword = hash;
};
  
GuestSchema.methods.checkPassword = async function(password) {
    const result = await bcrypt.compare(password, this.hashedPassword);
    return result; // true / false
};
GuestSchema.methods.serialize = function() {
    const data = this.toJSON();
    delete data.hashedPassword;
    return data;
};
  
GuestSchema.methods.generateToken = function() {
    const token = jwt.sign(
      // 첫번째 파라미터엔 토큰 안에 집어넣고 싶은 데이터를 넣습니다
      {
        _id: this.id,
        guestname: this.guestname,
      },
      process.env.JWT_SECRET, // 두번째 파라미터에는 JWT 암호를 넣습니다
    );
    return token;
  };

const Guest = mongoose.model('Guest', GuestSchema);
export default Guest;