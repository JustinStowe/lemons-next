interface ButtonProps {
  title: string;
  OnClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, OnClick }) => {
  return (
    <button
      className="px-4 py-2 mx-0.5 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      onClick={OnClick}
    >
      {title}
    </button>
  );
};

export default Button;
