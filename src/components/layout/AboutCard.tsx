import React, { useState } from "react";
import chunkArray from "../../utils/functions/chunkArray";
import { About } from "../../utils/types/About";

const AboutCard: React.FC<{ abouts: About[] }> = ({ abouts }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const aboutChunks = chunkArray(abouts, 3);

    return (
        <>
            <div className="w-full mx-auto">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentPage * 100}%)` }}
                    >
                        {aboutChunks.map((group, index) => (
                            <div
                                key={index}
                                className="flex w-full flex-col flex-shrink-0 justify-between divide-y divide-gray-400/20"
                            >
                                {group.map((about, idx) => (
                                    <div key={idx} className="p-2 py-6 shadow-md">
                                        <p className="text-white">
                                            <span className="font-bold">{about.tag}: </span>
                                            {about.txt}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                    {aboutChunks.map((_, index) => (
                        <button
                            key={index}
                            className={`size-2 rounded-full ${index === currentPage ? "bg-white" : "bg-gray-300/50"}`}
                            onClick={() => setCurrentPage(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default AboutCard;
