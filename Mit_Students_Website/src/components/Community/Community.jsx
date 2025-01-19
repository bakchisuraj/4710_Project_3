import React, { useState } from 'react';

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
    <div className="mt-0 mb-10 bg-gradient-to-r from-blue-200 to-indigo-300 max-w-full mx-auto p-6 bg-white shadow-md rounded-md">

      {/* Category and Filter Section */}
      <div className="flex justify-between mb-6">
        <div className="w-1/3">
          <h2 className="text-2xl font-semibold">Filter by Category</h2>
          <select
            value={category}
            onChange={handleCategoryChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="Tech">Tech</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Fitness">Fitness</option>
            <option value="Music">Music</option>
          </select>
        </div>

        <div className="w-1/3">
          <h2 className="text-2xl font-semibold">Filter Posts</h2>
          <select
            value={filter}
            onChange={handleFilterChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          >
            <option value="newest">Newest</option>
            <option value="today">Today</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      {/* Create Post Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Create a New Post</h2>
        <textarea
          value={newPost}
          onChange={handlePostChange}
          placeholder="Write something..."
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          onClick={handlePostSubmit}
          className="mt-2 bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600"
        >
          Post
        </button>
      </div>

      {/* Community Feed (with Scroll) */}
      <div className="overflow-y-auto max-h-[500px] mb-6">
        <h2 className="text-2xl font-semibold mb-6">Community Feed</h2>
        <div className="space-y-6">
          {sortedPosts.map((post) => (
            <div key={post.id} className="border border-gray-300 p-4 rounded-md">
              <h4 className="text-xl font-semibold">{post.username}</h4>
              <p className="text-sm text-gray-500 mt-2">{post.content}</p>

              {/* Like Button */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => handleLike(post.id)}
                  className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600"
                >
                  Like {post.likes}
                </button>
              </div>

              {/* Comment Section */}
              <div className="mt-4">
                <input
                  type="text"
                  value={newComment}
                  onChange={handleCommentChange}
                  placeholder="Add a comment"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={(e) => handleCommentSubmit(post.id, e)}
                  className="mt-2 bg-green-500 text-white py-1 px-4 rounded-md hover:bg-green-600"
                >
                  Comment
                </button>
                {post.comments && post.comments.length > 0 && (
                  <div className="mt-2">
                    <h5 className="font-semibold">Comments:</h5>
                    <ul className="space-y-2">
                      {post.comments.map((comment, index) => (
                        <li key={index} className="text-sm text-gray-600">{comment}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
