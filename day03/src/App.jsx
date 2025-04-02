import { useState } from 'react'
import MapTest1 from './MapTest1'
import MapTest2 from './MapTest2'
import MapTest3 from './MapTest3'
import PackingList from './ContitionJSX'
import PostList from './PostList'
import InputTest2 from './InputTest2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <MapTest1 /> */}
      {/* <MapTest2 /> */}
      {/* <PackingList /> */}
      {/* <MapTest3 /> */}
      {/* <PostList /> */}
      <InputTest2 />
    </div>
  )
}

export default App
