'use client'
import type { InputHTMLAttributes } from 'react'

export interface CampoDataProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  className: string
}

export default function CampoData(props: CampoDataProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold text-right mr-2">{props.label}</label>
      <input {...props} readOnly className={props.className} />
    </div>
  )
}
