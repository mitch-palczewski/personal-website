<script>
	import { onMount } from 'svelte';

	// List of links
	const links = [
		'/projects/painting-series-11-24/p1',
		'/projects/painting-series-11-24/p2',
		'/projects/painting-series-11-24/p3',
		'/projects/painting-series-11-24/p4',
		'/projects/painting-series-11-24/p5'
	];

	// Function to navigate to a random link
	function goToRandomLink() {
		const randomIndex = Math.floor(Math.random() * links.length);
		const randomLink = links[randomIndex];
		window.location.href = randomLink; // Redirect to the random link
	}

	// Automatically redirect on page load after a delay
	onMount(() => {
		setTimeout(() => {
			goToRandomLink();
		}, 2200); // Wait for 3 seconds before redirecting
	});

	// Example images for the grid
	const images = [
		'/project-assets/paintseries11-24/Final1.png',
		'/project-assets/paintseries11-24/forest_light.JPG',
		'/project-assets/paintseries11-24/power_Sun_cross.png',
		'/project-assets/paintseries11-24/wall2.png',
		'/project-assets/paintseries11-24/birds final.png'
	];
</script>



<div class=" bg-blue-300 p-10">
    <p class="m-4 text-lg font-semibold" style="z-index: 2;">Redirecting ...</p>
	<p class="m-4 text-lg font-semibold" style="z-index: 2;">30 sec delay between pages</p>
	<div class="grid grid-cols-1 gap-1 bg-blue-300 sm:grid-cols-2 md:grid-cols-3">
		{#each images as image, index}
			<div class="relative">
				<img
					src={image}
					alt="Image {index + 1}"
					class="h-auto w-1/2 shadow-md"
					style="z-index: 1;"
                    loading="lazy"
				/>
			</div>
		{/each}
	</div>
    <div class="grid grid-cols-1 gap-1 bg-blue-300 sm:grid-cols-2 md:grid-cols-3 p-5">
		{#each links as link, index}
			<div class="relative">
				<p class="m-4 text-lg font-semibold" style="z-index: 2;">{link}</p>
			</div>
		{/each}
	</div>
    <div class="grid grid-cols-1 gap-1 bg-blue-300 sm:grid-cols-2 md:grid-cols-3">
		{#each images as image, index}
			<div class="relative">
				<img
					src={image}
					alt="Image {index + 1}"
					class="h-auto w-auto shadow-md"
					style="z-index: 1;"
                    loading="lazy"
				/>
			</div>
		{/each}
	</div>

</div>
