'use client'
import type { InputHTMLAttributes } from 'react'

export interface InputTextoProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  className: string
}

export default function InputTexto(props: InputTextoProps) {
  return (
    <div className="flex flex-col gap-2">
      <label>{props.label}</label>
      <input {...props} className={props.className} />
    </div>
  )
}
