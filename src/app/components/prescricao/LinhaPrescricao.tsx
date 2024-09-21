import type { Prescricao } from '@/core/model/Prescricao'

export interface LinhaPrescricaoProps {
  prescricao: Prescricao
  onClick?: (prescricao: Prescricao) => void
  onKeyDown?: (prescricao: Prescricao) => void
}

export default function LinhaPrescricao(props: LinhaPrescricaoProps) {
  return (
    <div
      className="flex bg-zinc-300 text-zinc-900 items-center gap-5 p-4 rounded-md cursor-pointer"
      onClick={() => props.onClick?.(props.prescricao)}
      onKeyDown={() => props.onKeyDown?.(props.prescricao)}
    >
      <div className="flex flex-col">
        <span className="text-xl font-black">{props.prescricao.detalhes}</span>
      </div>
    </div>
  )
}
