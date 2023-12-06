// const Router = require('koa-router');
// const postsCtrl = require('./posts.ctrl');
import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

// const printInfo = (ctx) => {
//   ctx.body = {
//     method: ctx.method,
//     path: ctx.path,
//     params: ctx.params,
//   };
// };

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);
posts.get('/:id', postsCtrl.checkObjectId, postsCtrl.read);
posts.delete('/:id', postsCtrl.checkObjectId, postsCtrl.remove);
// posts.put('/:id', postsCtrl.replace); // 구현하지 않을 것이므로 제거함
posts.patch('/:id', postsCtrl.checkObjectId, postsCtrl.update);

export default posts;
// module.exports = posts;
