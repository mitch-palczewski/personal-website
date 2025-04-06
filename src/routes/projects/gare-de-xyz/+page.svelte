<script lang="ts">
	type ImageModule = { default: string };

	// Import all images with .jpg and .png extensions from the specified folder eagerly.
	const imageModules = import.meta.glob(
		'/src/lib/image-collections/gare-de-xyz-sketches/*.{jpg,png}',
		{
			eager: true
		}
	) as Record<string, ImageModule>;

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

<!--TITLE-->
<div
	class="min-h-screen bg-blue-500 bg-cover bg-top p-5"
	style="background-image: url('/project-assets/gare-de-xyz-imgs/mountain3.png')"
>
	<h1 class="p-8 py-13 text-center text-5xl font-bold text-red-100 underline">Gare De Vector3</h1>

    <div class="mx-100 bg-white border-4 border-gray-100">
        <iframe
            class="h-[400px] w-full"
            src="https://youtube.com/embed/IzUIJQAKfHw"
            frameborder=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Next Brush Stroke Predictor Tutorial"
        ></iframe>
    </div>
</div>

<!--HYPERRHIZ LINK-->
<div class="bg-blue-500 p-5">
	<a
		href="https://secure.hyperrhiz.io/mitchell/index.html"
		target="_blank"
		rel="noopener"
		class="mx-10 block bg-blue-900 p-2 py-10 text-center text-6xl font-bold hover:bg-orange-300 hover:underline"
	>
		Play Gare De Vector3 on the web
	</a>
    <a
		href="https://mitchpalczewski.itch.io/gare-de-vector3"
		target="_blank"
		rel="noopener"
		class="mx-10 block bg-blue-900 p-2 py-10 text-center text-6xl font-bold hover:bg-orange-300 hover:underline"
	>
		Or download and play from itch.io
	</a>
</div>

<div
	class="min-h-screen bg-blue-500 bg-cover bg-top p-1"
	style="background-image: url('/project-assets/gare-de-xyz-imgs/grassforeground.png')"
>
	<div class="mx-100 mt-50 bg-white">
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

<div class="grid grid-cols-1 gap-2 bg-blue-500 p-5 sm:grid-cols-2 md:grid-cols-2">
	<img
		src="\project-assets\gare-de-xyz-imgs\sc1.png"
		alt="Game Screenshots"
		class="h-auto w-full shadow-md"
	/>
	<img
		src="\project-assets\gare-de-xyz-imgs\sc2.png"
		alt="Game Screenshots"
		class="h-auto w-full shadow-md"
	/>
	<img
		src="\project-assets\gare-de-xyz-imgs\sc3.png"
		alt="Game Screenshots"
		class="h-auto w-full shadow-md"
	/>
	<img
		src="\project-assets\gare-de-xyz-imgs\sc4.png"
		alt="Game Screenshots"
		class="h-auto w-full shadow-md"
	/>
</div>

<div class="bg-blue-500 p-5 px-75">
    <div class="bg-orange-100 p-1">
        <p class="p-3">
            While backpacking through Europe, I made a mission of capturing my travels through photos,
            sketches, and notes. Through the act of making the experience ingrained in my memory and person.
            Without much thought or contemplation, I pursued the world in its totality and stumbled into the
            work of an artist. The created material documents an artistic awakening and became a touchstone
            to the self.
        </p>
        <p class="p-3">
            Gare de Vector3 is a series of environments built from this scattering of documentation.
            Materials are weaved together to build a structure of context, where each material enhances the
            meaning of all others. Elements are arranged in a 3D digital world to form architectural space.
            Utilizing the prompt ‘blanket forts', these spaces are inhabited by the artist’s memories and
            built from found materials. Gare de Vector3 does not intend on capturing the physical world. The
            project instead collages physical and non-physical materials to assemble the artist’s memory and
            imbed a structure with the artist’s spirit. In this art piece, agents can traverse and interact
            with the digital environment. The work invites you to step into the artist's shoes and
            participate in an exploration of space, accessing and sharing the spirit of the artist. The
            interpretation of the physical space is left undefined to be felt and contemplated.
        </p>
        <p class="p-3">
            Memory is often observed as fragments strung together with our imagination to create something
            more coherent. We place data points in a web and fill in the gaps to reveal a picture of
            reality, like a set of stars void of meaning joined to represent a constellation. This was the
            thought process when designing the spaces of Gare de Vector3. Key materials or ideas anchor the
            spaces and found media fills in the gaps. As each piece of material is added, the information
            the structure holds grows exponentially because information lies not just in the material but in
            each of its relationships.
        </p>
        <p class="p-3"> 
            So, what does it mean to create a structure of a memory, and how does that relate to the spirit
            and the self? Memory is liquid. It is subject to change and influence. A memory does not just
            capture an event! All that precedes it frames and wraps the memory in context. Nor is a memory
            static, it is ever bending and distorting, filtered by the events of the present. In this way,
            memory transcends time to capture the entire self: past, present, and future. To materialize a
            memory is to embed an object with a spirit. Once materialized, an object imbedded with memory
            separates from the self and obtains a self of its own. Like a newborn child, it retains
            attributes of the parent, but its personality diverges as it grows. This spirit can be observed
            in qualities of the object, its personality, its affect on space, and its interaction with
            agents.
        </p>
    </div>
</div>

<div class="bg-blue-500">
	<img
		src="\project-assets\gare-de-xyz-imgs\sc-godot.png"
		alt="Game Screenshots"
		class="h-auto w-full bg-blue-500 p-5 shadow-md"
	/>
</div>

<!-- SKETCHES IMAGE CAROUSEL -->
<div class="min-h-screen bg-blue-500 bg-cover bg-top p-5">
	<div class="relative mx-auto h-[600px] w-full max-w-screen-md">
		<a href="\projects\gare-de-xyz\sketchbook" target="_blank" rel="noopener" class="block">
			<img
				src={images[currentIndex]}
				alt="Image {currentIndex + 1}"
				class="mx-auto max-h-[700px] w-auto"
			/>
		</a>
		<button
			on:click={prevImage}
			class="absolute top-1/2 left-[-70px] -translate-y-1/2 transform bg-gray-800 px-4 py-2 text-white"
		>
			&lt;
		</button>
		<button
			on:click={nextImage}
			class="absolute top-1/2 right-[-70px] -translate-y-1/2 transform bg-gray-800 px-4 py-2 text-white"
		>
			&gt;
		</button>
	</div>
</div>

<div class="grid grid-cols-1 gap-1 bg-blue-500 p-5 sm:grid-cols-1 md:grid-cols-3">
	<img
		src="\project-assets\gare-de-xyz-imgs\Bull.png"
		alt="Game Screenshots"
		class="h-auto w-full bg-orange-100 shadow-md"
	/>
	<img
		src="\project-assets\gare-de-xyz-imgs\RedCloud.png"
		alt="Game Screenshots"
		class="h-auto w-full bg-orange-100 shadow-md"
	/>
	<img
		src="\project-assets\gare-de-xyz-imgs\Spookyman .png"
		alt="Game Screenshots"
		class="h-auto w-full bg-orange-100 shadow-md"
	/>
</div>
