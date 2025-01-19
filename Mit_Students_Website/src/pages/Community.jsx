import React, { useState } from 'react';
import '../style/Community.css';  // Import the custom CSS


// Sample initial data for posts
const initialPosts = [
  { id: 1, username: 'Alice', content: 'Hello world! This is my first post!', likes: 5, createdAt: new Date() },
  { id: 2, username: 'John', content: 'Just finished a new project! Check it out!', likes: 8, createdAt: new Date() },
  { id: 3, username: 'Maria', content: 'Had a great time at the park today! #nature', likes: 12, createdAt: new Date() },
  { id: 4, username: 'Sophia', content: 'Loving the new game I started playing. Highly recommend!', likes: 7, createdAt: new Date() },
  { id: 5, username: 'David', content: 'Working on a new blog post, stay tuned!', likes: 10, createdAt: new Date() },
  { id: 6, username: 'Rachel', content: 'Excited to share my new photography project!', likes: 3, createdAt: new Date() },
  { id: 7, username: 'Emma', content: 'Great workout today, feeling amazing!', likes: 5, createdAt: new Date() },
];

const Community = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState('');
  const [category, setCategory] = useState('');
  const [filter, setFilter] = useState('newest');
  const [newComment, setNewComment] = useState('');

  // Handle changes for post creation
  const handlePostChange = (e) => {
    setNewPost(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim() === '') return;

    // Add new post with current date
    const newPostData = {
      id: posts.length + 1,
      username: 'You', // Placeholder for the current user
      content: newPost,
      likes: 0,
      createdAt: new Date(),
    };
    setPosts([newPostData, ...posts]);
    setNewPost('');
  };

  // Handle category filter
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // Handle post filter (newest, today, oldest)
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Handle likes
  const handleLike = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  // Handle comments
  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (postId, e) => {
    e.preventDefault();
    if (newComment.trim() === '') return;

    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, comments: [...(post.comments || []), newComment] }
        : post
    ));
    setNewComment('');
  };

  // Sort posts based on the selected filter
  const sortedPosts = posts.sort((a, b) => {
    switch (filter) {
      case 'today':
        return b.createdAt.toDateString() === new Date().toDateString() ? 1 : -1;
      case 'oldest':
        return new Date(a.createdAt) - new Date(b.createdAt);
      case 'newest':
      default:
        return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

  return (
    <div className="container">

      {/* Category and Filter Section */}
      <div className="filter-section">
        <div className="filter-container">
          <h2 className="filter-header">Filter by Category</h2>
          <select
            value={category}
            onChange={handleCategoryChange}
            className="filter-select"
          >
            <option value="">Select Category</option>
            <option value="Tech">Tech</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Fitness">Fitness</option>
            <option value="Music">Music</option>
          </select>
        </div>

        <div className="filter-container">
          <h2 className="filter-header">Filter Posts</h2>
          <select
            value={filter}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="newest">Newest</option>
            <option value="today">Today</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      {/* Create Post Section */}
      <div className="create-post">
        <h2>Create a New Post</h2>
        <textarea
          value={newPost}
          onChange={handlePostChange}
          placeholder="Write something..."
        />
        <button
          type="submit"
          onClick={handlePostSubmit}
        >
          Post
        </button>
      </div>

      {/* Community Feed Section */}
      <div className="feed-section">
        <h2>Community Feed</h2>

        {/* Display Posts */}
        {sortedPosts.map(post => (
          <div key={post.id} className="post">
            <h4>{post.username}</h4>
            <p>{post.content}</p>
            <button className="like-button" onClick={() => handleLike(post.id)}>
              Like {post.likes}
            </button>

            {/* Comment Section */}
            <div className="comment-section">
              <input
                type="text"
                value={newComment}
                onChange={handleCommentChange}
                placeholder="Add a comment..."
              />
              <button onClick={(e) => handleCommentSubmit(post.id, e)}>Comment</button>

              <div className="comments-list">
                {post.comments?.map((comment, index) => (
                  <div key={index} className="comment-item">{comment}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
