import { useQuery, gql } from '@apollo/client'
import { useEffect, useState } from 'react'
import { liff } from '@line/liff'
import { List, ListItem, Container } from '@mui/material'
import './App.css'

// TODO: @line/liffから直接取得したい
type Profile = Awaited<ReturnType<typeof liff.getProfile>>

interface Task {
  id: string
  title: string
  status: string
}

function login() {
  liff.login()
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

  const [profile, setProfile] = useState<Profile | null>(null)

  async function loadProfile() {
    try {
      const profile = await liff.getProfile()
      setProfile(profile)
    } catch (e) {
      console.error(e)
    }
  }

  async function setUpLiff() {
    try {
      await liff.init({
        liffId: process.env.LIFF_ID || '',
      })

      login()

      loadProfile()
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(
    () => {
      void setUpLiff()
    },
    []
  )

  return (
    <Container>
      <section>
      <h1>Profile</h1>
        <div>{profile?.displayName}</div>
      </section>
      <section>
        <h1>TODO List</h1>
        {error && <div>error</div>}
      {loading && <div>is loading...</div>}
      <List>
        {data?.tasks.map((task: Task) => (
          <ListItem key={task.id}>{task.title}</ListItem>
        ))}
        </List>
      </section>
    </Container>
  )
}

export default App
