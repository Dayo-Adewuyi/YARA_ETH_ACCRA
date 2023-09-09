const axios = require('axios');

// Define the GraphQL query
const query = `
  query {
    transfers(where: { token: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" }) {
      id
      from
      to
      value
      transaction {
        id
        timestamp
      }
    }
  }
`;

// The URL of the subgraph endpoint for USDC on the Ethereum mainnet (replace with the correct URL)
const subgraphUrl = 'https://api.thegraph.com/subgraphs/name/dayoadewuyi/usdc';

// Define a function to make the GraphQL request
async function fetchUSDCTransfers() {
  try {
    const response = await axios.post(subgraphUrl, { query });
    const data = response.data.data;

    // Process the USDC transfer data here
    console.log('USDC Transfer Events:', data.transfers);
  } catch (error) {
    console.error('Error fetching USDC transfer events:', error);
  }
}

// Call the function to fetch USDC transfer events
fetchUSDCTransfers();
