const axios = require('axios');

const BASE_URL = 'http://20.244.56.144/evaluation-service/logs';
const AUTH_TOKEN = process.env.AFFORDMED_AUTH_TOKEN; 


const Log = async (stack, level, logPackage, message) => {
    try {
        const response = await axios.post(
            BASE_URL,
            {
                stack,
                level,
                package: logPackage,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${AUTH_TOKEN}`
                }
            }
        );
        console.log("Log sent successfully:", response.data.message);
    } catch (error) {
        console.error("Failed to send log:", error.message);
    }
};

module.exports = { Log };
