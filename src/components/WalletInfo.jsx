import { useState, useEffect } from "react";
import * as bip39 from "bip39";
import AnimatedBtn from "./AnimatedBtn";
import SecretPhraseSection from "./SecretPhraseSection";

const WalletInfo = () => {
  const [mnemonicWords, setMnemonicWords] = useState(Array(12).fill(" "));
  const [wallets, setWallets] = useState([]);
  const [showSecretPhrase, setShowSecretPhrase] = useState(false);
  const [showGenerateBtn, setShowGenerateBtn] = useState(true);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("wallets");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleGenerateClick = () => {
    const mnemonic = bip39.generateMnemonic();
    const words = mnemonic.split(" ");
    setMnemonicWords(words);
    setShowSecretPhrase(true);
    setShowGenerateBtn(false);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h2 className="text-white font-bold text-3xl">Your Secret Seed Phrase</h2>
      <span className="font-bold text-white mx-auto">Keep this a secret!</span>
      <div className="mt-5">
        {showGenerateBtn && (
          <AnimatedBtn onClick={handleGenerateClick} text="Generate" />
        )}
      </div>
      {showSecretPhrase && (
        <div className="mt-5">
          <SecretPhraseSection
            mnemonicWords={mnemonicWords}
            walletIndex={wallets.length}
            setWallets={setWallets}
          />
        </div>
      )}
    </div>
  );
};

export default WalletInfo;
