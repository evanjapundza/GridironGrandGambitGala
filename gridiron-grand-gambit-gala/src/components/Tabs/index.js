import React, { useState } from "react";
import DraftPicks from "../DraftPicks";

export default function Tabs({draftPicks, userData}) {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="w-full h-full">
            <div className="flex justify-center p-4">
                <button 
                    className={`p-2 ${activeTab === "tab1" ? "border-b-4 border-blue-500" : ""}`} 
                    onClick={() => handleTabClick("tab1")}
                >
                    League Info
                </button>
                <button 
                    className={`p-2 ${activeTab === "tab2" ? "border-b-4 border-blue-500" : ""}`} 
                    onClick={() => handleTabClick("tab2")}
                >
                    Draft Info
                </button>
                <button 
                    className={`p-2 ${activeTab === "tab3" ? "border-b-4 border-blue-500" : ""}`} 
                    onClick={() => handleTabClick("tab3")}
                >
                    Draft Picks
                </button>
            </div>

            <div className="p-4">
                {activeTab === "tab1" && (
                    <div>
                        <h2>League Information</h2>
                        {/* Render league info here */}
                    </div>
                )}
                {activeTab === "tab2" && (
                    <div>
                        <h2>Draft Information</h2>
                        {/* Render draft info here */}
                    </div>
                )}
                {activeTab === "tab3" && (
                    <div>
                        <DraftPicks draftPicks={draftPicks} userMap={userData}/>
                        {/* Render draft picks info here */}
                    </div>
                )}
            </div>
        </div>
    );
}
