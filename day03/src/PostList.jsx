import { useState } from 'react';
import './PostList.css';
import { posts } from './post';

function Post() {
  const [like, setLike] = useState([0,0,0,0]);
  const [postList, setPostList] = useState(posts);
  return (
    <div className="comment-list">
      {postList.map((post, idx) => (
        <div key={idx} className="comment">
          <img className="avatar" src={post.avatar} alt={post.name} />
          <div className="comment-details">
            <h3 className="user-name">{post.name}</h3>
            <p className="comment-text">{post.comment}</p>
            <p className="comment-time">{post.time}</p>
            <button className='like-button' onClick={() => { 
            let copy = [...like];
            copy[idx]++;
            setLike(copy);
           }}>👍🏻 <span className='like-count'>{like[idx]}</span></button>
          </div>
          <button className='delete-button' onClick={() => { 
            let copy = [...postList];
            copy = copy.filter((_, i) => i !== idx);
            setPostList(copy);
           }}>삭제</button>
        </div>
      ))}
    </div>
  )
}

export default function PostList() {
  return (
    <Post />
  );
}
