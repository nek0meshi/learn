const SERVER_URL = 'http://localhost:8000/graphql';

async function getHelloWorld() {
  const query = '{hello}'

  await queryRequest(new URLSearchParams({ query }))
}

async function queryRequest(queryParams) {
  return await request({}, queryParams)
}

async function request(options, queryParams = '') {
  try {
    const res = await fetch(SERVER_URL + (queryParams ? '?' + queryParams : ''), options)

    if (!res.ok) {
      const data = await res.text()

      throw new Error(data)
    }

    const data = await res.json()

    console.log(JSON.stringify(data, null, 2))
  } catch (error) {
    console.error(error)

    throw error
  }
}

void getHelloWorld()
