import React from "react";

type Details = {
    name: string
    tag: string
    color: string
    id: number
    criteria: Array<unknown | any>
}

interface Props {
    details: Details
    isVariables?: boolean
    onBack: () => void
}
const Detail: React.FC<Props> = ({ details, onBack }) => {

    const replaceStr = (str: string, variable: any, criteriaIdx: number) => {
        for (const key in variable) {
            if (variable.hasOwnProperty(key)) {
                const tobeReplace = variable[key].type == 'indicator' ?
                    `<a href="/variables/${details.id}/${key}/${criteriaIdx}" >${variable[key].default_value}</a>` :
                    `<a href="/variables/${details.id}/${key}/${criteriaIdx}" >${variable[key].values[0]}</a>`
                str = str.replace(key, tobeReplace);
            }
        }
        return str
    }

    return (
        <>
            <div className="bg-gray-200 p-6 gap-x-5 flex flex-col items-center h-screen w-screen max-w-max justify-center">
                <div className="md:min-w-[30vw] sm:min-w-[70vw] w-full">
                    <button onClick={onBack} className="inline-flex gap-2 items-center my-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path></svg>
                        Go back
                    </button>
                </div>
                <div className="overflow-hidden bg-white shadow sm:rounded-md md:min-w-[30vw] px-4 py-4 sm:px-4 w-4ull">
                    <h3 className="text-2xl font-medium leading-6 text-gray-900">{details.name}</h3>
                    <label className={`bg-${details.color}-100 text-${details.color}-800 inline-flex rounded-full px-2 text-xs font-semibold leading-5`}>
                        {details.tag}
                    </label>
                    <hr className="w-full border-[0.1px] border-gray-400 mt-2" />
                    <ul className="divide-y divide-gray-200 pl-0" role="list">
                        {details.criteria.map((item, idx) => (
                            <li key={idx} className="flex py-2">
                                {item.type == 'variable' ?
                                    <p dangerouslySetInnerHTML={{ __html: replaceStr(item.text, item.variable, idx) }} className="font-medium text-gray-900"></p> :
                                    <p className="font-medium text-gray-900">{item.text}</p>
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Detail