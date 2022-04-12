import { useParams } from 'react-router-dom'

const NewsSection = () => {
  const { section } = useParams()
  return (
    <div className=' min-h-screen   border-2 border-gray-400  rounded-lg  shadow-lg  p-4  m-4 w-max   h-screen   '>
      {section}
    </div>
  )
}

export default NewsSection
