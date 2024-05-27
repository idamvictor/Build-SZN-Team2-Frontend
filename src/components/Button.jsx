import "./Components.css";

export const Button = ({ value, customStyle, onClick }) => {
  return (
    <>
      <button
        className={`buttonStyle ${customStyle}`}
        onClick={onClick}
        type="submit"
      >
        {value}
      </button>
    </>
  );
};
