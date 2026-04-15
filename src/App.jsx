import Header from './components/Header'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Sidebar: full width on mobile, fixed on desktop */}
        <aside className="w-full lg:w-72 xl:w-80 bg-slate-900 flex-shrink-0 lg:sticky lg:top-[65px] lg:self-start lg:max-h-[calc(100vh-65px)] lg:overflow-y-auto">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 p-5 lg:p-8 space-y-5 lg:space-y-6 max-w-4xl">
          <About />
          <Experience />
          <Education />
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default App
