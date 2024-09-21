import type { Prescricao } from '@/core/model/Prescricao'
import LinhaPrescricao from './LinhaPrescricao'

export interface ListaPrescricoesProps {
  prescricoes: Prescricao[]
  onClick?: (prescricao: Prescricao) => void
  onKeyDown?: (prescricao: Prescricao) => void
}

export default function ListaPrescricoes(props: ListaPrescricoesProps) {
  return (
    <div className="flex flex-col gap-4">
      {props.prescricoes?.map((prescricao: Prescricao) => {
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
