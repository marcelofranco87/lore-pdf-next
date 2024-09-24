import Backend from '@/backend'
import type { Paciente } from '@prisma/client'
import { useEffect, useState } from 'react'

export default function usePacientes() {
  const [pacientes, setPacientes] = useState<Paciente[]>([])
  const [paciente, setPaciente] = useState<Partial<Paciente> | null>(null)

  useEffect(() => {
    Backend.pacientes.obterTodos().then(setPacientes)
  }, [])

  async function salvarPaciente() {
    if (!paciente) return
    await Backend.pacientes.salvarPaciente(paciente)
    const pacientes = await Backend.pacientes.obterTodos()
    setPacientes(pacientes)
    setPaciente(null)
  }

  async function removerPaciente() {
    if (!paciente || !paciente.id) return
    await Backend.pacientes.removerPaciente(paciente.id)
    const pacientes = await Backend.pacientes.obterTodos()
    setPacientes(pacientes)
    setPaciente(null)
  }

  async function gerarPrescricao() {
    if (!paciente) return
    await Backend.pacientes.salvarPaciente(paciente)
    const pacientes = await Backend.pacientes.obterTodos()
    setPacientes(pacientes)
    setPaciente(null)
  }

  return {
    pacientes,
    paciente,
    salvarPaciente,
    removerPaciente,
    gerarPrescricao,
    retornar: () => setPaciente(null),
    alterar: (paciente: Partial<Paciente> | null) => setPaciente(paciente),
  }
}
