import AppRouter from "./router/AppRouter.jsx";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      <AppRouter/>
      <Toaster
        toastOptions={{
          success: { className: 'alert alert-success' },
          error: { className: 'alert alert-danger' },
        }}
      />
    </div>
  )
}

export default App
