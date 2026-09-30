import Header from './Component/Header/Header'
import Main_left from './Component/Main_left/Main_left'
import Main_right from './Component/Main_right/Main_right'
import Footer from './Component/Footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="main-container">
        <Main_left />
        <Main_right />
      </main>
      <Footer />
    </>
  )
}

export default App
