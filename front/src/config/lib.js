module.exports = {
    PORT: 'http://localhost:3200',
    fetchMetadata: (data) => {
        return {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            // mode: "no-cors", // not advised, just to disable cors validation
        }
    },
}