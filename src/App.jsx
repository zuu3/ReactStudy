import { useState } from 'react'
import MapTest1 from './MapTest1'
import MapTest2 from './MapTest2'
import PackingList from './ContitionJSX'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <MapTest1 /> */}
      {/* <MapTest2 /> */}
      <PackingList />
    </div>
  )
}

export default App
