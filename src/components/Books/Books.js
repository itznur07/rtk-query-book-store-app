import Book from "components/Books/Book";
import LoadingSpinner from "components/shared/LoadingSpinner";
import { useGetBooksQuery } from "features/api/apiSlice";

const Books = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();

  let content = null;

  if (isLoading) {
    content = <LoadingSpinner />;
  }
  if (!isLoading && isError) {
    content = <div>there was an error get video!</div>;
  }
  if (!isLoading && !isError && books.length > 0) {
    content = (
      <>
        {books?.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </>
    );
  }

  return (
    <main className='py-12 px-6 2xl:px-6 container'>
      <div className='order-2 xl:-order-1'>
        <div className='flex items-center justify-between mb-12'>
          <h4 className='mt-2 text-xl font-bold'>Book List</h4>

          <div className='flex items-center space-x-4'>
            <button
              onClick={() => handleStatus("all")}
              type='button'
              className={`lws-filter-btn all active-filter`}
            >
              All
            </button>
            <button
              onClick={() => handleStatus("featured")}
              type='button'
              className={`lws-filter-btn`}
            >
              Featured
            </button>
          </div>
        </div>
        <div className='space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {content}
        </div>
      </div>
    </main>
  );
};

export default Books;
