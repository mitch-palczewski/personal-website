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

<h1 class="mb-8 text-center text-3xl font-bold">Next Brush Stroke Predictor</h1>
<!-- Images Grid -->
<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
	<!-- G1 -->
	<div>
		<img src="\project-assets\nbsp-imgs\screenshotnbsp.png" alt="Project One" class="shadow" />
		<div class="aspect-w-16 aspect-h-8 h-80">
			<iframe
				class="h-full w-full"
				src="https://youtube.com/embed/t9AcXhN30bA"
				frameborder=""
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
				title="Next Brush Stroke Predictor Tutorial"
			></iframe>
		</div>
	</div>

	<div>
		<h2 class="pt-3 text-xl font-semibold">About:</h2>
		<p class="pt-3 text-xl">
			The Next Brush Stroke Predictor (NBSP) is a digital drawing application that captures the
			users brush strokes as they draw and uses this data to predict how the user would respond to a
			canvas. The program captures user choice. Given a canvas, what do you do next? How are you
			creating tension? How do you handle composition? It recycles these choices and reproduces a
			choice when the input canvases are similar.
		</p>
		<p class="pt-3 text-xl">
			As the artists make marks on the canvas, they are depositing something more than the mark
			itself. The act of mark making encodes the artists’ internal world made up of subconscious
			impulses and intentional efforts. Each mark is the stamp of the artist’s identity. The NBSP
			algorithm stores these stamps and recycles them when the canvas is in a similar context.
		</p>
		<p class="pt-3 text-xl">
			The program does not know what an apple is if you draw one, but it does know about the
			relationship of that grey blob to any other blob. It understands arrangement of values and the
			action of creating tension. Although the images NBSP produces will be abstract, they will
			still retain meaning, intent, and information. The algorithm exclusively uses data given to it
			meaning it is deeply personal and connected to the artist.
		</p>
	</div>
	<!-- G2 -->
	<div class="p-3 shadow-lg">
		<h2 class="pt-3 text-xl font-semibold">Tutorial:</h2>
		<a
			href="https://youtu.be/oKqc3O4MdX0"
			class="font-medium text-blue-600 hover:underline dark:text-blue-500"
			>NBSP_Tutorial
		</a>
		<div class="aspect-w-16 aspect-h-8 h-80">
			<iframe
				class="h-full w-full"
				src="https://www.youtube.com/embed/oKqc3O4MdX0"
				frameborder=""
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
				title="Next Brush Stroke Predictor Tutorial"
			></iframe>
		</div>
	</div>
	<div class="p-3 shadow-lg">
		<h2 class="pt-5 text-xl font-semibold">
			Download: <a
				href="https://1drv.ms/u/c/389cbf8378d0340e/EbndgWs5yFhPsNVytrWq7IQBaEjQyljc-kpxFXpaBm8ugg?e=CUUaKu"
				class="pl-2 font-medium text-blue-600 hover:underline dark:text-blue-500"
				>Next_Brush_Stroke_Predictor0.1.2
			</a>
		</h2>
		<p class="pt-5">Next Brush Stroke Predictor 0.1.2</p>
		<hr class="my-1 border-t-2 border-gray-400" />
		<h5>
			OneDrive Download: <a
				href="https://1drv.ms/u/c/389cbf8378d0340e/EbndgWs5yFhPsNVytrWq7IQBaEjQyljc-kpxFXpaBm8ugg?e=CUUaKu"
				class="pl-2 font-medium text-blue-600 hover:underline dark:text-blue-500"
				>Next_Brush_Stroke_Predictor0.1.2
			</a>
		</h5>
		<h5>
			Github: <a
				href="https://github.com/mitchp819/next_brush_stroke_predictor_app"
				class="pl-2 font-medium text-blue-600 hover:underline dark:text-blue-500"
				>Git_Hub_NBSP0.1.2</a
			>
		</h5>

		<p class="pt-5">Next Brush Stroke Predictor 0.2 (Under Construction)</p>
		<hr class="my-1 border-t-2 border-gray-400" />
		<h5>
			Github: <a
				href="https://github.com/mitchp819/next_brush_stroke_predictor_app_0.2"
				class="pl-2 font-medium text-blue-600 hover:underline dark:text-blue-500">Git_Hub_NBSP0.2</a
			>
		</h5>
	</div>
	<!-- G3 -->
	<div>
		<img src="\project-assets\nbsp-imgs\img5x5 .png" alt="5x5 Generated Images" class=" " />
		<h4 class="mb-8 text-center text-3xl font-bold">Database: Foundations</h4>
	</div>
	<div>
		<img src="\project-assets\nbsp-imgs\img5x5-orig.png" alt="5x5 Generated Images" class=" " />
		<h4 class="mb-8 text-center text-3xl font-bold">Database: Origins</h4>
	</div>
	<!-- G4 -->
     <div>
        <div class="aspect-w-16 aspect-h-8 mx-auto h-80 w-full mb-3">
            <iframe
                class="h-full w-full"
                src="https://youtube.com/embed/7kp6JdZU3A0"
                frameborder=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="Video showcasing Next Brush Stroke Predictor"
            ></iframe>
        </div>
        <div class="aspect-w-16 aspect-h-8 mx-auto h-80 w-full">
            <iframe
                class="h-full w-full"
                src="https://youtube.com/embed/zm5aYQVWDbI"
                frameborder=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="Video showcasing Next Brush Stroke Predictor"
            ></iframe>
        </div>
     </div>

	<div class="mt-8 text-center">
		<h2 class="pt-3 text-xl font-semibold">On Tension</h2>
		<p class="text-left text-lg">
			Given two elements X and Y and their respective meanings X_m, Y_m arranged in a composition C.
			The resulting meaning of the composition C_m does not equal the sum of the element’s meanings,
			it indeed contains more meaning than the parts of its sum. C_m > X_m + Y_m. There is a missing
			factor, the relationship R between X and Y. The meaning of each element is scaled by its
			relationship to the other element. C_m >= X_m * R_y + Y_m * R_x.
		</p>
		<p class="text-left text-lg">
			For example, given a knife and an apple. Individually a knife could be a weapon, but we know
			given the context of apple it is most probably used as a tool. In addition, an apple can be
			immature still stuck to the tree, just right for eating, or rotten on the ground. The presence
			of the knife implies the apple is probably just right for eating. Thus, the meaning of each
			element has been multiplied.
		</p>
		<p class="text-left text-lg">
			In painting this is referred to as Tension. Tension in painting refers to the relationships of
			visual elements. It is the interplay of line, shape, color, contrast that describes
			composition. Tension adds drama and depth to an image and is used to evoke emotion from the
			viewer or communicate thematic content or psychological states.
		</p>
	</div>
</div>

<img
	src="\project-assets\nbsp-imgs\model_method_example.png"
	alt="Model Method Example"
	class="mx-auto  pt-8"
/>
<h4 class="pb-8 text-center text-xl font-bold">Experimental Algorithm Design</h4>
