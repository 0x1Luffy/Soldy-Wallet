import { useLocation } from "react-router-dom";

const Wallet = () => {
  const location = useLocation();
  const { publicKey, privateKey } = location.state || {};

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h2 className="text-white font-bold text-3xl">Your Solana Wallet</h2>
      {publicKey && privateKey ? (
        <div className="mt-5 text-white">
          <p>Public Key: {publicKey}</p>
          <p>Private Key: {privateKey}</p>
        </div>
      ) : (
        <p className="text-red-500">No wallet generated yet.</p>
      )}
    </div>
  );
};

export default Wallet;
