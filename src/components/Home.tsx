import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getStockDetails } from "../remote";
import Loading from "./loading";
import gotoIcn from '../assets/goto_svg.svg'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Detail from "./Detail";
import Variables from "./Variables";

interface Props {

}

const Home: React.FC<Props> = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [varParams, setVarParams] = useState<any>({})
    const [currStockDetails, setCurrStockDetails] = useState<any>({})

    const { data, status, error } = useQuery('getDetails', { queryFn: getStockDetails})

    const isShowDetailsRoute = location.pathname.includes('details')
    const isVariableDetailsRoute = location.pathname.includes('variables')
    const isHomeRoute = location.pathname.includes('home')

    const handleClick = (id: number) => {
        const currDetails = data.find((itm: any) => itm.id == id)
        setCurrStockDetails(currDetails)
        navigate(`/details/${id}`)
    }

    const { id, key, criteriaIdx = 0 } = useParams()

    // bootstrap
    useEffect(() => {
        if (isShowDetailsRoute && !currStockDetails?.name) {
            const currDetails = data && data.length && data.find((itm: any) => itm.id == id)
            setCurrStockDetails(currDetails)
        }

        if (isVariableDetailsRoute && !currStockDetails.name) {
            const currDetails = data && data.length && data.find((itm: any) => itm.id == id)
            const currentParams = currDetails?.criteria?.[criteriaIdx].variable[`${key}`]            
            setVarParams(currentParams)
        }

    }, [isHomeRoute, isShowDetailsRoute, isVariableDetailsRoute, data])

    if (status == 'loading') return <Loading />

    if (status == 'error') return <h1>something went wrong</h1>
    return (
        <>
            <div className="bg-gray-200 flex items-center h-screen justify-center">
                {isHomeRoute && <ul className="max-w-lg mx-auto divide-y pl-0 divide-gray-200 rounded-sm">
                    {data && data.length !== 0 &&
                        data.map((item: any, idx: number) => (
                            <li data-id={item.id} key={idx}>
                                <div onClick={() => handleClick(item.id)} className="shadow-md px-4 py-2 sm:px-6 flex items-center hover:bg-violet-600 bg-white cursor-pointer">
                                    <p className="truncate font-medium text-indigo-600 mb-0 py-2 min-w-0 flex-1 sm:flex sm:items-center sm:justify-between text-blue-600">{item.name}</p>
                                    <label className={`ml-16 flex flex-shrink-0 bg-${item.color}-100 text-${item.color}-800 inline-flex rounded-full px-2 text-xs font-semibold leading-5`} >{item.tag}</label>
                                    <img className="ml-5 flex-shrink-0 h-5 w-5 text-gray-400" src={gotoIcn} />
                                </div>
                            </li>
                        ))}
                </ul>}
                {isShowDetailsRoute && currStockDetails?.name &&
                    <Detail
                        details={currStockDetails}
                        onBack={() => navigate('/home')}
                    />}
                {isVariableDetailsRoute && varParams?.type &&
                    <Variables
                        varParams={varParams}
                        onBack={() => navigate(`/details/${id}`)}
                    />}
            </div>
        </>
    )
}

export default Home