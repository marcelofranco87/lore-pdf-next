import { IconHome, IconUser, IconPrinter, IconFile } from '@tabler/icons-react'
import MenuItem from './MenuItem'

export default function Menu() {
  return (
    <aside className="w-72 bg-purple-800 h-screen">
      <nav className="flex flex-col gap-1 py-7">
        <MenuItem icone={IconHome} texto="Início" url="/" />
        <MenuItem icone={IconUser} texto="Pacientes" url="/pacientes" />
        <MenuItem icone={IconFile} texto="Receitas" url="/receitas" />
        <MenuItem
          icone={IconPrinter}
          texto="Gerar Prescrição"
          url="/gerarprescricao"
        />
      </nav>
    </aside>
  )
}
