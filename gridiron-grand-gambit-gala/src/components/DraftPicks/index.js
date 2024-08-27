import React from "react";

const teamColors = {
    QB: "bg-red-500",
    RB: "bg-blue-500",
    WR: "bg-green-500",
    TE: "bg-yellow-500",
    K: "bg-purple-500",
    DEF: "bg-gray-500",
};

export default function DraftPicks({ draftPicks, userMap }) {
    // Group picks by picked_by (user)
    const picksByUser = draftPicks.reduce((acc, pick) => {
        if (!acc[pick.picked_by]) acc[pick.picked_by] = [];
        acc[pick.picked_by].push(pick);
        return acc;
    }, {});

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-center mb-4">Draft Board</h2>
            {/* Container with horizontal scroll on mobile */}
            <div className="overflow-x-auto">
                {/* Flexbox for horizontal scrolling on mobile */}
                <div className="flex md:grid md:grid-cols-12 gap-2">
                    {/* Render each user's column */}
                    {Object.keys(picksByUser).map((userId, index) => (
                        <div key={index} className="p-2 min-w-[150px] md:min-w-0">
                            {/* Display the user's avatar and name at the top */}
                            <div className="flex items-center justify-center font-bold mb-2 space-x-2">
                                {/* User Avatar */}
                                {userMap[userId]?.avatar ? (
                                    <img
                                        src={`https://sleepercdn.com/avatars/thumbs/${userMap[userId].avatar}`}
                                        alt={userMap[userId]?.displayName || "Unknown User"}
                                        className="w-6 h-6 rounded-full"
                                    />
                                ) : (
                                    <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                                )}
                                {/* User Display Name with ellipsis */}
                                <span className="max-w-[100px] text-xs">{userMap[userId]?.displayName || "Unknown User"}</span>
                            </div>
                            {/* Render all the picks for this user */}
                            {picksByUser[userId].map((pick, pickIndex) => (
                                <div
                                    key={pickIndex}
                                    className={`p-2 h-[60px] sm:h-[100px] w-full sm:w-[100px] rounded-md text-white shadow-md mb-2 ${teamColors[pick.metadata.position] || "bg-gray-700"}`}
                                >
                                    <p className="text-xs">
                                        {pick.metadata.position} {pick.metadata.team} {pick.round}.{pick.pick_no}
                                    </p>
                                    <h3 className="font-semibold text-sm">
                                        {pick.metadata.first_name}
                                    </h3>
                                    <h3 className="font-semibold text-sm">
                                        {pick.metadata.last_name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
