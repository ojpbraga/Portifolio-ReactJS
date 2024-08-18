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
        
        <section className="h-dvh w-full flex flex-col items-center justify-center relative">
          <div className="flex flex-col items-center  w-full gap-5 px-10 max-[375px]:px-5 ">
            {/* <img src="" alt="" /> */}
            {/* Text Presentation */}
            <div className=" flex flex-col items-center">
              <h1 className="text-white font-monoton leading-[75px] text-[11.71vw]">Olá! Eu sou<br/><span className="text-[5rem] max-[320px]:text-6xl">João</span></h1>
              <p className="text-white text-base max-[320px]:hidden">📍Belo Horizonte, MG. Desenvolvedor FrontEnd e UI Design, com foco em Figma, ReactJS e TypeScript.</p>
            </div>

            {/* Animation Presentation */}
            <div className="grid place-items-center">
              <video autoPlay loop muted className="rounded-3xl">
                <source src={avatar} />
              </video>
            </div>
          </div>

          <div className="text-3xl absolute bottom-2">👇</div>
          
        </section>

        <section className="h-dvh w-full">
        </section>

      </main>
    </>
  )
}

export default App
