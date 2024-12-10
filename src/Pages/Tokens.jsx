import { Link } from "react-router-dom"
import { tableData } from "../../tableData"
// import React from 'react'

const Tokens = () => {
    return (
        <div className="bg-gray-900 p-5">
            <div className="text-white font-sans lg:w-[586px] mx-auto">
                <p className="text-left lg:text-center text-[38px] lg:text-[66px] font-bold">
                    Tokens
                </p>

                <p className="text-left lg:text-center font-normal text-[16px] lg:text-[18px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque
                </p>
            </div>

            <div className="text-white py-5 lg:p-10 overflow-x-auto">
                {tableData.map((data, idx) => (
                    <table key={idx} className="mx-auto table-fixed lg:w-[1270px] mb-5">
                        <thead>
                            <tr className="text-left">
                                {data.title.map((title, index) => (
                                    <th key={index} className="p-3 border-b-2 border-gray-800">{title}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.coins.map((coin, index) => (
                                <tr key={index} className="">
                                    <td className="p-5 border-b-2 border-gray-800">
                                        <img src={coin.icon} alt={coin.name} className="inline-block w-6 h-6 mr-2" />
                                        {coin.name}
                                    </td>
                                    <td className="p-5 border-b-2 border-gray-800 line-clamp-2 lg:line-clamp-none ">{data.desc}</td>
                                    <td className="p-5 border-b-2 border-gray-800">{data.marketCap}</td>
                                    <td className="p-5 border-b-2 border-gray-800">{data.volume}</td>
                                    <td className="p-5 border-b-2 border-gray-800 underline">
                                        <Link to={'/'}>{data.website}</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ))}
            </div>
        </div>
    )
}

export default Tokens