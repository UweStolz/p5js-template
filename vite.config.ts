import checker from 'vite-plugin-checker';
import { resolve } from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';

import type { UserConfigExport } from 'vite';

function pathResolve(dir: string) {
    return resolve(__dirname, '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    const config: UserConfigExport = {
        resolve: {
            alias: [
                {
                    find: /@\//,
                    replacement: `${pathResolve('src')}/`,
                },
            ],
        },
    };

    if (command === 'serve') {
        config.plugins = [
            checker({
                enableBuild: false,
                typescript: true,
                eslint: {
                    lintCommand:
                        'eslint ./src --ext ts --config ./.eslintrc.json',
                },
                overlay: {
                    initialIsOpen: false,
                },
            }),
        ];
    } else if (command === 'build') {
        config.plugins = [VitePWA()];
    }
    return config;
});
