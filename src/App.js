import { ToastContainer } from "react-toastify";
import AppRouter from "./AppRouter";

function App() {
   return (
      <div className="App">
         <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
         />
         <AppRouter />
      </div>
   );
}

export default App;
