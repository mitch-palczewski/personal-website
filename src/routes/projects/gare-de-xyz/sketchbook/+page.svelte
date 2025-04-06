<script lang="ts">
	type ImageModule = { default: string };

    // Import all images with .jpg and .png extensions from the specified folder eagerly.
    const imageModules = import.meta.glob('/src/lib/image-collections/gare-de-xyz-sketches/*.{jpg,png}', {
        eager: true
	}) as Record<string, ImageModule>;

	// Extract the default exports (i.e., the image URLs)
	let images = Object.entries(imageModules).map(([_, module]) => module.default);
</script>

<div class="bg-blue-500">
    <a href="\projects\gare-de-xyz"  rel="noopener noreferrer" class=" p-5 font-medium text-blue-900 hover:underline dark:text-blue-800">Back</a>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 bg-blue-500">
    {#each images as image, index}
        <div class="relative">
            <img src={image} alt="Image {index + 1}" class="w-full h-auto shadow-md" />
        </div>
    {/each}
</div>