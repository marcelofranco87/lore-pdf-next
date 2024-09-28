import obterTodos from './paciente/obterTodos'
import obterPorId from './paciente/obterPorId'
import removerPaciente from './paciente/removerPaciente'
import salvarPaciente from './paciente/salvarPaciente'
import obterTodas from './prescricao/obterTodas'
import obterPorPaciente from './prescricao/obterPorPaciente'
import removerPrescricao from './prescricao/removerPrescricao'
import salvarPrescricao from './prescricao/salvarPrescricao'

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export default class Backend {
  static readonly pacientes = {
    salvarPaciente: salvarPaciente,
    obterTodos: obterTodos,
    obterPorId: obterPorId,
    removerPaciente: removerPaciente,
  }

  static readonly prescricoes = {
    salvarPrescricao: salvarPrescricao,
    obterTodas: obterTodas,
    obterPorPaciente: obterPorPaciente,
    removerPrescricao: removerPrescricao,
  }
}
