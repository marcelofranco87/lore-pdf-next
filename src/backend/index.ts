import obterTodos from './paciente/obterTodos'
import obterPorId from './paciente/obterPorId'
import removerPaciente from './paciente/removerPaciente'
import salvarPaciente from './paciente/salvarPaciente'
import obterTodas from './receita/obterTodas'
import obterPorPaciente from './receita/obterPorPaciente'
import removerReceita from './receita/removerReceita'
import salvarReceita from './receita/salvarReceita'

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export default class Backend {
  static readonly pacientes = {
    salvarPaciente: salvarPaciente,
    obterTodos: obterTodos,
    obterPorId: obterPorId,
    removerPaciente: removerPaciente,
  }

  static readonly receitas = {
    salvarReceita: salvarReceita,
    obterTodas: obterTodas,
    obterPorPaciente: obterPorPaciente,
    removerReceita: removerReceita,
  }
}
