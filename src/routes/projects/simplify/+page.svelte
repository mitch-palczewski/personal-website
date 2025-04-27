<script>
	import Nav from '$lib/components/header.svelte';
</script>

<Nav></Nav>
<div class="bg-[#d8c6f3]">
<img src="/project-assets/simplify/banner.png" alt="Title" class=" object-contain " />
<div class="grid grid-cols-3 py-5 px-2">
	<div class="col-span-2 border-4 border-orange-100 bg-white p-10">
		<iframe
			class="h-[200px] w-full sm:h-[400px]"
			src="https://youtube.com/embed/9V88gKdshZQ"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			title="Next Brush Stroke Predictor Tutorial"
		></iframe>
	</div>
	
	<div class="p-5">
		<a
			href="https://secure.hyperrhiz.io/mitchell/index.html"
			target="_blank"
			rel="noopener"
			class=" block bg-[#53681a] h-[200px] sm:h-[400px] my-6 p-1 lg:p-5 py-10 text-right text-3xl lg:text-7xl font-bold text-white 
					hover:bg-orange-300 hover:text-black hover:underline hover:border-4 hover:border-red-400"
		>
			Play Simplify on the web
		</a>
	</div>
</div>
</div>