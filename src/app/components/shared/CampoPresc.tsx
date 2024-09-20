'use client'
import type { TextareaHTMLAttributes } from 'react'

export interface CampoPrescProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  className: string
}

export default function CampoPresc(props: CampoPrescProps) {
  return (
    <div className="flex flex-col gap-2">
      <label>{props.label}</label>
      <textarea {...props} className={props.className} />
    </div>
  )
}
