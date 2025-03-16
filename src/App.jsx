import { useState } from 'react'
import MapTest1 from './MapTest1'
import MapTest2 from './MapTest2'
import MapTest3 from './MapTest3'
import PackingList from './ContitionJSX'
import PostList from './PostList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <MapTest1 /> */}
      {/* <MapTest2 /> */}
      {/* <PackingList /> */}
      {/* <MapTest3 /> */}
      <PostList />
    </div>
  )
}

export default App
