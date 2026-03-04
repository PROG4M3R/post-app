import React , {useState,useEffect} from 'react'
import axios from 'axios';



const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    
    const fetchPosts = async () => {
        try {
            // fetches data from backend '/posts' and stores in posts
            const res = await axios.get('https://post-app-q3zz.onrender.com/posts');
            setPosts(res.data.posts || []);
            setLoading(false);
        } catch (err) {
            // handles error and retries after 2 seconds if fetch fails
            console.error('fetch error', err);
            setTimeout(fetchPosts, 2000);
        }
    };

    useEffect(() => {
        fetchPosts();
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