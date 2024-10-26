import Header from '../Header/Header.jsx'
import css from "../App/App.module.css"
import Hero from '../Hero/Hero.jsx'

function App() {

  return (
    <div className={css.mainDiv}>
      <Header />
      <Hero />
    </div>
  )
}

export default App
