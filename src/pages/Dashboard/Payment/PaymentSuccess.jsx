import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();
  const [paymentInfo, setPaymentInfo] = useState({});

  console.log(sessionId)

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/paymentSuccess?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);

  return (
    <div>
      <p>your Transaction ID {paymentInfo.transactionId}</p>
      <p>your Tracking ID {paymentInfo.trackingId}</p>
    </div>
  );
};

export default PaymentSuccess;
