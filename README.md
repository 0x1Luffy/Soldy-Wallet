
# Soldy - A Solana Web3 Wallet

<p align="center">
  <img src='https://i.postimg.cc/mkskV57g/Screenshot-2024-09-03-081724.png' border='0' alt='Soldy Wallet'/>
</p>

A simple web-based wallet for Solana, built using React and Alchemy. This wallet allows users to create a seed phrase, generate multiple wallets from that seed phrase, and view the balances of provided wallet addresses.

## Features

- **Seed Phrase Generation**: Generate a new seed phrase to create your wallets.
- **Wallet Generation**: Generate multiple wallets from the same seed phrase.
- **View Balances**: Input a wallet address to view its balance.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Alchemy**: Blockchain development platform for interacting with the Solana network.
- **@solana/web3.js**: Solana's JavaScript API for interacting with the Solana blockchain.
- **bs58 **: A library for Base58 encoding, often used for encoding keys in blockchain projects.
- **bip39**: A library for working with BIP39 mnemonic phrases, used in generating seed phrases for wallets.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/0x1Luffy/Soldy-Wallet.git
   cd soldy-wallet
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

To start the development server, run:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

### Building for Production

To create a production build, run:

```bash
npm run build
```

### Usage

1. **Generate Seed Phrase**: Click the "Generate Seed Phrase" button to create a new seed phrase.
2. **Generate Wallets**: Use the generated seed phrase to create multiple wallets.
3. **View Balances**: Enter a wallet address to check its balance.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

## Acknowledgements

- [React](https://reactjs.org/)
- [Alchemy](https://www.alchemy.com/)
- [Solana](https://solana.com/)
