import { LoadingProvider } from "./contexts/LoadingContext";
import { MainPage } from "./pages/Main/MainPage";

function App() {
  return (
    <LoadingProvider>
      <div className="w-screen h-screen flex justify-center items-center bg-gray-900">
        <MainPage data-testid="main-page-component" />
      </div>
    </LoadingProvider>
  );
}

export default App;
