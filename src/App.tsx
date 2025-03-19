// import Todo from "./components/Todo"

import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <div>
      {/* <Todo /> */}
      <Outlet />
    </div>
  )
}

export default App