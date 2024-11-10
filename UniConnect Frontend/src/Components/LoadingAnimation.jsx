// LoadingAnimation.js
import React from 'react';

const LoadingAnimation = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex space-x-2">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div
                        key={index}
                        className={`w-4 h-4 bg-blue-500 rounded-full animate-bounce`}
                        style={{
                            animationDelay: `${index * 0.2}s`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default LoadingAnimation;