interface Props {
  value: string;
  className: string;
  placeHolder: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, placeHolder, handleOnChange, className }: Props) => {
  return <input className={className} placeholder={placeHolder} value={value} onChange={handleOnChange}></input>;
};

export default Input;
