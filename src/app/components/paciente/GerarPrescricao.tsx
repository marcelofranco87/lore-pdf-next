import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import type { Paciente, Receita } from '@prisma/client'
import CampoNome from '../shared/CampoNome'

export interface GerarPrescricaoProps {
  paciente: Partial<Paciente>
  receita: Partial<Receita>
  onChange: (paciente: Partial<Paciente>) => void
  salvarPaciente: () => void
  onCancel: () => void
  removerPaciente: () => void
}

export default function GerarPrescricao(props: GerarPrescricaoProps) {
  const componentRef = useRef(null)
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div className="flex flex-col gap-5">
      <div className="flex-justify-end">
        <button
          type="button"
          className="flex items-center gap-2 bg-purple-800 text-zinc-50 px-4 py-2 rounded-md"
          onClick={handlePrint}
        >
          Imprimir
        </button>
      </div>
      <div ref={componentRef} className="flex flex-col gap-5 text-zinc-900">
        <CampoNome
          label="Nome do paciente"
          type="text"
          className="bg-zinc-300 p-2 outline-none"
          value={props.paciente.nome}
        />
        <div className="whitespace-break-spaces p-2 outline-none">
          {props.receita.receita || ''}
        </div>
      </div>
    </div>
  )
}
