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

export const update = async ctx => {
  const { guestname, password, text } = ctx.request.body;
  console.log(password);
  // write 에서 사용한 schema 와 비슷한데, required() 가 없습니다.
  const schema = Joi.object().keys({
    guestname: Joi.string(),
    password: Joi.string().required(),
    text: Joi.string(),
  });

  // 검증 후, 검증 실패시 에러처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  try {
    const valid = await guest.checkPassword(password);
    if (!valid) {
      ctx.status = 401;
      return;
    }


    const guest = await Guest.findByIdAndUpdate(id, ctx.request.body, {
      new: true, // 이 값을 설정하면 업데이트된 데이터를 반환합니다.
      // false 일 때에는 업데이트 되기 전의 데이터를 반환합니다.
    }).exec();
    if (!guest) {
      ctx.status = 404;
      return;
    }
    ctx.body = guest;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const checkOwnPost = (ctx, next) => {
  const { guest } = ctx.status;
  const { password } = ctx.request.body;
  if (password.toString() !== guest.hashedPassword) {
    ctx.status = 403;
    return;
  }
  return next();
};

export const check = async ctx => {
  const { guest } = ctx.state;
  if (!guest) {
    // 로그인중 아님
    ctx.status = 401; // Unauthorized
    return;
  }
  const userDoc = await User.findByUsername(user.username);
  //console.log(userDoc);
  ctx.body = userDoc.serialize();
  //ctx.body = userDoc;
};