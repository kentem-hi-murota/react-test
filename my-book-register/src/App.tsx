import { useState } from 'react';
import './App.css';
import FilterableBookTable from './components/filterableBookTable';
import { BookItemModel } from './models';
import BookRegister from './components/bookRegister';

function App() {
  const [isbn, setIsbn] = useState('');
  const [books, setBooks] = useState<BookItemModel[]>([]);

  const handleClickButton = (): void => {
    if (books.some((book) => book.id === isbn)) {
      alert('登録済みの ISBNコードです。');
      return;
    }
    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
      .then((response) => response.json())
      .then((data) => {
        // 第四問 登録ボタンを押して送信したら入力欄をクリアする
        if (data.totalItems === 0) {
          alert('登録されていない ISBN コードです。');
          return;
        }
        onPostCompleted({
          name: data.items[0].volumeInfo.title,
          isOnLoan: false,
        });
        setIsbn('');
      });
  };

  const onPostCompleted = (postedItem: Omit<BookItemModel, 'id'>): void => {
    setBooks((prev) => [
      ...prev,
      {
        id: isbn,
        ...postedItem,
      },
    ]);
  };

  return (
    <div className="App">
      {/* 第1問：コンポーネントに分割 ↓ ↓ ↓ ↓ ↓ */}
      <BookRegister isbn={isbn} setIsbn={setIsbn} handleClickButton={handleClickButton} />
      {/* 第1問：コンポーネントに分割 ↑ ↑ ↑ ↑ ↑ ↑ */}
      <hr />
      <FilterableBookTable
        books={books}
        onClickDelete={(id) => {
          {
            /* 第2問：貸出 or 返却 or 削除の処理を追加 */
            setBooks(books.filter((book) => book.id !== id));
          }
        }}
        onClickLendingSwitch={(id) => {
          {
            /* 第2問：貸出 or 返却 or 削除の処理を追加 */
            setBooks(
              books.map((book) => {
                if (book.id === id) {
                  return { ...book, isOnLoan: !book.isOnLoan };
                } else {
                  return book;
                }
              }),
            );
          }
        }}
      />
    </div>
  );
}

export default App;

