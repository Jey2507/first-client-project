import Header from '../Header/Header.jsx'
import css from "../App/App.module.css"
import Hero from '../Hero/Hero.jsx'
import AboutMe from '../AboutMe/AboutMe.jsx'

function App() {

  return (
    <div className={css.mainDiv}>
      <Header />
      <Hero />
      <AboutMe />
    </div>
  )
}

export default App
