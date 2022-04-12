import { Link } from 'react-router-dom'

const Navbar = () => {
  const sections = [
    'arts',
    ' automobiles',
    'books',
    'business',
    'fashion',
    'food',
    'health',
    'home',
    'insider',
    'magazine',
    'movies',
    'nyregion',
    'obituaries',
    'opinion',
    'politics',
    'realestate',
    'science',
    'sports',
    'sundayreview',
    'technology',
    'theater',
    'travel',
    'upshot',
    'us',
    'world'
  ]
  return (
    <nav>
      {sections.map(section => (
        <li
          key={section}
          className='inline-block min-w-fit h-15 text-sm px-4 py-2 leading-none   rounded  border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 lg:ml-6 border-2 bg-slate-400 space-x-6 '
        >
          <Link to={`${section}`}> {section} </Link>
        </li>
      ))}
    </nav>
  )
}
export default Navbar
