'use server'

import type { Paciente } from '@/core/model/Paciente'
import Id from '@/core/utils/Id'
import RepositorioPaciente from './RepositorioPaciente'

export default async function salvarPaciente(paciente: Partial<Paciente>) {
  const novoPaciente = {
    ...paciente,
    id: paciente.id ?? Id.novo,
  }

  return RepositorioPaciente.salvarPaciente(novoPaciente as Paciente)
}
