import BookList from './BookList';
import FormAddBook from './FormAddBook';

const BookStoreLogic = () => {
  const books = [
    {
      id: 1,
      title: 'Thus Spake Zarathustra',
      author: 'Friedrich Nietzsche',
      category: 'Philosophy',
      current: 'Chapter 17',
      progress: '64%',
    },
    {
      id: 2,
      title: 'Nineteen Eighty-Four',
      author: 'George Orwell',
      category: 'SciFi novel',
      current: 'Chapter 3: "A Lesson Learned"',
      progress: '8%',
    },
    {
      id: 3,
      title: 'The Tunnel',
      author: 'Ernesto Sabato',
      category: 'Novel',
      current: 'Introduction',
      progress: '0%',
    },
  ];

  return (
    <div>
      <BookList booksProps={books} />
      <FormAddBook />
    </div>

  );
};

export default BookStoreLogic;
