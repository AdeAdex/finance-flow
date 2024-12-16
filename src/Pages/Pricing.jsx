// import React from 'react'
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon3.png";
import icon3 from "../assets/icon2.png";
import icon4 from "../assets/icon4.png";
import { cardSixData } from "../../cardSixData";
import Card6 from "../Components/Card6";

const Pricing = () => {
  return (
    <div className="bg-gray-900 text-white p-5 ">
      <div className="text-left lg:text-center font-sans lg:w-[586px] mx-auto  ">
        <p className="text-[38px] lg:text-[66px] font-bold ">Pricing</p>
        <p className="font-normal text-[16px] lg:text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aenean dis placerat. Scelerisque
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between lg:px-32 py-5 lg:py-20 ">
        <p className="flex pt-5 ">
          <img src={icon1} alt="" />
          <span className="pl-5 pt-4 ">Send & Receive</span>
        </p>
        <p className="flex pt-5 ">
          <img src={icon2} alt="" />
          <span className="pl-5 pt-4 ">Trading Charts</span>
        </p>
        <p className="flex pt-5 ">
          <img src={icon3} alt="" />
          <span className="pl-5 pt-4 ">Wallet</span>
        </p>
        <p className="flex pt-5 ">
          <img src={icon4} alt="" />
          <span className="pl-5 pt-4 ">Real Time Trading</span>
        </p>
      </div>

      <div className="lg:px-32 block lg:flex gap-5 space-y-5 lg:space-y-0 mb-32 ">
        {cardSixData.map((Data, idx) => (
          <Card6
            key={idx}
            level={Data.level}
            amount={Data.amount}
            desc={Data.desc}
            title={Data.title}
            list1={Data.list1}
            list2={Data.list2}
            list3={Data.list3}
            list4={Data.list4}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
