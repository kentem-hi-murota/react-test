import Input from './input';

interface Props {
  className: string;
  labelClassName: string;
  labelValue: string;
  inputValue: string;
  inputPlaceHolder: string;
  inputClassName: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabelInput = ({
  className,
  labelClassName,
  labelValue,
  inputValue,
  inputPlaceHolder,
  inputClassName,
  handleOnChange,
}: Props) => {
  return (
    <div className={className}>
      <label className={labelClassName}>{labelValue}</label>
      <Input
        value={inputValue}
        placeHolder={inputPlaceHolder}
        className={inputClassName}
        handleOnChange={handleOnChange}
      />
    </div>
  );
};

export default LabelInput;
