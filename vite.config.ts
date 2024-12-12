import { UserConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default {
	root: './src',
	envDir: '../',
	envPrefix: ['VITE_'],
	build: {
		outDir: '../dist',
		emptyOutDir: true,
		modulePreload: {
			polyfill: false,
		},
		minify: true,
		cssMinify: true,
		rollupOptions: {
		},
	},
	server: {
		open: true,
	},
	plugins: [
		createHtmlPlugin({
			minify: true,
		}),
		viteSingleFile({}),
	],
} satisfies UserConfig;
