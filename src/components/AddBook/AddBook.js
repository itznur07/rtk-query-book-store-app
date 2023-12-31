import { useAddBookMutation } from "features/api/apiSlice";
import { toast } from "react-toastify";

const AddBook = () => {
  /** HOOK */
  const [addBook, { isLoading, isSuccess }] = useAddBookMutation();

  /** <!-- Functionality for adding book --> */
  const handleAddSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const author = form.author.value;
    const thumbnail = form.thumbnail.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const featured = form.featured.value;

    const bookInfo = {
      name,
      author,
      thumbnail,
      price,
      rating,
      featured,
    };

    addBook(bookInfo);

    form.reset();

    toast("Book added successfully!");
  };

  return (
    <main className='py-6 2xl:px-6'>
      <div className='container'>
        <div className='p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto'>
          <h4 className='mb-8 text-xl font-bold text-center'>Add New Book</h4>
          <form onSubmit={handleAddSubmit} className='book-form'>
            <div className='space-y-2'>
              <label htmlFor='lws-bookName'>Book Name</label>
              <input
                required
                className='text-input'
                type='text'
                id='lws-bookName'
                name='name'
              />
            </div>

            <div className='space-y-2'>
              <label htmlFor='lws-author'>Author</label>
              <input
                required
                className='text-input'
                type='text'
                id='lws-author'
                name='author'
              />
            </div>

            <div className='space-y-2'>
              <label htmlFor='lws-thumbnail'>Image Url</label>
              <input
                required
                className='text-input'
                type='url'
                id='lws-thumbnail'
                name='thumbnail'
              />
            </div>

            <div className='grid grid-cols-2 gap-8 pb-4'>
              <div className='space-y-2'>
                <label htmlFor='lws-price'>Price</label>
                <input
                  required
                  className='text-input'
                  type='number'
                  id='lws-price'
                  name='price'
                  min='0'
                  step='any'
                />
              </div>

              <div className='space-y-2'>
                <label htmlFor='lws-rating'>Rating</label>
                <input
                  required
                  className='text-input'
                  type='number'
                  id='lws-rating'
                  name='rating'
                  min='1'
                  max='5'
                />
              </div>
            </div>

            <div className='flex items-center'>
              <input
                id='lws-featured'
                type='checkbox'
                name='featured'
                className='w-4 h-4'
              />
              <label htmlFor='lws-featured' className='ml-2 text-sm'>
                This is a featured book
              </label>
            </div>

            <button type='submit' className='submit' id='lws-submit'>
              {isLoading ? "Applying..." : "Add Book"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddBook;
