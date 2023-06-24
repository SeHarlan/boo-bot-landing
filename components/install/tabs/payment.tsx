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
      case "Baby Boo Bot": 
      case "Pro Boo Bot":
      case "Enterprise Boo Bot":
      default: return "64948e53b1a5b53267c19286"
    }
  }
  return (

    <div>
      <HelioPay
        cluster={"mainnet-beta"}//ClusterHelio.Mainnet}//
        payButtonTitle='Purchase'
        paymentRequestId={getStreamId()}
        supportedCurrencies={["SOL", "USDC"]}
        paymentType={"PAYSTREAM" as any}
        // totalAmount={50}
        // theme={
        //   {
        //     colors: {
        //       primary: '#91f9fd',
        //       disabled: '#4d8587'
        //     }
        //   }
        // }
        onSuccess={(event) => {
          console.log("onSuccess", event);
          setPaymentComplete(true)
        }}
      />
    </div>
  )
}

export default PaymentTab;