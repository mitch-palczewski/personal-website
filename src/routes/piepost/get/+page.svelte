<script>
	import Nav from '$lib/components/header.svelte';
	import PiePostHeader from '$lib/components/piepost_components/pie_post_header.svelte';
	import TutorialGithub from '$lib/components/piepost_components/tutorial_github.svelte';
	import TutorialNeocities from '$lib/components/piepost_components/tutorial_neocities.svelte';

	let selected = 'github';
</script>

<Nav></Nav>
<PiePostHeader title="Get PiePost" subtitle=""></PiePostHeader>

<div class="grid_box mx-9 my-3 grid grid-cols-1 gap-3 lg:grid-cols-2">
	<div class="">
		<h1 class="font-bold">About PiePost</h1>
		<p>
			PiePost is a desktop appliction that builds you a personal website and automates the posting
			process. Easily build and maintain your blog, scrapbook, or public journal. PiePost makes it
			easy, if you are an experienced developer or new to coding, PiePost will save you time
			formating and deploying html. Upload your media, write a caption, and all it takes is a click
			of "Build Post". Your website will be up and running.
			<br />
			With PiePost you have complete control over your data and your website. PiePost automates writing
			code but the code is still html and easily editable. Your public data is stored in posts.json which
			you have the freedom to edit and delete.
		</p>
	</div>
	<div class="">
		<ul>
			<li>File Size: 14.5 MB</li>
			<li>
				<h1>Zip File Content</h1>
				<h1><span class="font-bold">assets</span>: folder - stores uploaded images</h1>
				<h1><span class="font-bold">config</span>: folder - stores app data and prefrences</h1>
				<h1><span class="font-bold">html_components</span>: folder - stores html snippets</h1>
				<h1><span class="font-bold">index.html</span>: html - your webpage</h1>
				<h1>
					<span class="font-bold">PiePost.exe</span>: executable - Click on this to build your
					webpage
				</h1>
				<h1>
					<span class="font-bold">posts.json</span>: json - stores information about your posts to
					make availible to the internet
				</h1>
			</li>
		</ul>
	</div>
</div>

<div class="center p-5">
	<a
		href="/downloadable/PiePost 1.2.0.zip"
		download="PiePost 1.2.0.zip"
		class="download-btn w-2xl text-center"
	>
		Windows Download PiePost 1.2.0
	</a>
</div>

<div class="center p-5">
	<a
		href="/piepost/get/more-options"
		class="inline-block w-full max-w-xl rounded bg-blue-300 px-6 py-3 text-center text-2xl font-medium text-white transition-colors duration-200 hover:bg-blue-700"
	>
		More Download Options
	</a>
</div>

<div class="mt-3 bg-yellow-100 p-3">
	<p>
		To set up PiePost it takes a few steps. PiePost writes html for you but you still need to host
		your website somewhere. There are many options for free or paid website hosting. Bellow are tutorial for hosting options. 
	</p>

	<div class="mb-4 flex justify-center gap-4">
		<button
			class="px-4 py-2 transition-colors duration-200"
			class:selected={selected === 'github'}
			on:click={() => (selected = 'github')}
			style="background-color: {selected === 'github' ? '#2563eb' : '#e5e7eb'}; color: {selected ===
			'github'
				? '#fff'
				: '#000'}"
		>
			<span class="text-xl font-bold">Github Tutorial</span>
			<br />
			Instillation: Hard
			<br />
			Posting: Fulling Automated
		</button>
		<button
			class="px-4 py-2 transition-colors duration-200"
			class:selected={selected === 'neocities'}
			on:click={() => (selected = 'neocities')}
			style="background-color: {selected === 'neocities'
				? '#2563eb'
				: '#e5e7eb'}; color: {selected === 'neocities' ? '#fff' : '#000'}"
		>
			<span class="text-xl font-bold">Neocities Tutorial</span>
			<br />
			Instillation: Easy
			<br />
			Posting: Manual
		</button>
	</div>

	{#if selected === 'github'}
		<TutorialGithub />
	{:else if selected === 'neocities'}
		<TutorialNeocities />
	{/if}
</div>

<style>
	ul {
		list-style-type: circle;
		padding-left: 1rem;
	}
	.grid_box > div {
		background-color: beige;
		padding: 0.5rem;
	}
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.download-btn {
		display: inline-block;
		border-radius: 0.125rem;
		background-color: #2563eb;
		padding: 0.5rem 1rem;
		font-weight: 500;
		color: #fff;
		transition: background-color 0.2s;
		font-size: xx-large;
	}
	.download-btn:hover {
		background-color: #1d4ed8;
	}
</style>
