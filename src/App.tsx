import { Collaboration, Header, Hero, Services } from './components'
import Benefits from './components/Section/Benefits/Benefits'

function App() {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
      </div>
    </>
  )
}

export default App
