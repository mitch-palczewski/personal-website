<script>
	export let title;
	export let description;
	export let imageUrl;
	export let link;
	export let bg_color;
</script>

<div class="card m-8 max-w-xs border border-gray-300 p-4 text-center shadow-md {bg_color}">
	<a href={link} target="_blank" rel="noopener" class="block">
		<img src={imageUrl} alt={title} class="card-image h-auto w-full rounded-t-lg" />
		<div class="card-content">
			<h2 class="my-2 text-xl font-semibold">{title}</h2>
			<p class="text-left text-gray-600">{description}</p>
		</div>
	</a>
</div>
