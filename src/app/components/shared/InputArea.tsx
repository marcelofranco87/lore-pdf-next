'use client'
import type { TextareaHTMLAttributes } from 'react'

export interface InputAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  className: string
}

export default function InputArea(props: InputAreaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label>{props.label}</label>
      <textarea {...props} className={props.className} rows={10} />
    </div>
  )
}
