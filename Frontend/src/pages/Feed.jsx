import React , {useState,useEffect} from 'react'
import axios from 'axios';



const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id:"1",
            image:"https://cache.careers360.mobi/media/article_images/2023/5/3/aktu-engineering-colleges-uttar-pradesh-vacant-btech-seats-featu_cxeoJRM.jpg",
            caption: "Beautiful University", 
        }
    ])

    // fetches data from backend '/posts' and stores in posts
    useEffect(()=>{
        axios.get('https://post-app-q3zz.onrender.com/posts').then((res)=>{
            setPosts(res.data.posts);
        }).catch((err)=>{
            console.log(err);
        })
            
    }, []);


    // renders the post from backend in feed page by mapping each post to a card element
    return (
    <section className='Feed-section'>
{
    posts.length>0 ? (
        posts.map( (post)=>(
            <div key = {post._id} className = "post-card">
                <img src={post.image} alt={post.caption} />
                <p>{post.caption}</p>
            </div>
        ))
    ) : (
        <h1>No Posts Available</h1>
    )
}

    </section>
  )
}

export default Feed;