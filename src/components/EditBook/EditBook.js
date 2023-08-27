import Form from "components/EditBook/Form";
import LoadingSpinner from "components/shared/LoadingSpinner";
import { useGetBookQuery } from "features/api/apiSlice";
import { useParams } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  const { data: book, isLoading, isError } = useGetBookQuery(id);

  let content = null;
  if (isLoading) {
    content = <LoadingSpinner />;
  }
  if (!isLoading && isError) {
    content = <div>There wan an error get video!</div>;
  }
  if (!isLoading && !isError && book) {
    content = <Form book={book} />;
  }

  return (
    <>
        {content}
    </>
  );
};

export default EditBook;
