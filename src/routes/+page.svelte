<script>
	import Nav from '../lib/components/header.svelte';
	import Card from '../lib/components/project_card.svelte';
	import PostCard from '../lib/components/post_card.svelte';
	export let data;
	const posts = Object.entries(data.jsonData)
		.map(([id, post]) => ({ id, ...post }))
		.reverse()
		.slice(0, 20);
</script>

<Nav></Nav>

<div
	class="min-h-screen  bg-top p-5 bg-cover bg-green-200"
	style="background-image: url('/main-assets/asdasd.png')"
>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-6">
		<div class="col-span-4">
			<h1 class="text-[white] font-bold bg-[#82bb92] p-1 m-3">Projects Collections Series</h1>
			{#each data.summaries as { name, image, description, link, htmlContent, date }}
				<Card title={name} {description} imageUrl={image} {link} {date} {htmlContent} />
			{/each}
		</div>
		<div class="col-span-2">
			<h1 class="text-[white] font-bold bg-[#82bb92] rounded p-1 m-3 ">Posts</h1>
			{#each posts as post (post.id)}
				<PostCard
					title={post.title}
					date={post.date}
					media_link={post.media_link}
					caption={post.caption}
					base_link={post.base_link}
				/>
			{/each}
		</div>
	</div>
</div>

