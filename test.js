import test from 'ava'

test('Server responds with 200 on port 4321', async t => {
  const response = await fetch('http://localhost:4321')
  t.is(response.status, 200, 'Server did not respond with a 200 status code')
})
