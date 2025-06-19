<script>
	import LinkManager from '$lib/components/link_manager.svelte';
	import PostCard from '$lib/components/post_card.svelte';
	export let data;
    const posts = data.posts
</script>

<LinkManager></LinkManager>

<h2>Server Retrieved Cookie</h2>
<div class="col-span-2">
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
