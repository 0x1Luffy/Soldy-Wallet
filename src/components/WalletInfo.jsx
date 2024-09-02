
import { useState } from 'react';
import AnimatedBtn from './AnimatedBtn';
import SecretPhraseSection from './SecretPhraseSection';

const WalletInfo = () => {
  const [showSecretPhrase, setShowSecretPhrase] = useState(false);

  const handleGenerateClick = () => {
    setShowSecretPhrase(true);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h2 className="text-white font-bold text-3xl">
        Your Secret Seed Phrase
      </h2>
      <span className="font-bold text-white mx-auto">
        Keep this a secret!
      </span>
      <div className="mt-5">
      <AnimatedBtn
        onClick={() => handleGenerateClick('Generate')}
        text="Generate"
      />
      </div>
      {showSecretPhrase && (
        <div className="mt-5">
          <SecretPhraseSection />
        </div>
      )}
    </div>
  );
};

export default WalletInfo;
