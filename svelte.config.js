import watchAndRun from '@kitql/vite-plugin-watch-and-run';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		vite: {
			plugins: [
				watchAndRun([
					{
						watch: '**/*.(gql|graphql)',
						run: 'npm run gen'
					}
				])
			]
		},
		adapter: adapter()
	},
	preprocess: preprocess()
};

export default config;
