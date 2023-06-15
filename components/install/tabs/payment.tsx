
import { FC } from "react"
import { Version, Information } from "./tabs";

interface PaymentTabProps { 
  version: Version;
  information: Information;
  setPaymentComplete: (paymentComplete: boolean) => void;
}

const PaymentTab:FC<PaymentTabProps> = ({version, information, setPaymentComplete}) => { 
  return (
    <div>
      <p className="py-4">Payment Plan Stuff</p>
    </div>
  )
}

export default PaymentTab;