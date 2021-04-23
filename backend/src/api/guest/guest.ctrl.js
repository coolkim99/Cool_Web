import Guest from '../../models/guest';
import mongoose from 'mongoose';
import Joi from 'joi';

const { ObjectId } = mongoose.Types;

export const write = async ctx => {
    const schema = Joi.object().keys({
      // 객체가 다음 필드를 가지고 있음을 검증
      guestname: Joi.string().required(), // required() 가 있으면 필수 항목
      password: Joi.string().required(),
      text: Joi.string().required(),
    });
    // 검증 후, 검증 실패시 에러처리
    const result = schema.validate(ctx.request.body);
    if (result.error) {
      ctx.status = 400; // Bad Request
      ctx.body = result.error;
      return;
    }
  
    const { guestname, password, text } = ctx.request.body;
    const guest = new Guest({
      guestname,
      password,
      text
    });
    
    try {
        await guest.setPassword(password); // 비밀번호 설정
        await guest.save();
        ctx.body = guest;
    } catch (e) {
        ctx.throw(500, e);
    }
};