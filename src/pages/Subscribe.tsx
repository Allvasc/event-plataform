import { Logo } from "../components/Logo"

const Subscribe = () => {
    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo />
                    
                    <h1 className="mt-8 text-[2.5rem] leading-tight">Construa uma aplicação do zero, com React JS</h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
                </div>

                <div className="">

                </div>

            </div>
            <img src="/src/assets/Group 7735.png" alt="" className="mt-10" />
        </div>
    )
}

export default Subscribe