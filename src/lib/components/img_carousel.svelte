<script lang="ts">
	import { onMount } from 'svelte';

	export let images: string[] = [];
	export let autoInterval = 5;

	let activeIndex = 0;
	let interval: number;

	function next() {
		activeIndex = (activeIndex + 1) % images.length;
	}

	if (autoInterval != 0) {
		onMount(() => {
			interval = setInterval(next, autoInterval * 1000);
			return () => clearInterval(interval);
		});
	}
</script>

<div class="relative w-full overflow-hidden">
    <div class="relative flex h-64 items-center justify-center bg-gradient-to-r from-[#69AFBA] to-[#C2FFC9] md:h-96">
        {#each images as image, index}
            <img
                src={image}
                alt={`Carousel slide ${index + 1}`}
                class="absolute max-h-full max-w-full object-contain transition-opacity duration-500"
                class:opacity-100={index === activeIndex}
                class:opacity-0={index !== activeIndex}
            />
        {/each}
    </div>
</div>
