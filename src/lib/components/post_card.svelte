<script>
	export let date;
	export let title;
	export let media_link;
	export let caption;
	export let base_link;
	export let username;
	export let profile_pic;
</script>

<div
	class="card mb-5 flex flex-col items-center border-3 border-gray-700 bg-gray-200 p-2 shadow-lg"
>
	<div class="flex items-center space-x-3 p-4">
		<img
			src={profile_pic}
			alt={username}
			class="h-10 w-10 rounded-full object-cover"
		/>
		<span class="text-lg font-semibold text-gray-800">{username}</span>
	</div>
	<h2 class="text-xl font-semibold text-gray-800">{title}</h2>
	<p class="text-sm text-gray-500">{date}</p>
	<img src={media_link} alt={title} class="h-auto w-full border-3 border-gray-700 object-cover" />
	{#if caption !== ''}
		<div class="my-1 border-1 border-black bg-white p-1">
			<p class="text-gray-700">{caption}</p>
		</div>
	{/if}

	<a
		href={base_link}
		class="mt-2 inline-block rounded bg-blue-300 px-4 py-2 text-white transition hover:bg-blue-400"
		>Visit My Scrapbook</a
	>
</div>
