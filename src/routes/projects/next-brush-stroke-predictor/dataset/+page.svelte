<script lang="ts">
	type ImageModule = { default: string };

	// Import all images with .jpg and .png extensions from the specified folder eagerly.
	const imageModules = import.meta.glob(
		'/src/lib/image-collections/nbsp-images/*.{jpg,png}',
		{
			eager: true
		}
	) as Record<string, ImageModule>;

	// Extract the default exports (i.e., the image URLs)
	let images = Object.entries(imageModules).map(([_, module]) => module.default);
</script>

<div class="bg-blue-500">
	<a
		href="\projects\next-brush-stroke-predictor"
		rel="noopener noreferrer"
		class=" p-5 font-medium text-blue-900 hover:underline dark:text-blue-800">Back</a
	>
</div>
<div class="grid grid-cols-1 gap-4 bg-blue-500 p-5 sm:grid-cols-1 md:grid-cols-2">
    {#each images as image, index}
        <div class="relative">
            <img
                src={image}
                alt="Image {index + 1}"
                class="h-auto w-full shadow-md"
                style="image-rendering: pixelated;"
                loading="lazy"
            />
        </div>
    {/each}
</div>
