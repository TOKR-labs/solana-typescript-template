import React, {useMemo} from 'react';
import './App.css';
import {PhantomWalletAdapter} from '@solana/wallet-adapter-wallets';
import {WalletModalProvider, WalletDisconnectButton, WalletMultiButton} from '@solana/wallet-adapter-react-ui';
import {WalletAdapterNetwork} from "@solana/wallet-adapter-base";
import { clusterApiUrl } from '@solana/web3.js';
import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react";

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

function App() {

    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
    // Only the wallets you configure here will be compiled into your application, and only the dependencies
    // of wallets that your users connect to will be loaded.
    const wallets = useMemo(() => [new PhantomWalletAdapter()], [network]);

    const doSomething = async () => {


    };

    return (
        <div className="App">

            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                    <WalletModalProvider>
                        <WalletMultiButton />
                        {/*<WalletDisconnectButton />*/}
                        {
                            <button onClick={doSomething}>Call Program</button>
                        }
                    </WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider>


        </div>
    );

}

export default App;
