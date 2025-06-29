<script>
	import PiePostHeader from '$lib/components/piepost_components/pie_post_header.svelte';
	import Header from '$lib/components/header.svelte';
</script>

<Header></Header>
<PiePostHeader title="PiePost" subtitle=""></PiePostHeader>

<div class="m-1 sm:m-5">
	<div class="grid grid-cols-1 gap-1 sm:grid-cols-2">
		<div>
			<img src="/project-assets/piepost/my_piepost.jpeg" class="w-auto pb-3" alt="My Piepost" />
			<img
				src="/project-assets/piepost/piepostexe.png"
				class="w-autopb-3"
				alt="Pie Post Executable"
			/>
			<img
				src="/project-assets/piepost/tutorial/s6.png"
				class="w-autopb-3"
				alt="Pie Post Executable"
			/>
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
				<br />
				With PiePost you have complete control over your data and your website. PiePost automates writing
				code but the code is still html and easily editable. Your public data is stored in posts.json
				which you have the freedom to modify, edit and delete.
				<br />
				<a
					href="https://mitch-palczewski.github.io/"
					class="text-blue-600 underline transition-colors duration-200 hover:text-blue-800"
				>
					Example PiePost Website
				</a>
			</p>
			<br />
			<h1 class="text-lg font-bold">Why PiePost</h1>
			<p>
				PiePost is a decentralized social media environment, where profiles and feeds are modular
				and free. What binds PiePosts accounts together is the structure of the posts.json data
				attached to each website. That's it! There are no other requirements to be part of the
				system. Users are free to creatively build upon their PiePost websites, integrate them into
				there own environments, and even build there own feeds to host there personal communities.
				Users host there data privately meaning there are no accounts, no adds, no servers, and no
				one to tell you what to do.
				<br />
				<br />
				PiePost is an environment based upon modular expansion, organic growth, and urban design principles.
				It is social media that is adaptable and transformable. It can support both small and large communities,
				and easily integrate into existing infrastructures. An environment must have some centralized
				axioms to build structures and networks from but ideally they are few and simple. For PiePost
				this axiom is the structure (posts.json) and naming conventions behind it.
				<br />
				<br />
				Like train infrastructure there must be a defined and agreed upon rail and rail gauge (distance
				between rails), but after that there can be many types and brands of locomotives and train cars
				that serve a variety of purposes. Stations are customizable and lead to different destinations.
				PiePost seeks to emulate this type of structure where there is some amount of standardization
				but after that it can branch freely and be built organically to fit the needs of the community.
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
