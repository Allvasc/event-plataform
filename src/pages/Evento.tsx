import Header from "../components/Header"
import Video from "../components/Video"
import SideBar from "../components/SideBar"
import { useParams } from "react-router-dom"

const Evento = () => {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video /> : <div className="flex-1" />}
        <SideBar />
      </main>
    </div>
  )
}

export default Evento