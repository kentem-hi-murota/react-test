import Button from './button';
import LabelInput from './labelInput';

interface Props {
  isbn: string;
  setIsbn: React.Dispatch<React.SetStateAction<string>>;
  handleClickButton: () => void;
}

const BookRegister = ({ isbn, setIsbn, handleClickButton }: Props) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsbn(e.target.value);
  };

  return (
    <div className="book-register">
      <LabelInput
        className="label-input"
        labelClassName="label"
        labelValue="ISBNコード"
        inputValue={isbn}
        inputPlaceHolder="入力してください"
        inputClassName="input"
        handleOnChange={handleOnChange}
      />
      <Button value="書籍登録" handleClickButton={handleClickButton} className="button" />
    </div>
  );
};

export default BookRegister;
