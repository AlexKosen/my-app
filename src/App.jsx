import AppLayout from "./components/layouts/AppLayout";
import { CryptoContextProvider } from "./context/crypto-context";


function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  );
}

export default App;
