import AppRouter from "./router/AppRouter.jsx";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      <AppRouter/>
      <Toaster/>
    </div>
  )
}

export default App
