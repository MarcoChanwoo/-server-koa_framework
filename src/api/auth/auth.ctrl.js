import Joi from 'joi';

/*
  POST /api/auth/register
  {
    username: 'marco',
    password: 'marco12'
  }
*/
export const register = async (ctx) => {
  // 회원가입
  // Request Body 검증하기
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
};

export const login = async (ctx) => {
  // 로그인
};

export const check = async (ctx) => {
  // 로그인 확인
};

export const logout = async (ctx) => {
  // 로그아웃
};
