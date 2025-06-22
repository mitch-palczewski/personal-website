<script>
	import PiePostHeader from '$lib/components/piepost_components/pie_post_header.svelte';
	import Header from '$lib/components/header.svelte';
</script>

<Header></Header>
<PiePostHeader title="PiePost" subtitle=""></PiePostHeader>

<div class="m-1 sm:m-5">
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-1">
		<div>
			<img src="/project-assets/piepost/piepostexe.png" class="w-auto" alt="Pie Post Executable" />
		</div>
		<div class="p-3">
			<h1 class="text-lg font-bold">About PiePost</h1>
			<p>
				PiePost is a desktop appliction that builds you a personal website and automates the posting
				process. Easily build and maintain your blog, scrapbook, or public journal. PiePost makes it
				easy, if you are an experienced developer or new to coding, PiePost will save you time
				formating and deploying html. Upload your media, write a caption, and all it takes is a
				click of "Build Post". Your website will be up and running.
				<br />
				With PiePost you have complete control over your data and your website. PiePost automates writing
				code but the code is still html and easily editable. Your public data is stored in posts.json
				which you have the freedom to edit and delete.
			</p>
			<br />
			<a
				href="/piepost/get"
				class="text-lg font-bold transition-colors duration-200 hover:text-blue-600 hover:underline"
				>PiePost-Get</a
			>
			<p>
				PiePost-Get is where you can download the latest version of PiePost. You also can find a
				tutorial and a setup infomation here.
			</p>
			<br />
			<a
				href="/piepost/feed"
				class="text-lg font-bold transition-colors duration-200 hover:text-blue-600 hover:underline"
				>PiePost-Feed</a
			>
			<p>See the latest posts from PiePost users you follow at PiePost-Feed.</p>
			<br />
			<a
				href="/piepost/community"
				class="text-lg font-bold transition-colors duration-200 hover:text-blue-600 hover:underline"
				>PiePost-Community</a
			>
			<p>
				Find PiePost users to follow and explore a variety of PiePost websites at PiePost-Community
			</p>
		</div>
	</div>
</div>
