<script lang="ts">
	const refreshSec = 5;
	import { onMount, onDestroy } from 'svelte';
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
    class="bg-[#8aa8b0] w-screen h-screen"
    style="background-image: url('/project-assets/paintseries11-24/birds_bg.png'); background-size: cover; background-position: center;"
>
<div class="flex justify-center items-center  w-full">
    <div class="grid h-screen w-screen grid-cols-5 items-center p-2 gap-2"
    style="max-height: 83%; max-width: 83%;">
    {#each selectedImgs as img}
        <img
            src={img}
            alt=""
            class="w-full" 
            style=""
        />
    {/each}
</div>
</div>

</div>



