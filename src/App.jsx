import Header from "./components/Header"
import lights from "./images/lights.svg"
import avatar from "./images/avatar.mp4"

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
        <img src={lights} className="absolute top-[-60px] w-full z-[-1] bg-cover" alt=""/>
        
        <section className="h-dvh flex flex-col items-center justify-between">
          <div className="flex flex-col items-center gap-5 w-5/6">
            {/* <img src="" alt="" /> */}
            {/* Text Presentation */}
            <div className="flex flex-col items-center pt-[12dvh]">
              <h1 className="font-monoton leading-[75px] text-[11.71vw] md:text-8xl text-[#7799B0]">Olá! Eu sou<br/><span className="text-[11.5dvh] max-[320px]:text-6xl md:text-9xl after:content-['Frontend'] after:text-[0.7rem] relative after:font-sans after:px-[5px] after:py-[2px] after:border-[#C0C0C0] after:border-2 after:rounded-md after:uppercase after:font-bold after:relative after:bottom-[50px] after:text-[#C0C0C0] text-[#00C6C6]">João</span></h1>
              <p className="text-white text-base max-[320px]:hidden">📍Belo Horizonte, MG. Desenvolvedor FrontEnd e UI Design, com foco em Figma, ReactJS e TypeScript.</p>
            </div>

            {/* Animation Presentation */}
            <div className="grid place-items-center xl:w-96">
              <video autoPlay loop muted className="rounded-3xl">
                <source src={avatar} />
              </video>
            </div>
          </div>

          <div className="text-3xl h-12">👇</div>
          
        </section>

        <section className="h-dvh w-full">
        </section>

      </main>
    </>
  )
}

export default App
