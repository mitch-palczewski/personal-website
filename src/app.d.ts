// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

declare module '*.jpg' {
	const src: string;
	export default src;
  }
  
  declare module '*.jpeg' {
	const src: string;
	export default src;
  }
  
  declare module '*.png' {
	const src: string;
	export default src;
  }
  
  declare module '*.gif' {
	const src: string;
	export default src;
  }