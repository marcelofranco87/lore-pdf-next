import Backend from '@/backend'
import type { Paciente, Prescricao } from '@prisma/client'
import { useEffect, useState } from 'react'

export default function useFuncoes() {
  const [pacientes, setPacientes] = useState<Paciente[]>([])
  const [paciente, setPaciente] = useState<Partial<Paciente> | null>(null)
  const [prescricoes, setPrescricoes] = useState<Prescricao[]>([])
  const [prescricao, setPrescricao] = useState<Partial<Prescricao> | null>(null)

  useEffect(() => {
    Backend.pacientes.obterTodos().then(setPacientes)
  }, [])

  useEffect(() => {
    Backend.prescricoes.obterTodas().then(setPrescricoes)
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

  async function salvarPrescricao(
    prescricao: Prescricao | Partial<Prescricao>,
    paciente: Paciente | Partial<Paciente>
  ) {
    if (!prescricao) return
    await Backend.prescricoes.salvarPrescricao(prescricao, paciente)
    if (paciente.id) {
      const prescricoes = await Backend.prescricoes.obterPorPaciente(
        paciente.id
      )
      setPrescricoes(prescricoes)
      setPrescricao(null)
    }
  }

  async function salvarComoNova(
    prescricao: Prescricao | Partial<Prescricao>,
    paciente: Paciente | Partial<Paciente>
  ) {
    if (!prescricao) return
    await Backend.prescricoes.salvarComoNova(prescricao, paciente)
    if (paciente.id) {
      const prescricoes = await Backend.prescricoes.obterPorPaciente(
        paciente.id
      )
      setPrescricoes(prescricoes)
      setPrescricao(null)
    }
  }

  async function removerPrescricao() {
    if (!prescricao || !prescricao.id) return
    await Backend.prescricoes.removerPrescricao(prescricao.id)
    const prescricoes = await Backend.prescricoes.obterTodas()
    setPrescricoes(prescricoes)
    setPrescricao(null)
  }

  return {
    pacientes,
    paciente,
    salvarPaciente,
    removerPaciente,
    retornarPac: () => setPaciente(null),
    verPaciente: (paciente: Partial<Paciente> | null) => setPaciente(paciente),
    prescricoes,
    prescricao,
    salvarPrescricao,
    salvarComoNova,
    removerPrescricao,
    retornarRec: () => setPrescricao(null),
    verPrescricao: (prescricao: Partial<Prescricao> | null) =>
      setPrescricao(prescricao),
  }
}
