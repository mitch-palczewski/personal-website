import { projects } from './projects.js';

export async function load() {
	try {
		const res = await fetch('https://mitch-palczewski.github.io/posts.json');
		if (!res.ok) {
			throw new Error(`Failed to load JSON: ${res.status}`);
		}
		const jsonData = await res.json();

		return {
			jsonData,
			summaries: projects.map((project) => ({
				name: project.name,
				image: project.image,
				link: project.link,
				description: project.description,
				date: project.date,
				htmlContent: project.htmlContent
			}))
		};
	} catch {
		const jsonData = null;
		return {
			jsonData,
			summaries: projects.map((project) => ({
				name: project.name,
				image: project.image,
				link: project.link,
				description: project.description,
				date: project.date,
				htmlContent: project.htmlContent
			}))
		};
	}
}
