<script>
	import Header from '$lib/components/header.svelte';
	import PiePostHeader from '$lib/components/piepost_components/pie_post_header.svelte';
	import LinkManager from '$lib/components/piepost_components/link_manager.svelte';
	import PostCard from '$lib/components/post_card.svelte';
	export let data;
	const posts = data.posts ?? [];
</script>

<Header></Header>
<PiePostHeader title="PiePost Feed" subtitle="Follow PiePost Users"></PiePostHeader>

<div class="flex p-3 px-3">
	<h1 class="text-xl font-bold">PiePost Feed</h1>
</div>

<div class="grid grid-cols-1 md:grid-cols-5 gap-5 p-1">
	<div class="order-2 md:order-1 md:col-span-3">
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
	<div class="order-1 md:order-2 md:col-span-2">
		<h1 class="mb-4 text-2xl font-bold">PiePost Link Manager</h1>
		<a href="/piepost/community" class="text-lg">Find Other PiePost Users</a>
		<p>
			To follow other pie post users enter their PiePost Website Url followed by /posts.json. <br />
			Example: https://mitch-palczewski.github.io/posts.json
		</p>
		<LinkManager></LinkManager>
	</div>
</div>
