/* eslint-disable no-unused-vars */
import { useState } from "react";
import { CircleProgressBar } from "./components/CircleProgressBar";
import { useEffect } from "react";

const App = () => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setPercentage(85);
        }, 500);
    }, []);

    return (
        <div>
            <CircleProgressBar percentage={percentage} circleWidth="250" radius={100} />
            <input
                type="range"
                min={1}
                max={100}
                step={1}
                value={percentage}
                onChange={(even) => setPercentage(even.target.value)}
                className="w-[30vw] mt-4 hidden"
            />
        </div>
    );
};
export default App;
