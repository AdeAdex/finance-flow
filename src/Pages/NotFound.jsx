import { buttonData } from "../../buttonData"
import Button from "../Components/Button"
import Button2 from "../Components/Button2"
import { Link } from "react-router-dom"

// import React from 'react'

const NotFound = () => {
  return (
    <div className="bg-[#0c0929] font-sans ">
        <div className="text-center font-bold text-[#0328EE] text-[120px] lg:text-[180px] ">
            404
        </div>

        <div className="text-center text-white text-[28px] lg:text-[42px] font-bold ">
          Page Not Found
        </div>

        <div className="text-center lg:w-[550px] mx-auto text-white text-[16px] lg:text-[18px] p-5 ">
          The page you&apos;re looking for can&apos;t be found. Double-check the URL and try again. Or click the button below.
        </div>

        <div className="block lg:flex text-center mx-auto justify-center p-10" >
          <div className="mb-3 lg:mb-0 lg:mr-5" >
            {buttonData.slice(1, 2).map((buttonData, idx) => (
                <Button key={idx} name={buttonData.name} />
              ))}
          </div>
          <div className="mt-3 lg:mt-0" >
            <Link to={"/"} >
              {buttonData.slice(3).map((buttonData, idx) => (
                <Button2 key={idx} name={buttonData.name} />
              ))}
            </Link>
          </div>
        </div>
    
    </div>
  )
}

export default NotFound