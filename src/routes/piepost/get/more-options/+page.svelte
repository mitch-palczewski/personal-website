<script>
	import Nav from '$lib/components/header.svelte';
	import PiePostHeader from '$lib/components/piepost_components/pie_post_header.svelte';
</script>

<Nav></Nav>
<PiePostHeader title="Get PiePost" subtitle="More Download Options"></PiePostHeader>

<div class="grid grid-cols-3 gap-3">
	<div class="p-5">
        <h1 class="text-lg sm:text-3xl font-bold"> Source Code</h1>

		<a
			href="/downloadable/PiePost 1.2.0-src.zip"
			download="PiePost 1.2.0-src.zip"
			class="inline-block w-full max-w-xl mt-4 rounded bg-blue-300 px-6 py-3 text-center sm:text-xl font-medium text-white transition-colors duration-200 hover:bg-blue-700"
		>
			Source Code Download <br> PiePost 1.2.0-src
		</a>
	</div>
	<div class="p-5">
		 <h1 class="text-lg sm:text-3xl font-bold ">Mac </h1>
		 Coming soon.
	</div>
    <div class="p-5">
        <h1 class="text-lg sm:text-3xl font-bold  ">Windows </h1>

		<a
			href="/downloadable/PiePost 1.2.0.zip"
			download="PiePost 1.2.0.zip"
			class="inline-block w-full mt-4 max-w-xl rounded bg-blue-300 px-6 py-3 text-center sm:text-xl font-medium text-white transition-colors duration-200 hover:bg-blue-700"
		>
			Windows Download <br> PiePost 1.2.0
		</a>
		<h2 class="text-sm sm:text-md">- Added Username and profile picture. Removed messaging making pie post simpler and easier to manage.</h2>
		<br>
        <a
			href="/downloadable/PiePost 1.0.1.zip"
			download="PiePost 1.0.1.zip"
			class="inline-block w-full mt-4  max-w-xl rounded bg-blue-300 px-6 py-3 text-center sm:text-xl font-medium text-white transition-colors duration-200 hover:bg-blue-700"
		>
			Windows Download <br> PiePost 1.0.1
		</a>
		<h2 class="text-sm sm:text-md">- Initial Release</h2>
	</div>
</div>
