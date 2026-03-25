import { test as setup } from '@playwright/test';

setup('Should keep e2e auth setup as module placeholder', async () => {
  /**
   * Se o projeto exigir sessao para os testes E2E, este arquivo pode:
   * - depender do setup global de auth;
   * - apenas reaproveitar o `storageState` salvo em `.auth/`;
   * - ou complementar com preparacao especifica do modulo E2E.
   */
});
