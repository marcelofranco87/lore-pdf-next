import type { Receita } from '@prisma/client'

export interface LinhaReceitaProps {
  receita: Receita
  onClick?: (receita: Receita) => void
  onKeyDown?: (receita: Receita) => void
}

export default function LinhaReceita(props: LinhaReceitaProps) {
  return (
    <div
      className="flex bg-zinc-300 text-zinc-900 items-center gap-5 p-4 rounded-md cursor-pointer"
      onClick={() => props.onClick?.(props.receita)}
      onKeyDown={() => props.onKeyDown?.(props.receita)}
    >
      <div className="flex flex-col">
        <span className="text-xl font-black">
          {props.receita.updatedAt.toLocaleDateString()}
        </span>
      </div>
    </div>
  )
}
