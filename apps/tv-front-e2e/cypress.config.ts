import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run tv-front:serve',
        production: 'nx run tv-front:preview',
      },
      ciWebServerCommand: 'nx run tv-front:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
