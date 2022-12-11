import { LoadingProvider } from "./contexts/LoadingContext";

function App() {
  return (
    <LoadingProvider>
      <div className="w-screen h-screen flex justify-center items-center bg-gray-900">
        
      </div>
    </LoadingProvider>
  );
}

export default App;
