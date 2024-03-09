import {
  Benefits,
  Collaboration,
  Footer,
  Header,
  Hero,
  Pricing,
  Roadmap,
  Services
} from './components'

function App() {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
    </>
  )
}

export default App
