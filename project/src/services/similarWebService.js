import axios from 'axios';
import 'dotenv/config';

const SIMILARWEB_API_KEY = process.env.SIMILARWEB_API_KEY;
const SIMILARWEB_API_URL = 'https://api.similarweb.com/v1/similar-sites';

export async function getSimilarWebsites(url) {
  try {
    const response = await axios.get(SIMILARWEB_API_URL, {
      params: { url },
      headers: {
        'api-key': SIMILARWEB_API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('SimilarWeb API error:', error);
    return null;
  }
}

export async function getTrafficData(url) {
  try {
    const response = await axios.get(`https://api.similarweb.com/v1/website/${url}/total-traffic-and-engagement/visits`, {
      headers: {
        'api-key': SIMILARWEB_API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('Traffic data error:', error);
    return null;
  }
}