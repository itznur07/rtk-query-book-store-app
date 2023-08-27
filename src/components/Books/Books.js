import Book from "components/Books/Book";

const Books = () => {
  return (
    <main className='py-12 px-6 2xl:px-6 container'>
      <div className='order-2 xl:-order-1'>
        <div className='flex items-center justify-between mb-12'>
          <h4 className='mt-2 text-xl font-bold'>Book List</h4>

          <div className='flex items-center space-x-4'>
            <button
              type='button'
              className={`lws-filter-btn all active-filter`}
            >
              All
            </button>
            <button type='button' className={`lws-filter-btn`}>
              Featured
            </button>
          </div>
        </div>
        <div className='space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <Book />
        </div>
      </div>
    </main>
  );
};

export default Books;
