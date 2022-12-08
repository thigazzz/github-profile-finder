import { MainPage } from "./pages/Main/MainPage"

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-800">
      <MainPage data-testid='main-page-component'/>
    </div>
  )
}

export default App
