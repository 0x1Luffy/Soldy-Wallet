const AnimatedBtn = ({ onClick, text }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="relative px-4 py-2 text-xl text-purple-600 font-semibold rounded-full border border-purple-200 bg-white overflow-hidden transition-transform duration-300 ease-in-out hover:bg-purple-600 hover:border-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        <div className="text-animation">
          {text.split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
      </button>
    </div>
  );
};

export default AnimatedBtn;
