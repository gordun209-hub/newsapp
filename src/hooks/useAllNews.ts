import axios from 'axios'
import { useQuery } from 'react-query'

const topStoriesBaseUrl = (section: string) =>
  `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=y2bWu8wUUqvZlPy5rL5B2TZyzmpASmxJ`
const getStoriesBySection = async (section: string) => {
  const { data } = await axios.get(topStoriesBaseUrl(section))
  return data
}

export default function useNewsQuery(section: string) {
  return useQuery(['post', section], () => getStoriesBySection(section))
}
