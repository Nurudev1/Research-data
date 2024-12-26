import axios from 'axios';
import 'dotenv/config';

const TWITTER_API_KEY = process.env.TWITTER_API_KEY;
const REDDIT_API_KEY = process.env.REDDIT_API_KEY;

export async function getTwitterPosts(query) {
  try {
    const response = await axios.get('https://api.twitter.com/2/tweets/search/recent', {
      headers: {
        'Authorization': `Bearer ${TWITTER_API_KEY}`
      },
      params: {
        query: query,
        max_results: 10
      }
    });
    return response.data.data || [];
  } catch (error) {
    console.error('Twitter API error:', error);
    return [];
  }
}

export async function getRedditPosts(query) {
  try {
    const response = await axios.get(`https://www.reddit.com/search.json?q=${encodeURIComponent(query)}&limit=10`, {
      headers: {
        'Authorization': `Bearer ${REDDIT_API_KEY}`
      }
    });
    return response.data.data.children || [];
  } catch (error) {
    console.error('Reddit API error:', error);
    return [];
  }
}