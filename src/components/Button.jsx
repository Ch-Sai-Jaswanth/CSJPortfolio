import React from "react";
import { Tilt } from "react-tilt";

const Button = () => {
    return (
        <div className="inset-0 flex justify-end relative">
            <Tilt className="Tilt" options={{max: 25, speed:400}}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 bg-clip-padding px-4 rounded-full
        font-bold shadow-md shadow-black">
                    <span>Click me</span>
                </button>
            </Tilt>
        </div>
    )
}

export default Button;