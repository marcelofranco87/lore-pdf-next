'use client'
import type { InputHTMLAttributes } from 'react'

export interface CampoNomeProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  className: string
}

export default function CampoNome(props: CampoNomeProps) {
  return (
    <div className="flex flex-col gap-2">
      <label>{props.label}</label>
      <input {...props} readOnly className={props.className} />
    </div>
  )
}
