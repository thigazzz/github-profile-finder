import { RouterProvider } from "react-router-dom";
import { LoadingProvider } from "./contexts/LoadingContext";
import { routes } from "./routes/routes";

function App() {
  return (
    <LoadingProvider>
      <div className="w-screen h-screen flex justify-center items-center bg-gray-900">
        <RouterProvider router={routes} />
      </div>
    </LoadingProvider>
  );
}

export default App;
