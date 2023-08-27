import { useEditBookMutation } from "features/api/apiSlice";
import { toast } from "react-toastify";

const Form = ({ book }) => {
  const { id, name, author, thumbnail, price, rating, featured } = book;
  const [editBook, { isLoading, isError, isSuccess }] = useEditBookMutation();
  console.log(isSuccess);
  const handleEditSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const author = form.author.value;
    const thumbnail = form.thumbnail.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const featured = form.featured.value;

    const editInfo = {
      name,
      author,
      thumbnail,
      price,
      rating,
      featured,
    };

    editBook({ id: id, data: editInfo });

    if (isSuccess === true) {
      toast("Data edit successfully!");
    }

    form.reset();
  };

  return (
    <main className='py-6 2xl:px-6'>
      <div className='container'>
        <div className='p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto'>
          <h4 className='mb-8 text-xl font-bold text-center'>Edit Book</h4>
          <form onSubmit={handleEditSubmit} className='book-form'>
            <div className='space-y-2'>
              <label htmlFor='lws-bookName'>Book Name</label>
              <input
                required
                className='text-input'
                type='text'
                defaultValue={name}
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
                defaultValue={author}
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
                defaultValue={thumbnail}
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
                  defaultValue={price}
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
                  defaultValue={rating}
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
                defaultValue={featured}
                className='w-4 h-4'
              />
              <label htmlFor='lws-featured' className='ml-2 text-sm'>
                This is a featured book
              </label>
            </div>

            <button type='submit' className='submit' id='lws-submit'>
              {isLoading ? "Updating..." : "Edit Book"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Form;
