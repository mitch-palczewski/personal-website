<script>
	import Header from '$lib/components/header.svelte';
	import PiePostHeader from '$lib/components/piepost_components/pie_post_header.svelte';
	import LinkManager from '$lib/components/piepost_components/link_manager.svelte';
	import PostCard from '$lib/components/post_card.svelte';
	export let data;
	const posts = data.posts ?? [];
</script>
<Header></Header>
<PiePostHeader title = "PiePost Feed" subtitle = "Follow PiePost Users"></PiePostHeader>

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
			username={post.username}
			profile_pic={post.profile_pic}
		/>
	{/each}
</div>
<div class="col-span-2">
<h1 class="text-2xl font-bold mb-4">PiePost Link Manager</h1>
<a href="/piepost/community" class="text-lg">Find Other PiePost Users</a>
<p>To follow other pie post users enter their PiePost Website Url followed by /posts.json. <br> Example: https://mitch-palczewski.github.io/posts.json</p>
<LinkManager></LinkManager>
</div>


</div>



