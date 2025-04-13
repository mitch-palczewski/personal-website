<script>
	import AnimatedElement from '$lib/components/animated_element.svelte';
	import AppearingLink from '$lib/components/appearing_link.svelte';
</script>

<div class="relative flex h-screen items-center justify-center bg-[#393939]">
	<img
		src="\project-assets\paintseries11-24\Final1.png"
		alt=""
		class="card-image h-auto max-h-full"
		style="width: 75%; height: auto; z-index: 5; transform: translateX(1%);"
	/>
	<div
		class="absolute bg-[#8b8686]"
		style="bottom: 0%; left: 5%; width: 90px; height: 700px; z-index: 1;"
	></div>

	<AnimatedElement
		color="#bebebe"
		width="200px"
		height="300px"
		bottom="25.3%"
		right="5%"
		v_time="80s"
		v_dist="200px"
		z_index="3"
	/>

	<AnimatedElement
		color="#9e9dba"
		width="200px"
		height="300px"
		bottom="5%"
		left="20%"
		h_time="30s"
		h_dist="600px"
		z_index="2"
	/>

	<AnimatedElement
		color="#fff0d4"
		width="200px"
		height="150px"
		bottom="30%"
		left="4%"
		h_time="50s"
		h_dist="100px"
		z_index="2"
	/>

	<AppearingLink seconds={30} text="next" link="\projects\painting-series-11-24\p2" />
</div>
