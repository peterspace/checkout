import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const YandexPay = () => {
  const [amount, setAmount] = useState('');

  const [isConfirmationUrl, setIsConfirmationUrl] = useState(null);
  const [confirmationUrl, setConfirmationUrl] = useState(null);
  const [confirmationData, setConfirmationData] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const idempotenceKey = uuidv4(); // Generate a unique idempotenceKey
  console.log({ amount: amount });
  console.log({ confirmationData: confirmationData });
  console.log({ responseData: responseData });
  console.log({ confirmationUrl: confirmationUrl });

  console.log({ idempotenceKey: idempotenceKey });

  // const shopId = 'YOUR_SHOP_ID';
  // const secretKey = 'YOUR_SECRET_KEY';

  const shopId = '253989';
  // const secretKey = 'test_5OmBQDJ16mWQO8_9YoYAttxknu4jgar9uC1o-xwOGak';
  const secretKey = 'test_oROlAREluhP2KS20MptfUCGCzlz97fJf6rftzeOw0MM';

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  useEffect(() => {
    if (isConfirmationUrl) {
      setTimeout(() => {
        window.location.href = confirmationUrl;
        setIsConfirmationUrl(false);
      }, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfirmationUrl]);

  const handleGetConfirmationUrl = async () => {
    try {
      // const idempotenceKey = uuidv4(); // Generate a unique idempotenceKey

      const response = await axios.post(
        'https://api.yookassa.ru/v3/payments',
        {
          amount: {
            value: amount,
            currency: 'RUB',
          },
          capture: true,
          confirmation: {
            type: 'redirect',
            return_url: 'https://yookassa.ru/',
          },
          description: 'Заказ №1',
        },
        {
          headers: {
            'Idempotence-Key': idempotenceKey,
            'Content-Type': 'application/json',
            auth: {
              username: shopId,
              password: secretKey,
            },
          },
        }
      );

      setConfirmationUrl(response?.data?.confirmation?.confirmation_url);
      setConfirmationData(response?.data?.confirmation);

      if (response?.data?.confirmation?.confirmation_url) {
        setIsConfirmationUrl(true);
      }
      setResponseData(response?.data);
    } catch (error) {
      console.error('Error obtaining confirmation token:', error);
    }
  };

  const sendFund = (
    <div className="flex justify-center items-center rounded-lg p-4">
      <div className="flex flex-col gap-[24px] rounded-lg border border-indigo-300 p-2 mt-8">
        <div className="text-xl font-bold text-gray-900 p-2">Reservation</div>

        <div className="flex flex-col justify-center p-2 rounded-lg bg-gray-100 w-[400px]">
          {amount ? (
            <div className="text-gray-900 rounded-lg bg-gray-100 p-2">
              Payment: {amount} RUB
            </div>
          ) : (
            <div className="text-gray-900 rounded-lg bg-gray-100 p-2">
              Payment:
            </div>
          )}

          {/* Payment form fields */}
          <div className="flex justify-center items-center gap-4">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              className="w-[280px]"
              required
            />
          </div>

          <div
            className="flex flex-row justify-center items-center mt-4"
            onClick={handleGetConfirmationUrl}
          >
            <div className="cursor-pointer flex flex-row justify-center items-center bg-indigo-700 hover:opacity-90 text-white h-[49px] shrink-0 rounded w-full">
              Pay
            </div>
          </div>
        </div>

        <div className="flex flex-row w-full" />
      </div>
    </div>
  );

  return <>{sendFund}</>;
};

export default YandexPay;
