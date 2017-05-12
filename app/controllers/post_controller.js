import Post from '../models/post_model';

// this cleans the posts because we use id instead of dangling _id
// and we purposefully don't return content here either
const cleanPost = (post) => {
  return { id: post._id, title: post.title, cover_url: post.cover_url, content: post.content, tags: post.tags.join(' ') };
};

const cleanPosts = (posts) => {
  return posts.map((post) => {
    return { id: post._id, title: post.title, cover_url: post.cover_url, content: post.content, tags: post.tags.join(' ') };
  });
};

// from http://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
function compare(a, b) {
  if (a.createdAt < b.createdAt) { return 1; }
  if (a.createdAt > b.createdAt) { return -1; }
  return 0;
}

export const createPost = (req, res) => {
  // res.send('post should be created here');
  const post = new Post();
  post.title = req.body.title;
  post.cover_url = req.body.cover_url;
  post.content = req.body.content;
  post.tags = req.body.tags.split(' ');

  post.save()
    .then((result) => {
      res.json(
        { message: 'Post created!' },
      );
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const getPosts = (req, res) => {
  // res.send('posts should be returned');
  Post.find()
    .then((posts) => {
      posts.sort(compare);

      res.json(cleanPosts(posts));
    });
};

export const getPost = (req, res) => {
  // res.send('single post looked up');
  Post.findById(req.params.id)
    .then((post) => {
      res.json(cleanPost(post));
    });
};

export const deletePost = (req, res) => {
  // res.send('delete a post here');
  Post.remove({ _id: req.params.id })
    .then(() => {
      res.json(
        { message: 'Post deleted!' },
      );
    });
};

export const updatePost = (req, res) => {
  // res.send('update a post here');
  Post.findOneAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      cover_url: req.body.cover_url,
      content: req.body.content,
      tags: req.body.tags.split(' '),
    })
    .then(() => {
      res.json(
        { message: 'Post updated!' },
      );
    });
};
