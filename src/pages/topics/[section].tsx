import { useParams } from 'react-router-dom'

const NewsSection = () => {
  const { section } = useParams()
  return <div>{section}</div>
}

export default NewsSection
