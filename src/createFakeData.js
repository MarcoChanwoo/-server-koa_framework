import Post from './models/post';

export default function createFakeData() {
  const posts = [...Array(15).keys()].map((i) => ({
    title: `포스트 #${i}`,
    body: `This is unreal text. This is for example.`,
    tags: ['가짜', '데이터'],
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
