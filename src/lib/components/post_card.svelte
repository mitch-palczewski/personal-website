<script>
	export let date;
	export let title;
	export let media_link;
	export let caption;
	export let base_link;
</script>
<div class="card bg-gray-200 rounded-lg shadow-lg p-2 flex flex-col items-center space-y-4 mb-16 border-3 border-black">
    <h2 class="text-xl font-semibold text-gray-800">{title}</h2>
    <p class="text-sm text-gray-500">{date}</p>
    <img src={media_link} alt={title} class="w-full h-auto object-cover rounded-md" />
    <p class="text-gray-700">{caption}</p>
    <a href={base_link} class="mt-2 inline-block px-4 py-2 bg-blue-300 text-white rounded hover:bg-blue-400 transition">Visit My Scrapbook</a>
</div>
