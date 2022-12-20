import {
  checkFilesExist,
  runNxCommandAsync,
  cleanup,
} from '@nrwl/nx-plugin/testing';
import { newProject } from '@nxext/e2e';

describe('vitest e2e', () => {
  beforeAll(async () => {
    newProject(['@nxext/vitest']);
  });

  afterAll(() => cleanup());

  it('should create vitest', async () => {
    await runNxCommandAsync(`generate @nxext/vitest:init`);

    expect(() => checkFilesExist(`vitest.config.ts`)).not.toThrow();
  }, 120000);
});
