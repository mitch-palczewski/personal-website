<script>
    import { onMount } from 'svelte';
    let imageUrl = '';
    /**
	 * @type {any[]}
	 */
    let images = [];

    function addImage() {
        if (imageUrl) {
            images = [...images, imageUrl];
            imageUrl = '';
        }
    }
</script>

<div class="bg-gray-100 flex flex-col items-center p-8 min-h-screen">
    <div class="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <label for="image-url-input" class="block text-gray-700 font-semibold mb-2">Enter Image URL:</label>
        <input
            id="image-url-input"
            bind:value={imageUrl}
            type="text"
            class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Paste image link here"
        />
        <button
            on:click={addImage}
            class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
            Add Image
        </button>
    </div>

    <div class="mt-6 grid grid-cols-2 gap-4 w-full max-w-md">
        {#each images as img, i}
            <img src={img} alt={`User provided image ${i + 1}`} class="w-full h-auto rounded-lg shadow-md" />
        {/each}
    </div>
</div>

