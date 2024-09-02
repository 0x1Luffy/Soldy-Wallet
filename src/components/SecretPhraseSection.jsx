import { useNavigate } from 'react-router-dom'; 
import AnimatedBtn from "./AnimatedBtn";

const SecretPhraseSection = () => {
  const navigate = useNavigate(); 

  const handleGenerateClick = () => {
    navigate('/wallet'); 
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Your Secret Phrase</h2>
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-center">Card {index + 1}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-5">
        <AnimatedBtn
          onClick={handleGenerateClick}
          text="Create Wallet"
        />
      </div>
    </div>
  );
};

export default SecretPhraseSection;
