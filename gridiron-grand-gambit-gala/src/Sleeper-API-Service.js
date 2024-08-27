

export const fetchLeague = async () => {
    
    const response = await fetch(`https://api.sleeper.app/v1/league/1052419814330904576/users`, {
        headers: {
            'accept': 'application/json', // Adjust the 'accept' header as needed
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch league info');
    }

    const data = await response.json();
    return data;
};

export const fetchUser = async (user_id) => {
    const response = await fetch(`https://api.sleeper.app/v1/user/${user_id}`, {
        headers: {
            'accept': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch user info for user_id: ${user_id}`);
    }

    const data = await response.json();
    return data; // This includes `display_name` and `avatar`
};



export const fetchDraft = async () => {
    
    const response = await fetch(`https://api.sleeper.app/v1/league/1052419814330904576/drafts`, {
        headers: {
            'accept': 'application/json', // Adjust the 'accept' header as needed
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch league info');
    }

    const data = await response.json();
    return data;
};


export const fetchDraftPicks = async () => {
    
    const response = await fetch(`https://api.sleeper.app/v1/draft/1099448189066850304/picks`, {
        headers: {
            'accept': 'application/json', // Adjust the 'accept' header as needed
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch league info');
    }

    const data = await response.json();
    return data;
};