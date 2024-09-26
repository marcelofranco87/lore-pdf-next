import Pagina from './components/template/Pagina'

export default function Home() {
  return (
    <Pagina>
      <div className="flex flex-col">
        <div className="flex flex-col text-purple-800 text-3xl text-center">
          Dra Lore Campagnaro Chaves
        </div>
        <div className="flex flex-col text-purple-800 text-base text-center">
          Gerador de prescrições para impressão
        </div>
      </div>
    </Pagina>
  )
}
