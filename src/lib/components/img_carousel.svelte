<script lang="ts">
	import { onMount } from 'svelte';

	export let images: string[] = [];
	export let autoInterval = 0;

	let activeIndex = 0;
	let interval: number;

	function next() {
		activeIndex = (activeIndex + 1) % images.length;
	}

	function previous() {
		activeIndex = (activeIndex - 1 + images.length) % images.length;
	}

	if (autoInterval != 0) {
		onMount(() => {
			interval = setInterval(next, 5000);
			return () => clearInterval(interval);
		});
	}
</script>

<div class="relative w-full overflow-hidden rounded-lg">
	<div class="relative h-64 md:h-96">
		{#each images as image, index}
			<img
				src={image}
				alt={`Carousel slide ${index + 1}`}
				class="absolute inset-0 max-h-full max-w-full object-contain transition-opacity duration-500"
				class:opacity-100={index === activeIndex}
				class:opacity-0={index !== activeIndex}
			/>
		{/each}

		<button
			on:click={previous}
			class="bg-opacity-50 hover:bg-opacity-75 absolute top-1/2 left-4 -translate-y-1/2 transform bg-gray-700 p-2 text-white focus:outline-none"
		>
			Prev
		</button>

		<button
			on:click={next}
			class="bg-opacity-50 hover:bg-opacity-75 absolute top-1/2 right-4 -translate-y-1/2 transform bg-gray-700 p-2 text-white focus:outline-none"
		>
			Next
		</button>
	</div>
</div>
