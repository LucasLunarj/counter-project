import { useState } from "react"
//Components
import { Love } from "./Love";

export const Counter = () => {
    const [switcher, setSwitcher] = useState(false)
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(count + 1);
    const resetCounter = () => setCount(0);
    const handleSecret = () => {
        switcher === false ? setSwitcher(true) : setSwitcher(false)
        console.log(switcher)
    }


    return (
        <div className="text-white  ">

            <div className="flex flex-col items-center gap-20">
                <h1 className="text-7xl " onClick={handleSecret}>Counter</h1>

                <p className="text-6xl text-teal-400">{count}</p>

                <div className="flex gap-4">
                    <button className="border-green-900 border-solid border rounded-lg w-28 text-base hover:border-green-400" onClick={handleClick}>Click Here</button>
                    <button className="border-red-900 border-solid border rounded-lg w-28 hover:border-red-400 " onClick={resetCounter}>Reset</button>
                </div>
                <p>{switcher === true ? <Love /> : null}</p>
            </div>
        </div>
    )
}