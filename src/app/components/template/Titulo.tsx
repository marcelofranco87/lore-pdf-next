import type { ElementType } from 'react'

export interface TituloProps {
  texto: string
  icone: ElementType
}

export default function Titulo(props: TituloProps) {
  return (
    <div className="flex gap-2 items-center">
      <props.icone size={55} stroke={1} />
      <div className="flex flex-col">
        <h1 className="text-2xl font-black">{props.texto}</h1>
      </div>
    </div>
  )
}
