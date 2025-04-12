<script>
	import AnimatedElement from '$lib/components/animated_element.svelte';
</script>

<div
	class="h-screen w-screen bg-[#8aa8b0]"
	style="background-image: url('/project-assets/paintseries11-24/psc_bg.png'); background-size: cover; background-position: center;"
></div>
<div
	class="absolute flex h-screen max-h-screen items-center justify-center"
	style="width: 100%; height: 100%; z-index: 5; top: 0; left: 0;"
>
	<img
		src="/project-assets/paintseries11-24/psc_fg.png"
		alt=""
		style="max-width: 100%; max-height: 100%; z-index: 5;"
	/>
	<AnimatedElement
		color="#d3c8b2"
		width="200px"
		height="200px"
		bottom="10%"
		right="23%"
		h_time="50s"
		h_dist="70px"
		z_index="1"
	/>
</div>
