import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="w-1/3">
            <div>
                <h2 className='text-2xl font-bold text-center mb-4 bg-slate-200 text-blue-600 rounded-xl ml-4 pt-3 pb-3'>
                Spent time on read : {readingTime}
                </h2>
            </div>
           <div className='bg-slate-200 rounded-xl ml-4 pt-3 pb-3'>
           <h2 className="text-2xl font-bold text-center">Bookmarks Blog : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,index) => <Bookmark key={index} bookmark={bookmark}></Bookmark>)
               
            }
           </div>
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks : PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;