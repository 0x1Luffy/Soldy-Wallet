import WalletInfo from "./WalletInfo";
const Hero = () => {
  return (
    <>
      <div className="">
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="">
            <div className="flex flex-col items-center  mt-8 h-full text-white">
              <h1 className="text-8xl font-bold text-white">Soldy</h1>
              <span className="text-xl font-bold mt-4 text-white">
                A Solana Blockchain Wallet
              </span>
            </div>
            <WalletInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
