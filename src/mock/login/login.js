import Mock from 'mockjs';

let userSet = [
  { username: '12345', password: '123' },
  { username: 'xishanyu', password: '456' },
]
//用mock模拟一个'/userlogin/login'的post请求，请求参数从req.body得到
Mock.mock('/userLogin/login', 'post', (req) => {
  //解析请求体，前端传的可能是JSON字符串
  let body = JSON.parse(req.body);
  let username = body.username;
  let password = body.password;
  //遍历模拟数据，检查该用户是否存在，并比对密码
  for (let user of userSet) {
    if (user.username === username) {
      if (user.password !== password) {
        return 'password error';
      } else {
        return 'success';
      }
    }
  }
  //用户不存在
  return 'user not exist';
})