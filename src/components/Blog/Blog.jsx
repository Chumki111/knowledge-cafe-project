import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa'

const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {id,title,cover,author,author_img,posted_date,reading_time,hashtags} = blog
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-6' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex mb-4'>
                     <img className='w-14' src={author_img} alt="" />
                     <div className='ml-6'>
                            <h2 className='text-2xl'>{author}</h2>
                            <p>{posted_date}</p>
                     </div>
                </div>
                <div>
                  <span>{reading_time} min read</span>
                  <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-red-400'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-3xl mb-4'>{title}</h2>
            <p>
            {
                hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
            }
            </p>
            <button onClick={() =>handleMarkAsRead(id,reading_time)} className='text-blue-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};
 
Blog.propTypes = {
   blog:PropTypes.object.isRequired,
   handleAddToBookmark:PropTypes.func,
   handleMarkAsRead: PropTypes.func
}

export default Blog;