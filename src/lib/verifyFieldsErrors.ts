import { FieldErrors } from 'react-hook-form'

export function verifyFieldsErrors(values: FieldErrors) {
  const errors = {
    originalProject: false,
    modifications: false,
    newAreas: false,
    management: false,
    hydrosanitaryInstallation: false,
  }

  if (
    values.areaTotalApartamento ||
    values.quantidadeDeLavabos ||
    values.quantidadeDeBanhoComBanheira ||
    values.quantidadeBanho ||
    values.quantidadeCozinha ||
    values.quandidadeAreaServico ||
    values.quantidadeAreaGourmet ||
    values.quantidadeDeSpa
  ) {
    errors.originalProject = true
  }

  if (
    values.areaTotalDosAmbientesModificados ||
    values.quantidadeLavabosAlteracao ||
    values.quantidadeBanhoComBanheiraAlteracao ||
    values.quantidadeBanhoAlteracao ||
    values.quantidadeCozinhaAlteracao ||
    values.quantidadeAreaServicoAlteracao ||
    values.quantidadeAreaGoumertAlteracao ||
    values.quantidadeSpaMudancaPosicao
  ) {
    errors.modifications = true
  }

  if (
    values.quantidadeNovosLavabos ||
    values.quantidadeNovosBanhos ||
    values.quantidadeNovosQuartos ||
    values.quantidadeNovosSpa ||
    values.qunantidadeNovasAreasComHidraulica
  ) {
    errors.newAreas = true
  }

  if (
    values.atualizacaoArquiteturaDuranteExecucao ||
    values.quantidadeReunioesNecessarias ||
    values.quantidadeAnalisesCliente ||
    values.projetoAutomacao ||
    values.projetoLuminotecnico
  ) {
    errors.management = true
  }

  if (
    values.materialDaAguaDoProjetoOriginal ||
    values.quantidadeBanhosQueMudaramSomentePosicaoDoLavatorio
  ) {
    errors.hydrosanitaryInstallation = true
  }

  return errors
}
