import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

const App = () => (
  <>
    <Welcome />
    <div className="min-h-screen">
      <Services />
      <Transactions />
    </div>
  </>
);

export default App;
