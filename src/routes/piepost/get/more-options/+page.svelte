<script>
	import Nav from '$lib/components/header.svelte';
	import PiePostHeader from '$lib/components/piepost_components/pie_post_header.svelte';
</script>

<Nav></Nav>
<PiePostHeader title="Get PiePost" subtitle="More Download Options"></PiePostHeader>

<div class="grid grid-cols-2 gap-3">
	<div class="p-5">
        <h1 class="text-3xl font-bold"> Source Code</h1>

		<a
			href="/downloadable/PiePost 1.2.0-src.zip"
			download="PiePost 1.2.0-src.zip"
			class="inline-block w-full max-w-xl m-4 rounded bg-blue-300 px-6 py-3 text-center text-2xl font-medium text-white transition-colors duration-200 hover:bg-blue-700"
		>
			Source Code Download PiePost 1.2.0-src
		</a>
	</div>
    <div class="p-5">
        <h1 class="text-3xl font-bold"> Windows download</h1>

		<a
			href="/downloadable/PiePost 1.2.0.zip"
			download="PiePost 1.2.0.zip"
			class="inline-block w-full m-4 max-w-xl rounded bg-blue-300 px-6 py-3 text-center text-2xl font-medium text-white transition-colors duration-200 hover:bg-blue-700"
		>
			Windows Download PiePost 1.2.0
		</a>

        <a
			href="/downloadable/PiePost 1.0.1.zip"
			download="PiePost 1.0.1.zip"
			class="inline-block w-full m-4  max-w-xl rounded bg-blue-300 px-6 py-3 text-center text-2xl font-medium text-white transition-colors duration-200 hover:bg-blue-700"
		>
			Windows Download PiePost 1.0.1
		</a>
	</div>
</div>
