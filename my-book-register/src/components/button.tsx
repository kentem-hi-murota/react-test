interface Props {
  className: string;
  value: string;
  handleClickButton: () => void;
}

const Button = ({ className, value, handleClickButton }: Props) => {
  return (
    <button className={className} onClick={handleClickButton}>
      {value}
    </button>
  );
};

export default Button;
