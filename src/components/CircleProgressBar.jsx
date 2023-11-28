/* eslint-disable react/prop-types */
export const CircleProgressBar = ({ percentage, circleWidth, radius }) => {
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (percentage * dashArray) / 100;

    return (
        <div className="">
            <svg
                width={circleWidth}
                height={circleWidth}
                viewBox={`0 0 ${circleWidth} ${circleWidth}`}
                className="w-[30vw] "
            >
                <defs>
                    <linearGradient id="gradient">
                        <stop offset={"10%"} stopColor="#12c2e9" />
                        <stop offset={"50%"} stopColor="#c471ed" />
                        <stop offset={"100%"} stopColor="#f64f59" />
                    </linearGradient>
                </defs>
                <circle
                    cx={circleWidth / 2}
                    cy={circleWidth / 2}
                    strokeWidth="22px"
                    r={radius}
                    fill="transparent"
                    stroke="#ddd"
                />

                <circle
                    cx={circleWidth / 2}
                    cy={circleWidth / 2}
                    strokeWidth="22px"
                    r={radius}
                    fill="transparent"
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset,
                        transition: "stroke-dashoffset 1s ease 0s, stroke-dasharray 0.5s ease 0s",
                    }}
                    transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="url(#gradient)"
                />
                <text
                    x="50%"
                    y="50%"
                    dy={"0.35em"}
                    textAnchor="middle"
                    className="text-4xl font-semibold text-center"
                    fill="url(#gradient)"
                >
                    {percentage}%
                </text>
            </svg>
        </div>
    );
};
