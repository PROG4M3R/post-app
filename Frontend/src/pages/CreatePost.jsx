import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      // sends form data to backend route '/' to create post
      await axios.post('https://post-app-q3zz.onrender.com/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      //alert('Post created successfully!');
      console.log('Post created successfully!');

      navigate('/feed');
    }
    catch (err) {
      console.error(err);
      console.log('Failed to create post. Please try again.');
      //alert('Failed to create post. Please try again.'); 
    }
  }


  return (
    //renders form to create post with image and caption
    <section className='create-post-section'>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
            <input type="file" name="image" required accept="image/*" />
            <input type="text" name="caption" required placeholder='Enter Caption'/>
            <button type='submit'>Submit</button>
        </form>
    </section>
  )

}
export default CreatePost;