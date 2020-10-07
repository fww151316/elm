import Mock from 'mockjs';
//mock中用于生成随机数据的类
const Random = Mock.Random;
/* 传入url和要解析出的参数名，解析查询参数 */
// function getParameter(req, parameter) {
//     var parameters = req.url
//     // [1]
//     // console.log( req.url)
//     if (parameters) {
//         var results = parameters.split("&");
//         for (let i = 0; i < results.length; i++) {
//             var result = results[i].split('=');
//             if (result[0] === parameter) {
//                 return result[1];
//             }
//         }
//         return null;
//     } else {
//         return null;
//     }
// }

Mock.mock(RegExp('/message/getMessage' + '.*'), 'get', (req) => {
    // let type = getParameter(req.url, 'type');
    
    let type = req.url.split('=')[1]
    // console.log(type)
    if (type === 'unread') {
        //控制一次产生的消息数量为1 - 5条
        // let num = Random.interger(1, 5);
        let msg = [];
        for (let i = 0; i < 5; i++) {
            msg.push({
                //生成随机中文标题
                title: Random.ctitle(),
                //生成随机中文名
                name: Random.cname(),
                //生成随机日期
                date: Random.date(),
               img: Random.image( "111x111" )
            })
        }
        return msg;
    }
        else {
        //生成其他类型的消息
        return "12345";
      }
})