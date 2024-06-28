interface Props {
  value: string;
  type?: string;
  className: string;
  placeHolder: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, type = 'text', placeHolder, handleOnChange, className }: Props) => {
  return (
    <input type={type} className={className} placeholder={placeHolder} value={value} onChange={handleOnChange}></input>
  );
};

export default Input;
