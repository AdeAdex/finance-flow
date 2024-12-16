// import React from 'react'
import propTypes from "prop-types";
import { Link } from "react-router-dom";


const Card6 = ( { level, amount, desc, title, list1, list2, list3, list4 } ) => {
  return (
    <div className="bg-[#120f41] rounded-3xl p-10" >
        <div className=" bg-[#0328EE] rounded-full p-2 w-16 text-[12px] text-center hover:bg-[#0326ee6b] " >
            {level}
        </div>

        <div className="font-medium text-[30px] pt-2 " >
            {amount}
        </div>

        <div className="pt-3" >
            {desc}
        </div>
        
        <div className="pt-5" >
            <p className="text-xl" >
                {title}
            </p>
            <ul className="list-disc pl-5 text-[#0328ee] " >
                <li>
                    <p className="text-white" >{list1}</p>
                </li>
                <li>
                    <p className="text-white" >{list2}</p>
                </li>
                <li>
                    <p className="text-white" >{list3}</p>
                </li>
                <li>
                    <p className="text-white" >{list4}</p>
                </li>
                
            </ul>
        </div>
        <div className="mt-5 p-5 text-center bg-[#0328ee] rounded-full hover:bg-[#0326ee6b] ">
            <Link to={'/contact'} >
                CONTACT US
            </Link>
        </div>

    
    
    </div>
  )
}

Card6.propTypes = {
    level: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    desc: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    list1: propTypes.string.isRequired,
    list2: propTypes.string.isRequired,
    list3: propTypes.string.isRequired,
    list4: propTypes.string.isRequired,
}

export default Card6