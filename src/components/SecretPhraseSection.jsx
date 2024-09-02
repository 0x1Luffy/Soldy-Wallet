import { useState } from 'react';
import AnimatedBtn from "./AnimatedBtn";
import { Keypair } from '@solana/web3.js';
import bs58 from 'bs58';

const SecretPhraseSection = ({ mnemonicWords }) => {
  const [wallet, setWallet] = useState(null);

  const handleGenerateClick = () => {
    const seed = Buffer.from(mnemonicWords.join(' '));
    const keypair = Keypair.fromSeed(seed.slice(0, 32));
    const publicKey = keypair.publicKey.toBase58();
    const privateKey = bs58.encode(keypair.secretKey);

    // Set wallet details in the state
    setWallet({ publicKey, privateKey });
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Your Secret Phrase</h2>
      <div className="grid grid-cols-4 gap-4">
        {mnemonicWords.map((word, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-center">{word}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-5">
        <AnimatedBtn
          onClick={handleGenerateClick}
          text="Create Wallet"
        />
      </div>

      {wallet && (
        <div className="mt-5 text-white">
          <h3 className="text-lg text-black font-semibold">Your Solana Wallet</h3>
          <p className="text-lg text-black font-semibold">Public Key: {wallet.publicKey}</p>
          <p className="text-lg text-black font-semibold" >Private Key: {wallet.privateKey}</p>
        </div>
      )}
    </div>
  );
};

export default SecretPhraseSection;
