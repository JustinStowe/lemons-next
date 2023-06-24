interface ButtonProps {
  title: string;
  onClick: (action: string) => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      className="px-4 py-2 mx-0.5 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      onClick={() => onClick(title)}
    >
      {title}
    </button>
  );
};

export default Button;
