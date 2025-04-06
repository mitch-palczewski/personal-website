<script lang="ts">
	type ImageModule = { default: string };

    // Import all images with .jpg and .png extensions from the specified folder eagerly.
    const imageModules = import.meta.glob('/src/lib/image-collections/gare-de-xyz-sketches/*.{jpg,png}', {
        eager: true
	}) as Record<string, ImageModule>;

	// Extract the default exports (i.e., the image URLs)
	let images = Object.entries(imageModules).map(([_, module]) => module.default);

	let currentIndex = 0;

	const nextImage = () => {
		currentIndex = (currentIndex + 1) % images.length;
	};

	const prevImage = () => {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	};
</script>


<div
	class="min-h-screen bg-blue-500 bg-cover bg-top p-5"
	style="background-image: url('/project-assets/gare-de-xyz-imgs/mountain3.png')"
>
	<h1 class="p-8 text-center text-5xl font-bold">Gare De XYZ</h1>

	<div class="mx-100 bg-white">
		<a
			href="http://hyperrhiz.io/hyperrhiz27/assemblages/11-palczewski.html"
			target="_blank"
			rel="noopener"
			class="block"
		>
			<img
				src="\project-assets\gare-de-xyz-imgs\hyperrhizeye.png"
				alt="Hyperrhiz Title"
				class="card-image h-auto w-full p-2"
			/>
			<h1 class="text-l pb-3 text-center">In Accociation with Hyperrhiz New Media Cultures</h1>
		</a>
	</div>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 p-5 bg-blue-500">
    <img src="\project-assets\gare-de-xyz-imgs\sc1.png" alt="Game Screenshots" class="w-full h-auto shadow-md" />
    <img src="\project-assets\gare-de-xyz-imgs\sc2.png" alt="Game Screenshots" class="w-full h-auto shadow-md" />
    <img src="\project-assets\gare-de-xyz-imgs\sc3.png" alt="Game Screenshots" class="w-full h-auto shadow-md" />
    <img src="\project-assets\gare-de-xyz-imgs\sc4.png" alt="Game Screenshots" class="w-full h-auto shadow-md" />
</div>
<img src="\project-assets\gare-de-xyz-imgs\sc-godot.png" alt="Game Screenshots" class="w-full h-auto shadow-md p-5 bg-blue-500" />

<!-- SKETCHES IMAGE CAROUSEL -->
<div class="min-h-screen bg-blue-500 bg-cover bg-top p-5">
    <div class="relative mx-auto w-full max-w-screen-md">
        <a
			href="\projects\gare-de-xyz\sketchbook"
			target="_blank"
			rel="noopener"
			class="block"
		>
        <img
            src={images[currentIndex]}
            alt="Image {currentIndex + 1}"
            class="w-auto max-h-[700px] mx-auto"
        />
        </a>
        <button
            on:click={prevImage}
            class="absolute top-1/2 left-[-70px] -translate-y-1/2 transform bg-gray-800 px-4 py-2 text-white"
        >
            Prev
        </button>
        <button
            on:click={nextImage}
            class="absolute top-1/2 right-[-70px] -translate-y-1/2 transform bg-gray-800 px-4 py-2 text-white"
        >
            Next
        </button>
       
    </div>
</div>
