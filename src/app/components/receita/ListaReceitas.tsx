import type { Receita } from '@prisma/client'

import LinhaReceita from './LinhaReceita'

export interface ListaReceitasProps {
  receitas: Receita[]
  onClick?: (receita: Receita) => void
  onKeyDown?: (receita: Receita) => void
  pacienteId: string
}

export default function ListaReceitas(props: ListaReceitasProps) {
  return (
    <div className="flex flex-col gap-4">
      {props.receitas
        .filter(receita => receita.pacienteId === props.pacienteId)
        .map((receita: Receita) => {
          return (
            <LinhaReceita
              key={receita.id}
              receita={receita}
              onClick={props.onClick}
              onKeyDown={props.onKeyDown}
            />
          )
        })}
    </div>
  )
}
