import { assets } from "@/assets";
import Image from "next/image";

const transactions = [
  {
    id: 1,
    icon: assets.one,
    cardType: "Deposite from my card",
    date: "28 January 2021",
    price: "-$850",
    colour: "bg-[#FFF5D9]",
  },
  {
    id: 2,
    icon: assets.paypal,
    cardType: "Deposite PayPal",
    date: "25 January 2021",
    price: "+$2,500",
    colour: "bg-[#E7EDFF]",
  },
  {
    id: 3,
    icon: assets.three,
    cardType: "Jemi Wilson",
    date: "21 January 2021",
    price: "+$5,400",
    colour: "bg-[#DCFAF8]",
  },
];

export default function Transactions() {
  return (
    <div className=" w-full ">
      <h2 className="text-lg font-bold ">Recent Transactions</h2>
      <div className="space-y-3 bg-white shadow rounded-xl h-60">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className=" p-3 rounded-lg flex items-center gap-3  "
          >
            <div
              className={`border w-8 h-8 flex justify-center items-center rounded-full ${transaction.colour}`}
            >
              <Image
                src={transaction.icon}
                alt="icons"
                width={20}
                height={20}
              />
            </div>
            <div className="grid flex-1">
              <span className="text-sm font-medium">
                {transaction.cardType}
              </span>
              <span className="text-xs text-gray-500">{transaction.date}</span>
            </div>
            <span
              className={`text-sm font-bold ${
                transaction.price.startsWith("-")
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {transaction.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
