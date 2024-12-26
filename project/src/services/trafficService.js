import axios from 'axios';

const TRANCO_API_URL = 'https://tranco-list.eu/api/ranks/domain';

export async function getTrafficData(url) {
  try {
    const domain = new URL(url).hostname;
    const response = await axios.get(`${TRANCO_API_URL}/${domain}`);
    
    // Convert Tranco rank to estimated monthly visits
    // Using a simplified logarithmic model
    const rank = response.data.rank || 0;
    const estimatedVisits = rank > 0 ? Math.floor(10000000 / Math.log(rank + 100)) : 0;
    
    return {
      rank,
      visits: estimatedVisits,
      source: 'Tranco List'
    };
  } catch (error) {
    console.error('Traffic data error:', error);
    return {
      rank: null,
      visits: 0,
      source: 'Tranco List',
      error: 'Could not fetch traffic data'
    };
  }
}