'use client'
import type { TextareaHTMLAttributes } from 'react'
import { useEffect, useRef } from 'react'

export interface CampoPrescProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  className: string
}

export default function CampoPresc(props: CampoPrescProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.width = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
      textareaRef.current.style.width = `${textareaRef.current.scrollWidth}px`
    }
  }, [props.value])

  return (
    <div className="flex flex-col gap-2 bg-white">
      <label className="font-bold">{props.label}</label>
      <textarea
        {...props}
        readOnly
        className={props.className}
        ref={textareaRef}
      />
    </div>
  )
}
