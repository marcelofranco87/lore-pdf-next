'use client'
import Prescricao from '@/app/components/paciente/Prescricao'
import ListaPacientes from '@/app/components/paciente/ListaPacientes'
import Pagina from '@/app/components/template/Pagina'
import Titulo from '@/app/components/template/Titulo'
import usePacientes from '@/app/data/hooks/usePacientes'
import { IconPlus, IconUser } from '@tabler/icons-react'

export default function Page() {
  const {
    pacientes,
    paciente,
    onSave,
    remover,
    onCancel,
    alterar,
    gerarPrescricao,
  } = usePacientes()

  return (
    <Pagina className="flex flex-col gap-10">
      <Titulo icone={IconUser} texto="Gerar Prescrição" />
      {paciente ? (
        <Prescricao
          paciente={paciente}
          onChange={alterar}
          onSave={onSave}
          onCancel={onCancel}
          remover={remover}
          gerarPrescricao={gerarPrescricao}
        />
      ) : (
        <>
          <ListaPacientes pacientes={pacientes} onClick={alterar} />
        </>
      )}
    </Pagina>
  )
}
