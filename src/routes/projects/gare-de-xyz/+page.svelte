<script lang="ts">
	import { onMount } from 'svelte';
	type ImageModule = { default: string};
	let imageUrl = '';
	onMount(() => {
		const images = import.meta.glob('$lib/image-collections/gare-de-xyz-sketches/*.{jpg,png}', { eager: true}) as Record<string, ImageModule>;
		const imageArray = Object.values(images).map((module)=>module.default);
		const randomIndex = Math.floor(Math.random() * imageArray.length);
		imageUrl = imageArray[randomIndex]
	});

</script>

<!--TITLE-->
<div
	class="min-h-screen bg-blue-500 bg-cover bg-top p-5"
	style="background-image: url('/project-assets/gare-de-xyz-imgs/mountain3.png')"
>
	<h1 class="p-8 py-13 text-center text-5xl font-bold text-red-100 underline">Gare De Vector3</h1>
	<div class="mx-2 border-4 border-gray-100 bg-white sm:mx-10 md:mx-50 lg:mx-70">
		<iframe
			class="h-[200px] w-full sm:h-[400px]"
			src="https://youtube.com/embed/IzUIJQAKfHw"
			frameborder="0"
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
		class="mx-10 block bg-blue-900 p-2 py-10 text-center text-6xl font-bold text-white hover:bg-orange-300 hover:text-black hover:underline"
	>
		Play Gare De Vector3 on the web
	</a>
	<a
		href="https://mitchpalczewski.itch.io/gare-de-vector3"
		target="_blank"
		rel="noopener"
		class="mx-10 block bg-blue-900 p-2 py-10 text-center text-6xl font-bold text-white hover:bg-orange-300 hover:text-black hover:underline"
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
				loading="lazy"
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
		loading="lazy"
	/>
	<img
		src="\project-assets\gare-de-xyz-imgs\sc2.png"
		alt="Game Screenshots"
		class="h-auto w-full shadow-md"
		loading="lazy"
	/>
	<img
		src="\project-assets\gare-de-xyz-imgs\sc3.png"
		alt="Game Screenshots"
		class="h-auto w-full shadow-md"
		loading="lazy"
	/>
	<img
		src="\project-assets\gare-de-xyz-imgs\sc4.png"
		alt="Game Screenshots"
		class="h-auto w-full shadow-md"
		loading="lazy"
	/>
</div>

<div class="bg-blue-500 p-5 sm:px-5 md:px-20 lg:px-75">
	<div class="bg-orange-100 p-2 sm:p-3 md:p-5">
		<p class="p-2 sm:p-3">
			While backpacking through Europe, I made a mission of capturing my travels through photos,
			sketches, and notes. Through the act of making the experience ingrained in my memory and
			person. Without much thought or contemplation, I pursued the world in its totality and
			stumbled into the work of an artist. The created material documents an artistic awakening and
			became a touchstone to the self.
		</p>
		<p class="p-2 sm:p-3">
			Gare de Vector3 is a series of environments built from this scattering of documentation.
			Materials are weaved together to build a structure of context, where each material enhances
			the meaning of all others. Elements are arranged in a 3D digital world to form architectural
			space. Utilizing the prompt ‘blanket forts', these spaces are inhabited by the artist’s
			memories and built from found materials. Gare de Vector3 does not intend on capturing the
			physical world. The project instead collages physical and non-physical materials to assemble
			the artist’s memory and imbed a structure with the artist’s spirit. In this art piece, agents
			can traverse and interact with the digital environment. The work invites you to step into the
			artist's shoes and participate in an exploration of space, accessing and sharing the spirit of
			the artist. The interpretation of the physical space is left undefined to be felt and
			contemplated.
		</p>
		<p class="p-2 sm:p-3">
			Memory is often observed as fragments strung together with our imagination to create something
			more coherent. We place data points in a web and fill in the gaps to reveal a picture of
			reality, like a set of stars void of meaning joined to represent a constellation. This was the
			thought process when designing the spaces of Gare de Vector3. Key materials or ideas anchor
			the spaces and found media fills in the gaps. As each piece of material is added, the
			information the structure holds grows exponentially because information lies not just in the
			material but in each of its relationships.
		</p>
		<p class="p-2 sm:p-3">
			So, what does it mean to create a structure of a memory, and how does that relate to the
			spirit and the self? Memory is liquid. It is subject to change and influence. A memory does
			not just capture an event! All that precedes it frames and wraps the memory in context. Nor is
			a memory static, it is ever bending and distorting, filtered by the events of the present. In
			this way, memory transcends time to capture the entire self: past, present, and future. To
			materialize a memory is to embed an object with a spirit. Once materialized, an object
			imbedded with memory separates from the self and obtains a self of its own. Like a newborn
			child, it retains attributes of the parent, but its personality diverges as it grows. This
			spirit can be observed in qualities of the object, its personality, its affect on space, and
			its interaction with agents.
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

<!-- Random Images-->
{#if imageUrl}
  <img src={imageUrl} alt="A randomly selected sketch from Gare De XYZ" class="max-w-full h-auto rounded shadow-lg" />
{/if}

 <!--
<div class="min-h-screen bg-blue-500 bg-cover bg-top p-5">
	<a href="\projects\gare-de-xyz\sketchbook" target="_blank" rel="noopener" class="group block">
		<div class="grid grid-cols-3 gap-1 bg-blue-500 p-5">
			{#each random_img_set1 as img}
				<img src={img} alt="" class="shadow-lg" />
			{/each}
		</div>
		<h1 class="text-center text-3xl transition-colors duration-300 group-hover:bg-orange-300">
			View Entire Sketchbook
		</h1>
	</a>
</div>
-->
<div class="grid grid-cols-1 gap-1 bg-blue-500 p-5 pt-5 sm:grid-cols-1 md:grid-cols-3">
	<img
		src="\project-assets\gare-de-xyz-imgs\Bull.png"
		alt="Game Screenshots"
		class="h-auto w-full bg-orange-100 shadow-md"
		loading="lazy"
	/>
	<img
		src="\project-assets\gare-de-xyz-imgs\RedCloud.png"
		alt="Game Screenshots"
		class="h-auto w-full bg-orange-100 shadow-md"
		loading="lazy"
	/>
	<img
		src="\project-assets\gare-de-xyz-imgs\Spookyman .png"
		alt="Game Screenshots"
		class="h-auto w-full bg-orange-100 shadow-md"
		loading="lazy"
	/>
</div>
