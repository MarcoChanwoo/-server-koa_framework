import Post from '../../models/post';

/*
  POST /api/posts
  {
    title: '제목',
    body: '내용',
    tags: ['태그1', '태그2']
  }
*/
export const write = async (ctx) => {
  const { title, body, tags } = ctx.request.body;
  const post = new Post({
    title,
    body,
    tags,
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const list = (ctx) => {};

export const read = (ctx) => {};

export const remove = (ctx) => {};

export const update = (ctx) => {};

// let postId = 1; // id의 초기값

// // post 배열 초기 데이터
// const posts = [
//   {
//     id: 1,
//     title: '제목',
//     body: '내용',
//   },
// ];

// /* 포스트 작성
//   POST /api/posts
//   { title, body }
// */
// // exports.write = (ctx) => {
// export const write = (ctx) => {
//   // REST API의 Request Body는 ctx.request.body에서 조회할 수 있음
//   const { title, body } = ctx.request.body;
//   postId += 1; // 기존 postId 값에 1을 더함
//   const post = { id: postId, title, body };
//   posts.push(post);
//   ctx.body = post;
// };

// /* 포스트 목록 조회
// GET /api/posts
// */
// // exports.list = (ctx) => {
// export const list = (ctx) => {
//   ctx.body = posts;
// };
// exports.read = (ctx) => {
//   const { id } = ctx.params;
//   // 주어진 id값으로 포스트를 찾습니다.
//   // 파라미터로 받아온 값은 문자열 형식이므로 파라미터를 숫자로 변환하거나
//   // 비교할 p.id값을 문자열로 변경해야 함
//   const post = posts.find((p) => p.id.toString() === id);
//   // 포스트가 없으면 오류를 반환함
//   if (!post) {
//     ctx.status = 404;
//     ctx.body = {
//       message: '포스트가 존재하지 않습니다',
//     };
//     return;
//   }
//   ctx.body = post;
// };

// /* 특정 포스트 제거
// DELETE /api/posts/:id
// */
// // exports.remove = (ctx) => {
// export const remove = (ctx) => {
//   const { id } = ctx.params;
//   // 해당 id를 가진 post가 몇번째인지 확인함
//   const index = posts.findIndex((p) => p.id.toString() === id);
//   // 포스트가 없으면 오류를 반환함
//   if (index === -1) {
//     ctx.status = 404;
//     ctx.body = {
//       message: '포스트가 존재하지 않습니다.',
//     };
//     return;
//   }
//   // index번째 아이템을 제거함
//   posts.splice(index, 1);
//   ctx.status = 204; // No content
// };

// /* 포스트 수정(교체)
// PUT /api/posts/:id
// {title, body}
// */
// // exports.replace = (ctx) => {
// export const replace = (ctx) => {
//   // PUT 메서드는 전체 포스트 정보를 입력하여 데이터를 통째로 교체할 때 사용함
//   const { id } = ctx.params;
//   // 해당 id를 가진 post가 몇번째인지 확인함
//   const index = posts.findIndex((p) => p.id.toString() === id);
//   // 포스트가 없으면 오류를 반환함
//   if (index === -1) {
//     ctx.status = 404;
//     ctx.body = {
//       message: '포스트가 존재하지 않습니다.',
//     };
//     return;
//   }
//   // 전체 객체를 덮어 씌움
//   // 따라서 id를 제외한 기존 정보를 날리고, 객체를 새로 만듦.
//   posts[index] = {
//     id,
//     ...ctx.request.body,
//   };
//   ctx.body = posts[index];
// };

// /* 포스트 수정(특정 필드 변경 시)
// PATCH /api/posts/:id
// {title, body}
// */
// // exports.update = (ctx) => {
// export const update = (ctx) => {
//   // PATCH 메서드는 주어진 필드만 교체함
//   const { id } = ctx.params;
//   // 해당 id를 가진 post가 몇번째인지 확인함
//   const index = posts.findIndex((p) => p.id.toString() === id);
//   // 포스트가 없으면 오류를 반환함
//   if (index === -1) {
//     ctx.status = 404;
//     ctx.body = {
//       message: '포스트가 존재하지 않습니다.',
//     };
//     return;
//   }
//   // 기존 값에 정보를 덮어 씌움
//   posts[index] = {
//     ...posts[index],
//     ...ctx.request.body,
//   };
//   ctx.body = posts[index];
// };
