import { ChangeEventHandler, useState } from 'react';
import { BookItemModel } from '../models';
import BookTable from './bookTable';
import LabelInput from './labelInput';

interface Props {
  books: BookItemModel[];
  onClickDelete: (id: string) => void;
  onClickLendingSwitch: (id: string) => void;
}

const FilterableBookTable = ({ books, onClickDelete, onClickLendingSwitch }: Props) => {
  const [filterText, setFilterText] = useState('');

  const [isDisplayOnlyAvailable, setIsDisplayOnlyAvailable] = useState(false);

  const handleChangeFilterText: ChangeEventHandler<HTMLInputElement> = (e) => setFilterText(e.target.value);
  const handleChangeIsCheck: ChangeEventHandler<HTMLInputElement> = (e) => setIsDisplayOnlyAvailable(e.target.checked);

  return (
    <div className="filterable-book-table">
      <LabelInput
        className="label-input"
        labelClassName="label"
        labelValue="filter"
        inputClassName="input"
        inputPlaceHolder="入力してください"
        inputValue={filterText}
        handleOnChange={handleChangeFilterText}
      />

      <LabelInput
        className="label-input"
        labelClassName="label"
        labelValue="利用可能のみ表示"
        inputValue=""
        inputType="checkbox"
        inputPlaceHolder=""
        inputClassName=""
        handleOnChange={handleChangeIsCheck}
      />

      <BookTable
        bookItems={books.filter((x) => {
          const availableFilter = isDisplayOnlyAvailable ? !x.isOnLoan : true;
          const nameFilter = !filterText || x.name.includes(filterText);
          return availableFilter && nameFilter;
        })}
        onClickDelete={onClickDelete}
        onClickLendingSwitch={onClickLendingSwitch}
      />
    </div>
  );
};
export default FilterableBookTable;

