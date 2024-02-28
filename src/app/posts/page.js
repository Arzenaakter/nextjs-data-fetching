import React from 'react';

const PostPage = async() => {
    const res = await fetch("http://localhost:5000/posts")
    const post = await res.json()
    return (
        <div>
            <h1>total post:{post.length} </h1>
            <div>
                {post.map((item)=><div key={item.id} className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
                        <h2 className="card-title">{ item.title}</h2>
                        <p>{ item.description}</p>
                        <p>{ item.likes}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">see more</button>
    </div>
  </div>
</div>)}
            </div>
        </div>
    );
};

export default PostPage;