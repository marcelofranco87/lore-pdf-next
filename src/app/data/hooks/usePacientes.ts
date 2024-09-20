import Backend from '@/backend'
import type { Paciente } from '@/core/model/Paciente'
import { useEffect, useState } from 'react'

export default function usePacientes() {
  const [pacientes, setPacientes] = useState<Paciente[]>([])
  const [paciente, setPaciente] = useState<Partial<Paciente> | null>(null)

  useEffect(() => {
    Backend.pacientes.showAll().then(setPacientes)
  }, [])

  async function onSave() {
    if (!paciente) return
    await Backend.pacientes.onSave(paciente)
    const pacientes = await Backend.pacientes.showAll()
    setPacientes(pacientes)
    setPaciente(null)
  }

  async function remover() {
    if (!paciente || !paciente.id) return
    await Backend.pacientes.remover(paciente.id)
    const pacientes = await Backend.pacientes.showAll()
    setPacientes(pacientes)
    setPaciente(null)
  }

  async function gerarPrescricao() {
    if (!paciente) return
    await Backend.pacientes.onSave(paciente)
    const pacientes = await Backend.pacientes.showAll()
    setPacientes(pacientes)
    setPaciente(null)
  }

  return {
    pacientes,
    paciente,
    onSave,
    remover,
    gerarPrescricao,
    onCancel: () => setPaciente(null),
    alterar: (paciente: Partial<Paciente> | null) => setPaciente(paciente),
  }
}
