import Transactions from "./Transactions/page";
import CreditCards from "./CreditCards/page";
import Accounts from "./Accounts/page";
import Investments from "./Investments/page";
import Services from "./Services/page";
import Loans from "./Loans/page";

export default function Overview() {
  return (
    <div className="md:w-full scrollbar-hide w-full">
      <div className="flex flex-col md:justify-center md:items-center md:flex-row gap-4 md:h-72">
        <div className="md:w-[60%] w-screen ">
          <CreditCards />
        </div>
        <div className="md:w-[40%]  w-screen">
          <Transactions />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4 md:h-80">
        <div className="md:w-[60%] w-screen">
          <h2 className="text-lg font-bold mb-3">Weekly Activity</h2>
          <Accounts />
        </div>
        <div className="md:w-[40%] w-screen ">
          <h2 className="text-lg font-bold mb-3">Expense Statistic</h2>
          <Investments />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full md:h-80 gap-4 md:mt-16">
        <div className="md:w-[40%] w-screen h-full">
          <h2 className="text-lg font-bold mb-5">Quick transfer</h2>
          <Services />
        </div>
        <div className="md:w-[60%] w-screen">
          <h2 className="text-lg font-bold mb-5">Balance History</h2>
          <Loans />
        </div>
      </div>
    </div>
  );
}
