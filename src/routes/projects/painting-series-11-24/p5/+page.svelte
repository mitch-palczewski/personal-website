<script lang="ts">
	const refreshSec = 5;
	import { onMount, onDestroy } from 'svelte';
	import AppearingLink from '$lib/components/appearing_link.svelte';
	type ImageModule = { default: string };
	let imageURLs: string[] = [];
	let selectedImgs: string[] = [];
	let intervalId: number;

	function randomizeImages() {
		if (imageURLs.length === 0) return;
		let tiles = imageURLs.concat(imageURLs).concat(imageURLs);
		const shuffledURLs = [...tiles].sort(() => Math.random() - 0.5);
		selectedImgs = shuffledURLs.slice(0, 15);
	}

	onMount(() => {
		const images = import.meta.glob('$lib/image-collections/birds-ps-11-24/*.{jpg,png}', {
			eager: true
		}) as Record<string, ImageModule>;
		imageURLs = Object.values(images).map((module) => module.default);
		randomizeImages();
		intervalId = setInterval(randomizeImages, refreshSec * 1000);
	});

	onDestroy(() => {
		clearInterval(intervalId);
	});
</script>

<div
	class="h-screen w-screen bg-[#8aa8b0]"
	style="background-image: url('/project-assets/paintseries11-24/birds_bg.png'); background-size: 100% 100%; background-position: center;"
>
	<div class="flex w-full items-center justify-center">
		<div
			class="grid h-screen w-screen grid-cols-5 items-center gap-2 p-2"
			style="max-height:83%; max-width: 83%; width: 1400px;"
		>
			{#each selectedImgs as img}
				<img src={img} alt="" class="w-full" style="" />
			{/each}
		</div>
	</div>
	<AppearingLink seconds={30} text="next" link="\projects\painting-series-11-24\p1" />
</div>
