import React from "react";
import { Spinner } from "reactstrap";

const Loading: React.FC<any> = () => {
    return (
        <>
            <div className="bg-gray-200 py-6 gap-x-5 flex items-center h-screen justify-center">
                <Spinner
                    color="primary"
                    size="sm"
                    type="grow"
                />
                <Spinner
                    color="primary"
                    size="sm"
                    type="grow"
                />
                <Spinner
                    color="primary"
                    size="sm"
                    type="grow"
                />
            </div>
        </>
    )
}

export default Loading