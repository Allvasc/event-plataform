import Header from "../components/Header"
import Video from "../components/Video"
import SideBar from "../components/SideBar"

const Evento = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Video />
        <SideBar />
      </main>
    </div>
  )
}

export default Evento