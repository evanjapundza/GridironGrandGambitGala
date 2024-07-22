

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
    console.log(data)
    return data;
};