import Header from '../Header/Header.jsx'
import css from "../App/App.module.css"
import Hero from '../Hero/Hero.jsx'
import AboutMe from '../AboutMe/AboutMe.jsx'
import SectionOneQuestion from '../SectionOneQuestion/SectionOneQuestion.jsx'

function App() {

  return (
    <div className={css.mainDiv}>
      <Header />
      <Hero />
      <AboutMe />
      <SectionOneQuestion />
    </div>
  )
}

export default App
