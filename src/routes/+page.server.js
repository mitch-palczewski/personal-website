import { projects } from './projects.js';

export function load() {
	return {
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