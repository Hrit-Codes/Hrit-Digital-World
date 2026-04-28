import Footer from './sections/Footer'
import MyStory from './sections/MyStory'
import Profile from './sections/Profile'
import ScrollStack from './sections/Projects'
import RecentReads from './sections/RecentReads'
import TechStack from './sections/TechStack'
import BackgroundEffects from './UI/BackgroundEffects'
import ScrollToTopButton from './UI/ScrollToTopButton'



function App() {
  return (
    <div className='w-full h-full min-h-screen relative'>

    <BackgroundEffects/>
    <main className='relative z-10'>
      {/* <HeroHeader/> */}
      {/* <Hero/> */}
      <Profile/>
      <TechStack/>
      <ScrollStack/>
      <MyStory/>
      <RecentReads/>
      <ScrollToTopButton/>
    </main>
    <Footer/>
    </div>
  )
}

export default App
