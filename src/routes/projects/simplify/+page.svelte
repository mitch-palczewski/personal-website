<script>
	import Nav from '$lib/components/header.svelte';
</script>

<Nav></Nav>
<div class="bg-[#d8c6f3]">
	<img src="/project-assets/simplify/banner.png" alt="Title" class=" object-contain" />
	<div class="grid grid-cols-3 px-2 py-5">
		<div class="col-span-2 border-4 border-orange-100 bg-white p-10">
			<iframe
				class="h-[200px] w-full border-4 border-transparent hover:border-blue-300 sm:h-[400px]"
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
				class=" my-6 block h-[200px] bg-[#53681a] p-1 py-10 text-right text-3xl font-bold text-white hover:border-4 hover:border-red-400 hover:bg-orange-300
					hover:text-black hover:underline sm:h-[400px] lg:p-5 lg:text-7xl"
			>
				Play Simplify on the web
			</a>
		</div>
	</div>
	<p class="p-10 m-2 lg:mx-50 bg-yellow-200 text-3xl">
		The objective of the game is to see as an artist and exercise your perceptual ability.
		Simplification is a powerful tool, but it is not necessarily intuitive. Through a series of
		artworks and photographs you will investigate different ways to simplify images and you will be
		challenged to reconstruct the work.
	</p>
	<div class="grid grid-cols-2 gap-5 px-5">
		<img
			src="/project-assets/simplify/home screen.png"
			alt="screenshot"
			class="object-contain py-1"
		/>
		<img src="/project-assets/simplify/select.png" alt="screenshot" class=" object-contain py-1" />

		<img
			src="/project-assets/simplify/mondriant.png"
			alt="screenshot"
			class=" object-contain py-1"
		/>
		<img src="/project-assets/simplify/gogan.png" alt="screenshot" class=" object-contain py-1" />
		<img
			src="/project-assets/simplify/lighthouse.png"
			alt="screenshot"
			class=" object-contain py-1"
		/>
		<img src="/project-assets/simplify/monet.png" alt="screenshot" class=" object-contain py-1" />
		<img
			src="/project-assets/simplify/moon-dance.png"
			alt="screenshot"
			class=" object-contain py-1"
		/>
		<img src="/project-assets/simplify/van-go.png" alt="screenshot" class=" object-contain py-1" />
		<img src="/project-assets/simplify/wassely.png" alt="screenshot" class=" object-contain py-1" />
		<img src="/project-assets/simplify/woman.png" alt="screenshot" class="object-contain py-1" />
		<img src="/project-assets/simplify/albers.png" alt="screenshot" class=" object-contain py-1" />
		<img src="/project-assets/simplify/TRAIN.png" alt="screenshot" class=" py-1object-contain" />
	</div>
</div>
