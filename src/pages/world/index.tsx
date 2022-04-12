import { drop } from 'ramda'
import { ReactChild, ReactFragment, ReactPortal } from 'react'

// API_KEY=y2bWu8wUUqvZlPy5rL5B2TZyzmpASmxJ
// SECRET_KEY=VGOfaxeOoo4qVqTW
// APP_ID=9bf2b201-a248-4273-a751-7569e4f5a2aa
//generate random id
import useNewsQuery from '../../hooks/useAllNews'

function Index() {
  const { data } = useNewsQuery('world')

  return (
    <div
      className='flex 
    flex-col
    justify-center
    items-center
    min-h-screen

    
          
        '
    >
      {data?.results.map(
        (result: {
          title:
            | boolean
            | ReactChild
            | ReactFragment
            | ReactPortal
            | null
            | undefined
        }) => (
          <div
            key={Date.now()}
            className='    max-w-lg 
    max-h-screen 
             border-2 border-gray-400  rounded-lg  shadow-lg  p-4  m-4    '
          >
            <div>{result.title}</div>
            <div>{result.subsection}</div>
            <div>{result.section}</div>
          </div>
        )
      )}
    </div>
  )
}

export default Index

// example data
// section: "world"
// subsection: "americas"
// title: "This Beach in Mexico Is an L.G.B.T.Q. Haven. But Can It Last?"
// abstract: "The town of Zipolite has become an oasis for the queer community. But as its popularity has surged, some worry that the town’s spirit is beginning to vanish."
// url: "https://www.nytimes.com/2022/04/12/world/americas/mexico-nude-beach-playa-del-amor.html"
// uri: "nyt://article/1789a411-7a98-51c6-a6f8-f1730910fc9f"
// byline: "By Oscar Lopez and Lisette Poole"
// item_type: "Article"
// updated_date: "2022-04-12T10:00:45-04:00"
// created_date: "2022-04-12T05:00:40-04:00"
// published_date: "2022-04-12T05:00:40-04:00"
// material_type_facet: ""
// kicker: "Mexico Dispatch"
// ▶ des_facet 4 items
// 0: "Beaches"
// 1: "Travel and Vacations"
// 2: "Homosexuality and Bisexuality"
// 3: "Transgender and Transsexuals"
// org_facet: []
// per_facet: []
// ▶ geo_facet 2 items
// 0: "Mexico"
// 1: "Oaxaca (Mexico)"
// ▶ multimedia 3 items
// ▶ 0 8 items
// ▶ 1 8 items
// ▶ 2 8 items
// short_url: "https://nyti.ms/3JsqYdm"
