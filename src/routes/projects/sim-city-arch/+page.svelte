<script>
	import ImgCarousel from '$lib/components/img_carousel.svelte';
	import Header from '$lib/components/header.svelte';
</script>
<Header/>

<div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
	<ImgCarousel
		images={[
			'/project-assets/sim-city/beach4.png',
			'/project-assets/sim-city/beach3.png',
			'/project-assets/sim-city/beach2.png',
			'/project-assets/sim-city/beach1.png'
		]}
		autoInterval={5}
	/>
	<ImgCarousel
		images={[
			'/project-assets/sim-city/blocks4.png',
			'/project-assets/sim-city/blocks3.png',
			'/project-assets/sim-city/blocks2.png',
			'/project-assets/sim-city/blocks1.png'
		]}
		autoInterval={5}
	/>
	<ImgCarousel
		images={[
			'/project-assets/sim-city/cresent4.png',
			'/project-assets/sim-city/cresent3.png',
			'/project-assets/sim-city/cresent2.png',
			'/project-assets/sim-city/cresent1.png'
		]}
		autoInterval={5}
	/>
	<ImgCarousel
		images={[
			'/project-assets/sim-city/figure1.png',
			'/project-assets/sim-city/figure2.png',
			'/project-assets/sim-city/figure3.png',
			'/project-assets/sim-city/figure4.png'
		]}
		autoInterval={5}
	/>
	<ImgCarousel
		images={[
			'/project-assets/sim-city/flowers1.png',
			'/project-assets/sim-city/flowers2.png',
			'/project-assets/sim-city/flowers3.png',
			'/project-assets/sim-city/flowers4.png'
		]}
		autoInterval={5}
	/>
	<ImgCarousel
		images={[
			'/project-assets/sim-city/industry1.png',
			'/project-assets/sim-city/industry2.png',
			'/project-assets/sim-city/industry3.png',
			'/project-assets/sim-city/industry4.png'
		]}
		autoInterval={5}
	/>
	<ImgCarousel images={['/project-assets/sim-city/interchange.png']} autoInterval={5} />
	
	<ImgCarousel
		images={[
			'/project-assets/sim-city/shapes1.png',
			'/project-assets/sim-city/shapes2.png',
			'/project-assets/sim-city/shapes3.png',
			'/project-assets/sim-city/shapes4.png'
		]}
		autoInterval={5}
	/>
	<ImgCarousel
		images={[
			'/project-assets/sim-city/trailors1.png',
			'/project-assets/sim-city/trailors2.png',
			'/project-assets/sim-city/trailors3.png',
			'/project-assets/sim-city/trailors4.png'
		]}
		autoInterval={5}
	/>
	<ImgCarousel
		images={[
			'/project-assets/sim-city/treeangle1.png',
			'/project-assets/sim-city/treeangle2.png',
			'/project-assets/sim-city/treeangle3.png',
			'/project-assets/sim-city/treeangle4.png'
		]}
		autoInterval={5}
	/>
	<ImgCarousel images={['/project-assets/sim-city/pyramid.png']} autoInterval={5} />
	<ImgCarousel
		images={[
			'/project-assets/sim-city/waves4.png',
			'/project-assets/sim-city/waves3.png',
			'/project-assets/sim-city/waves2.png',
			'/project-assets/sim-city/waves1.png'
		]}
		autoInterval={5}
	/>
</div>
<div class="aspect-w-16 aspect-h-8 p-10" style="height: 700px;">
	<iframe
		class="h-full w-full"
		src="https://youtube.com/embed/a8JT1gCinL4"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
		title="Sim City Build Demo"
	></iframe>
</div>
