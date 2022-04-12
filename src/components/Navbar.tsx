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
    't-magazine',
    'travel',
    'upshot',
    'us',
    'world'
  ]
  return (
    <nav
      className=' 
      navbar navbar-expand-lg navbar-light bg-light
    '
    >
      {sections.map(section => (
        <Link
          key={section}
          className='
          nav-link
          text-dark
          mr-3
            
          
           

        '
          to={`/topics/${section}`}
        >
          {' '}
          {section}{' '}
        </Link>
      ))}
    </nav>
  )
}
export default Navbar
