import { useSelector } from 'react-redux';
import BookList from './BookList';
import FormAddBook from './FormAddBook';

const BookStore = () => {
  const { books } = useSelector((store) => store.books);

  return (
    <div>
      <BookList booksProps={books} />
      <FormAddBook />
    </div>

  );
};

export default BookStore;
