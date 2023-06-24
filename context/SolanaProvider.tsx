"use client"

import React, { FC, ReactNode, useCallback, useMemo } from 'react';
import { WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  SolletWalletAdapter,
  LedgerWalletAdapter
} from '@solana/wallet-adapter-wallets';

const SolanaProvider: FC<{children: ReactNode}> = ({children}) => {
  const network = WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolletWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new LedgerWalletAdapter(),
    ],
    [network]
  );
  const onError = useCallback((error: any) => {
    console.error(error);
  }, []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect onError={onError}>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
export default SolanaProvider