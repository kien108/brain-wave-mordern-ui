import { Header, Hero } from './components'
import Benefits from './components/Section/Benefits/Benefits'

function App() {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />
        <Benefits />
      </div>
    </>
  )
}

export default App
