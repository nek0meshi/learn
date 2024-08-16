import { useQuery, gql } from '@apollo/client'
import { List, ListItem, Container } from '@mui/material'
import './App.css'

interface Task {
  id: string
  title: string
  status: string
}

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
    <Container>
      <h1>TODO List</h1>
      {error && <div>error</div>}
      {loading && <div>is loading...</div>}
      <List>
        {data?.tasks.map((task: Task) => (
          <ListItem key={task.id}>{task.title}</ListItem>
        ))}
      </List>
    </Container>
  )
}

export default App
