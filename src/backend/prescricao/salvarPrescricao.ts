'use server'

import type { Paciente, Prescricao } from '@prisma/client'
import Id from '@/core/utils/Id'
import RepositorioPrescricao from './RepositorioPrescricao'

export default async function salvarPrescricao(
  prescricao: Prescricao | Partial<Prescricao>,
  paciente: Partial<Paciente>
) {
  const novaPrescricao = {
    ...prescricao,
    id: prescricao.id ?? Id.novo,
    pacienteId: paciente.id,
  }

  return RepositorioPrescricao.salvarPrescricao(
    novaPrescricao as Prescricao,
    paciente as Paciente
  )
}
