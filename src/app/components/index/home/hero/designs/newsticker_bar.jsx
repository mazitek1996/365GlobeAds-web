


import React, { useState, useEffect } from 'react';

const NewsTicker = () => {
    const [tickerPosition, setTickerPosition] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Update ticker position by moving it left
            setTickerPosition(prevPosition => prevPosition - 1);
        }, 50); // Adjust the interval for the desired animation speed

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-hidden bg-gray-900 text-white">
            <div className="flex space-x-8" style={{ transform: `translateX(${tickerPosition}px)` }}>
                {/* Repeat this element for each news item */}
                <div className="whitespace-nowrap">
                    <span className="font-semibold">Breaking News:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, doloribus.
                </div>
                <div className="whitespace-nowrap">
                    <span className="font-semibold">Latest Update:</span> Consectetur adipisicing elit. Ipsum, doloribus. Lorem ipsum dolor sit amet.
                </div>
                {/* Add more news items as needed */}
            </div>
        </div>
    );
};

export default NewsTicker;
