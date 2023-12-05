let postId = 1; // id의 초기값

// post 배열 초기 데이터
const posts = [
  {
    id: 1,
    title: '제목',
    body: '내용',
  },
];

/* 포스트 작성
  POST /api/posts
  { title, body }
*/
exports.write = (ctx) => {
  // REST API의 Request Body는 ctx.request.body에서 조회할 수 있음
  const { title, body } = ctx.request.body;
  postId += 1; // 기존 postId 값에 1을 더함
  const post = { id: postId, title, body };
  posts.push(post);
  ctx.body = post;
};
