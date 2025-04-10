<script>
    import AnimatedElement from '$lib/components/animated_element.svelte';
</script>


<div class="relative flex h-screen items-center justify-center bg-[#393939]">
	<img
		src="\project-assets\paintseries11-24\Final1.png"
		alt=""
		class="card-image h-auto max-h-full"
		style="width: 70%; height: auto; z-index: 5;"
	/>

	<div
		class="absolute bg-[#bebebe]"
		style="bottom: 10%; right: 5%; width: 200px; height: 300px; z-index: 1;"
	></div>

	<div
		class="absolute bg-[#8b8686]"
		style="bottom: 0%; left: 5%; width: 90px; height: 700px; z-index: 1;"
	></div>

    <!-- Animated Orange
	<div
		class="absolute bg-[#fff0d4] h-move"
		style="bottom: 30%; left: 4%; width: 200px; height: 150px; z-index: 2; --time: 30s; --dist: 200px"
	></div> -->
    <AnimatedElement
    color="#ff0000"
    width="150px"
    height="150px"
    bottom="20%"
    left="10%"
	h_time="5s"
    h_dist="300px"
    v_time="2s"
    v_dist="20px"
/>
<AnimatedElement
    color="#ff0000"
    width="100px"
    height="100px"
    bottom="20%"
    left="10%"
    h_time="5s"
    h_dist="300px"
    v_time="5s"
    v_dist="200px"
/>
</div>


