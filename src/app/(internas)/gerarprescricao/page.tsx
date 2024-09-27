'use client'
import GerarPrescricao from '@/app/components/paciente/GerarPrescricao'
import ListaPacientes from '@/app/components/paciente/ListaPacientes'
import ListaReceitas from '@/app/components/receita/ListaReceitas'
import CampoNome from '@/app/components/shared/CampoNome'
import Pagina from '@/app/components/template/Pagina'
import Titulo from '@/app/components/template/Titulo'
import useFuncoes from '@/app/data/hooks/useFuncoes'
import { IconPrinter } from '@tabler/icons-react'

export default function Page() {
  const {
    pacientes,
    paciente,
    salvarPaciente,
    removerPaciente,
    verPaciente,
    receitas,
    receita,
    verReceita,
  } = useFuncoes()

  return (
    <Pagina className="flex flex-col gap-10">
      <Titulo icone={IconPrinter} texto="Gerar Prescrição" />
      {paciente ? (
        <>
          {receita ? (
            <GerarPrescricao
              paciente={paciente}
              receita={receita}
              onChange={verPaciente}
              salvarPaciente={salvarPaciente}
              removerPaciente={removerPaciente}
            />
          ) : (
            <>
              <CampoNome
                label="Nome do paciente"
                type="text"
                className="bg-zinc-300 p-2 outline-none"
                value={paciente?.nome}
              />
              <ListaReceitas
                receitas={receitas}
                onClick={verReceita}
                pacienteId={paciente.id || ''}
              />
            </>
          )}
        </>
      ) : (
        <>
          <ListaPacientes pacientes={pacientes} onClick={verPaciente} />
        </>
      )}
    </Pagina>
  )
}
