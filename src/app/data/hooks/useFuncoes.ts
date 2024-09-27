import Backend from '@/backend'
import type { Paciente, Receita } from '@prisma/client'
import { useEffect, useState } from 'react'

export default function useFuncoes() {
  const [pacientes, setPacientes] = useState<Paciente[]>([])
  const [paciente, setPaciente] = useState<Partial<Paciente> | null>(null)
  const [receitas, setReceitas] = useState<Receita[]>([])
  const [receita, setReceita] = useState<Partial<Receita> | null>(null)

  useEffect(() => {
    Backend.pacientes.obterTodos().then(setPacientes)
  }, [])

  useEffect(() => {
    Backend.receitas.obterTodas().then(setReceitas)
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

  async function salvarReceita(
    receita: Receita | Partial<Receita>,
    paciente: Paciente | Partial<Paciente>
  ) {
    if (!receita) return
    await Backend.receitas.salvarReceita(receita, paciente)
    if (paciente.id) {
      const receitas = await Backend.receitas.obterPorPaciente(paciente.id)
      setReceitas(receitas)
      setReceita(null)
    }
  }

  async function removerReceita() {
    if (!receita || !receita.id) return
    await Backend.receitas.removerReceita(receita.id)
    const receitas = await Backend.receitas.obterTodas()
    setReceitas(receitas)
    setReceita(null)
  }

  return {
    pacientes,
    paciente,
    salvarPaciente,
    removerPaciente,
    retornarPac: () => setPaciente(null),
    verPaciente: (paciente: Partial<Paciente> | null) => setPaciente(paciente),
    receitas,
    receita,
    salvarReceita,
    removerReceita,
    retornarRec: () => setReceita(null),
    verReceita: (receita: Partial<Receita> | null) => setReceita(receita),
  }
}
