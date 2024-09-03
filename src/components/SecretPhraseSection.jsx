import { useState } from "react";
import AnimatedBtn from "./AnimatedBtn";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import { mnemonicToSeedSync } from "bip39";

const SecretPhraseSection = ({ mnemonicWords, walletIndex, setWallets }) => {
  const [wallets, setLocalWallets] = useState([]);

  const generateWalletFromMnemonic = (mnemonic, accountIndex) => {
    const seedBuffer = mnemonicToSeedSync(mnemonic);
    const derivedSeed = seedBuffer.slice(0, 32); // Solana uses the first 32 bytes

    const keypair = Keypair.fromSeed(derivedSeed);

    return {
      publicKey: keypair.publicKey.toBase58(),
      privateKey: bs58.encode(keypair.secretKey),
      mnemonic,
      name: `Wallet ${walletIndex + 1}`,
    };
  };

  const handleGenerateClick = () => {
    if (wallets.length < 2) {
      const mnemonic = mnemonicWords.join(" ");
      const newWallet = generateWalletFromMnemonic(mnemonic, walletIndex);

      const updatedWallets = [...wallets, newWallet];
      localStorage.setItem("wallets", JSON.stringify(updatedWallets));

      setLocalWallets(updatedWallets);
      setWallets(updatedWallets);
    }
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
        <AnimatedBtn onClick={handleGenerateClick} text="Create Wallet" />
      </div>

      <div className="grid grid-cols-1 gap-4 mt-5">
        {wallets.map((wallet, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg border border-black"
          >
            <h3 className="text-lg text-black font-semibold mb-2">
              {wallet.name}
            </h3>
            <p className="text-lg text-black font-semibold">
              Public Key: {wallet.publicKey}
            </p>
            <p className="text-lg text-black font-semibold">
              Private Key: {wallet.privateKey}
            </p>
          </div>
        ))}
      </div>

      {wallets.length >= 2 && (
        <p className="text-red-500 text-center mt-4">
          You have reached the maximum limit of 2 wallets.
        </p>
      )}
    </div>
  );
};

export default SecretPhraseSection;
