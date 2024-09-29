import type { Prescricao } from '@prisma/client'
import LinhaPrescricao from './LinhaPrescricao'

export interface ListaPrescricoesProps {
  prescricoes: Prescricao[]
  onClick?: (prescricao: Prescricao) => void
  onKeyDown?: (prescricao: Prescricao) => void
  pacienteId: string
}

export default function ListaPrescricoes(props: ListaPrescricoesProps) {
  return (
    <div className="flex flex-col gap-4">
      {props.prescricoes
        .filter(prescricao => prescricao.pacienteId === props.pacienteId)
        .map((prescricao: Prescricao) => {
          return (
            <LinhaPrescricao
              key={prescricao.id}
              prescricao={prescricao}
              onClick={props.onClick}
              onKeyDown={props.onKeyDown}
            />
          )
        })}
    </div>
  )
}
