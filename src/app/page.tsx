import Pagina from './components/template/Pagina'
import Image from 'next/image'
import header from '../app/img/main_header.png'

export default function Home() {
  return (
    <Pagina>
      <div className="flex flex-col">
        <div className="container-fluid w-full">
          <Image src={header} alt="Cabeçalho" />
        </div>
      </div>
    </Pagina>
  )
}
