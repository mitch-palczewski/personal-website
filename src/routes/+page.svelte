<script>
	import Card from '../lib/components/project_card.svelte';
	import bg_image from 'static\main-assets\wavefunctionmountains.png';
	let { data } = $props();
</script>

<div class="h-screen bg-cover bg-center" style="background-image: url({bg_image})">
	<h1>Home</h1>
	<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
	
	{#each data.summaries as { name, image, description, link }}
		<Card
			title={ name }
			description={description}
			imageUrl={image}
			link={link}
		/>
	{/each}
</div>




