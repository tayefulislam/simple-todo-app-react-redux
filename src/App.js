// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import TodoLists from './Components/TodoLists';
import Footer from './Components/Footer';

function App() {
  return (
    <div
      class="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
    >
      {/* <!-- navbar --> */}
      <Navbar></Navbar>


      <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        {/* <!-- header --> */}
        <Header></Header>

        <hr class="mt-4" />

        {/* <!-- todo list --> */}
        <TodoLists></TodoLists>


        <hr class="mt-4" />

        {/* <!-- footer --> */}

        <Footer></Footer>

      </div>
    </div>
  );
}

export default App;
