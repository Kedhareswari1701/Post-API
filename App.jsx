
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import PostList from './components/PostList.jsx';
import PostForm from './components/PostForm.jsx';
import Auth from './components/Auth.jsx';
import './App.css';

function App() {

  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('posts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);


  // Function to add a new post
  const addPost = (post) => {
    // Add the current user's name to the post object
    const newPost = { ...post, post_by: currentUser };
    setPosts([newPost, ...posts]);
  };

  // Function to delete a post
  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div>
      <Navbar 
        currentUser={currentUser} 
        onLogout={handleLogout} 
        onShowAuth={setShowAuth}
      />
      <div className="app-container">
        {/* Show the Auth modal if showAuth is set */}
        {showAuth && (
          <Auth 
            mode={showAuth} 
            onAuth={handleAuth} 
            onCancel={() => setShowAuth(null)}
          />
        )}
        
        <h1>My Post App 📝</h1>
        
        {/* Only show the PostForm if a user is logged in */}
        {currentUser ? (
          <PostForm addPost={addPost} />
        ) : (
          <p className="login-prompt">Please login or register to create a post.</p>
        )}
        
        <PostList posts={posts} deletePost={deletePost} />
      </div>
    </div>
  );
}

export default App;