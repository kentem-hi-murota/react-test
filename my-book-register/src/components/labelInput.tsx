import Input from './input';

interface Props {
  className: string;
  labelClassName: string;
  labelValue: string;
  inputValue: string;
  inputType?: string;
  inputPlaceHolder: string;
  inputClassName: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabelInput = ({
  className,
  labelClassName,
  labelValue,
  inputValue,
  inputType = 'text',
  inputPlaceHolder,
  inputClassName,
  handleOnChange,
}: Props) => {
  return (
    <div className={className}>
      {inputType === 'text' && <label className={labelClassName}>{labelValue}</label>}
      <Input
        value={inputValue}
        type={inputType}
        placeHolder={inputPlaceHolder}
        className={inputClassName}
        handleOnChange={handleOnChange}
      />
      {inputType !== 'text' && <label className={labelClassName}>{labelValue}</label>}
    </div>
  );
};

export default LabelInput;
