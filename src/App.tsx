import { gql, useQuery } from "@apollo/client"


const GET_LESSIONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{lessons : lesson[] }>(GET_LESSIONS_QUERY)

  console.log(data)

  return (
    <div>
      <ul>
        {data?.lessons.map(lesson => {
          return <li key={lesson.id}>{lesson.title}</li>
        })}
      </ul>
    </div>
  )
}

export default App
