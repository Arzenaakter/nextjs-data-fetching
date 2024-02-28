import React from 'react';

const PostPage = async() => {
    // const res = await fetch("http://localhost:5000/posts", {
    //     next:{revalidate:5}
    // })
    const res = await fetch("http://localhost:5000/posts", {
        cache:"no-store"
    })
    const post = await res.json()
    return (
        <div>
            <h1>total posts:{post.length} </h1>
            <div className='space-y-6'>
                {post.map((item)=><div key={item.id} className="card w-[80%] bg-gray-100 shadow-xl mx-auto">
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