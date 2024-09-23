import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { IconPlus } from '@tabler/icons-react'
import type { Paciente } from '@prisma/client'
import CampoNome from '../shared/CampoNome'
import CampoPresc from '../shared/CampoPresc'

export interface ReceitasPorPacienteProps {
  paciente: Partial<Paciente>
  onChange: (paciente: Partial<Paciente>) => void
  salvarPaciente: () => void
  onCancel: () => void
  gerarPrescricao: () => void
  removerPaciente: () => void
}

export default function ReceitasPorPaciente(props: ReceitasPorPacienteProps) {
  const componentRef = useRef(null)
  const alterar = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div className="flex flex-col gap-5">
      <div className="flex-justify-end">
        <button
          type="button"
          className="flex items-center gap-2 bg-purple-800 text-zinc-50 px-4 py-2 rounded-md"
          onClick={() => alterar({})}
        >
          <IconPlus />
          <span>Nova Prescrição</span>
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
          {/* <ListaPacientes pacientes={pacientes} onClick={alterar} /> */}
        </div>
      </div>
    </div>
  )
}
