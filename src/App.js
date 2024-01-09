import React from 'react'
import OnclickCompo from './HOC/OnclickCompo'
import OnmouseCompo from './HOC/OnmouseCompo'
import OnkewydownCompo from './HOC/OnkewydownCompo'

const App = () => {
  return (
    <div>
      <OnclickCompo />
      <OnmouseCompo />
      <OnkewydownCompo />
    </div>
  )
}

export default App
