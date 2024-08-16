import { useQuery, gql } from '@apollo/client'
import './App.css'

function App() {
  const { loading, error, data } = useQuery(gql`
    {
      tasks {
        id,
        title,
        status
      }
    }
  `)

  return (
    <div>
      Hello World
      {error && <div>error</div>}
      {loading && <div>is loading...</div>}
      {data && data.tasks.map((task: any) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  )
}

export default App
