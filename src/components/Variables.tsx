import React from "react";

interface Props {
    varParams: any
    onBack: () => void
}

const Variables: React.FC<Props> = ({ varParams, onBack }) => {
    const saveVar = (e: any) => {
        if (e.key === 'Enter') {
            console.log(e.target.value);
        }
    }

    return (
        <>
            <div className="flex flex-col sm:rounded-md md:min-w-[30vw]">
                <div className="md:min-w-[30vw] sm:min-w-[70vw] ">
                    <button onClick={onBack} className="inline-flex gap-2 items-center my-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path></svg>
                        Go back
                    </button>
                </div>
                <div className="overflow-hidden  bg-white px-4 py-4 sm:px-4 w-4ull">
                    <h3 className="text-2xl font-medium leading-6 text-gray-900">Variable params</h3>
                    <hr className="w-full border-[0.1px] border-gray-400 mt-2"></hr>
                    <ul className="divide-y divide-gray-200 pl-0" role="list" >
                        {varParams.type == "indicator" ?
                            <div>
                                <h3 className="text-lg font-medium leading-6 my-4 text-gray-900 uppercase" >{varParams.study_type}</h3>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">{varParams.parameter_name}</label>
                                    <div className="mt-1.5">
                                        <input type="tel" onKeyDown={saveVar} name="param_value" id="param_value" max="99" min="1" className="block w-full rounded-md border-[0.1px] border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-3" placeholder="period value" defaultValue={varParams.default_value} />
                                    </div>
                                </div>
                            </div> :
                            varParams.values.map((itm: any, idx: number) => (
                                <li key={idx} className="flex py-2">
                                    <p className="font-medium text-gray-900">{itm}</p>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Variables