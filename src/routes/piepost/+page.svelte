<script>
	import LinkManager from '$lib/components/link_manager.svelte';
	import PostCard from '$lib/components/post_card.svelte';
	export let data;
    const posts = data.posts
</script>

<div class="flex p-3 px-3">
<h1 class="font-bold text-xl">PiePost Feed</h1>
</div>

<div class="grid grid-cols-5 gap-5">
<div class="col-span-3">
	{#each posts as post}
		<PostCard
			title={post.title}
			date={post.date}
			media_link={post.media_link}
			caption={post.caption}
			base_link={post.base_link}
		/>
	{/each}
</div>
<div class="col-span-2">
<h1 class="text-2xl font-bold mb-4">PiePost Link Manager</h1>
<p>To follow other pie post users enter their PiePost Website Url follwed by /posts.json. <br> Example: https://username.github.io/posts.json</p>
<LinkManager></LinkManager>
</div>


</div>



