import Link from 'next/link'
import type { ElementType } from 'react'

export interface MenuItemProps {
  icone: ElementType
  texto: string
  url: string
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link href={props.url} className="flex gap-2 px-4 py-2 hover:bg-purple-900">
      <props.icone className="text-zinc-50" size={24} stroke={1} />
      <span className="text-zinc-50">{props.texto}</span>
    </Link>
  )
}
