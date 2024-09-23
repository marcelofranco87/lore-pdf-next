'use client'
import GerarPrescricao from '@/app/components/paciente/GerarPrescricao'
import ListaPacientes from '@/app/components/paciente/ListaPacientes'
import Pagina from '@/app/components/template/Pagina'
import Titulo from '@/app/components/template/Titulo'
import usePacientes from '@/app/data/hooks/usePacientes'
import { IconPlus, IconUser } from '@tabler/icons-react'

export default function Page() {
  const {
    pacientes,
    paciente,
    salvarPaciente,
    removerPaciente,
    onCancel,
    alterar,
  } = usePacientes()

  return (
    <Pagina className="flex flex-col gap-10">
      <Titulo icone={IconUser} texto="Gerar Prescrição" />
      {paciente ? (
        <GerarPrescricao
          paciente={paciente}
          onChange={alterar}
          salvarPaciente={salvarPaciente}
          onCancel={onCancel}
          removerPaciente={removerPaciente}
        />
      ) : (
        <>
          <ListaPacientes pacientes={pacientes} onClick={alterar} />
        </>
      )}
    </Pagina>
  )
}
