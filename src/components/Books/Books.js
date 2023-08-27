import Book from "components/Books/Book";
import LoadingSpinner from "components/shared/LoadingSpinner";
import { useGetBooksQuery } from "features/api/apiSlice";
import { statusChange } from "features/filters/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const Books = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();
  const dispatch = useDispatch();
  const { search, type } = useSelector((state) => state.filters);

  const searchByFeatured = (book) => {
    if (type === "featured") {
      return !!book.featured;
    }
    return true;
  };

  const searchBook = (book) => book?.name?.toLowerCase()?.includes(search);

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
        {books
          ?.slice()
          ?.filter(searchByFeatured)
          ?.filter(searchBook)
          ?.map((book) => (
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
              type='button'
              onClick={() => dispatch(statusChange("all"))}
              className={`lws-filter-btn ${
                type === "all" ? "active-filter" : ""
              }`}
            >
              All
            </button>
            <button
              onClick={() => dispatch(statusChange("featured"))}
              type='button'
              className={`lws-filter-btn ${
                type === "featured" ? "active-filter" : ""
              }`}
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
