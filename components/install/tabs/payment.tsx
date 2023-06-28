"use client"

import { HelioPay, HelioPayProps } from "@heliofi/react";
import { FC, useEffect, useState } from "react"
import { Version, Information } from "./tabs";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import Button from "../../Button";
import dynamic from "next/dynamic";

interface PaymentTabProps {
  version: Version;
  information: Information;
  setPaymentComplete: (paymentComplete: boolean) => void;
}

const PaymentTab: FC<PaymentTabProps> = ({ version, information, setPaymentComplete }) => {   

  const getStreamId = () => {
    switch (version) {
      case "Baby Boo Bot": {
        switch (information.userCount) { 
          case "Less than 1k members": return "6499d742631c6e06518fe442";
          case "1k - 3k members": return "6499df1bf0b387eacaeca11b";
          case "3k - 7k members": return "6499df55970f6a4403bec208";
          case "More than 7k members": return "6499df7b8854751bd8ad96c4";
        }
      }
      case "Pro Boo Bot": {
        switch (information.userCount) { 
          case "Less than 1k members": return "6499dfabd4008f8cdbd63ffd";
          case "1k - 3k members": return "6499dfd550b7edfc5f29ecaa";
          case "3k - 7k members": return "6499e003970f6a4403bec396";
          case "More than 7k members": return "6499e020d4008f8cdbd641e3";
        }
      }
      default: return "6499d742631c6e06518fe442";
    }
  }
  return (

    <div>
      {version === "Enterprise Boo Bot"
        ? (
          <div className="text-center text-2xl font-bold mb-4">
            Please contact us at <a href="mailto:cap@boo.ventures">cap@boo.ventures</a> once you are done signing up.
          </div>
        ) : (
          <HelioPay
            cluster={"mainnet-beta"}//ClusterHelio.Mainnet}//
            payButtonTitle='Purchase'
            paymentRequestId={getStreamId()}
            supportedCurrencies={["SOL", "USDC"]}
            paymentType={"PAYSTREAM" as any}
            onSuccess={(event) => {
              console.log("onSuccess", event);
              setPaymentComplete(true)
            }}
          />
        )
      }
      
    </div>
  )
}

export default PaymentTab;