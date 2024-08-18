import Header from "./components/Header"

function App() {

  return (
    <>
      <Header/>
      <div className="w-full h-dvh fixed z-0">
        <div className="bg-[rgba(64,92,217,1)] h-1/4 w-full"></div>
        <div className="bg-[rgba(167,85,218,1)] h-1/4 w-full"></div>
        <div className="bg-[rgba(228,50,91,1)] h-1/4 w-full"></div>
        <div className="bg-[rgba(242,205,110,1)] h-1/4 w-full"></div>
      </div>
      
      <main className="w-full bg-black/85 backdrop-blur-sm">
        
        <section className="h-dvh w-full">
        </section>

        <section className="h-dvh w-full">
        </section>

      </main>
    </>
  )
}

export default App
