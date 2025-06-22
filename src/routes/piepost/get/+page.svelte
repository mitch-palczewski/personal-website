<script>
	import Nav from '$lib/components/header.svelte';
	import PiePostHeader from '$lib/components/piepost_components/pie_post_header.svelte';
</script>

<Nav></Nav>
<PiePostHeader title="Get PiePost" subtitle=""></PiePostHeader>

<div class="grid_box mx-9 my-3 grid grid-cols-1 gap-3 lg:grid-cols-2">
	<div class="">
		<h1 class="font-bold">About PiePost</h1>
		<p>
			PiePost is a desktop appliction that builds you a personal website and automates the posting
			process. Easily build and maintain your blog, scrapbook, or public journal. PiePost makes it
			easy, if you are an experienced developer or new to coding, PiePost will save you time
			formating and deploying html. Upload your media, write a caption, and all it takes is a click
			of "Build Post". Your website will be up and running.
			<br />
			With PiePost you have complete control over your data and your website. PiePost automates writing
			code but the code is still html and easily editable. Your public data is stored in posts.json which
			you have the freedom to edit and delete.
		</p>
	</div>
	<div class="">
		<ul>
			<li>File Size: 14.5 MB</li>
			<li>
				<h1>Zip File Content</h1>
				<h1><span class="font-bold">assets</span>: folder - stores uploaded images</h1>
				<h1><span class="font-bold">config</span>: folder - stores app data and prefrences</h1>
				<h1><span class="font-bold">html_components</span>: folder - stores html snippets</h1>
				<h1><span class="font-bold">index.html</span>: html - your webpage</h1>
				<h1>
					<span class="font-bold">PiePost.exe</span>: executable - Click on this to build your
					webpage
				</h1>
				<h1>
					<span class="font-bold">posts.json</span>: json - stores information about your posts to
					make availible to the internet
				</h1>
				<h1><span class="font-bold">script.js</span>: javascript - javascript functionality</h1>
				<h1><span class="font-bold">styles.css</span>: css - custom css styles</h1>
			</li>
		</ul>
	</div>
</div>

<div class="center">
	<a
		href="/downloadable/PiePost 1.2.0.zip"
		download="PiePost 1.2.0.zip"
		class="download-btn text-center"
	>
		Windows Download PiePost 1.2.0
	</a>

	<a
		href="/downloadable/PiePost 1.2.0-src.zip"
		download="PiePost 1.2.0-src.zip"
		class="download-btn text-center"
	>
		Source Code Download PiePost 1.2.0-src
	</a>
</div>

<div class="center mx-1 sm:mx-9 my-3 bg-gray-200 p-1 sm:p-3">
	<div>
		<p>
			To set up PiePost it takes a few steps. PiePost writes html for you but you still need to host
			your website somewhere. There are many options for free or paid website hosting. The
			recommended and easiest option is github pages. Bellow are steps to set this up.
		</p>
		<ul>
			<h1 class="font-bold">What you need:</h1>
			<ol>1 - PiePost Desktop Application</ol>
			<ol>2 - Github Account</ol>
			<ol>3 - Github Desktop Application (for ease of use)</ol>
		</ul>
		<p>
			If you have not done so allready create a Github Account and download PiePost and Github
			Desktop.
		</p>
		<br />
		<h1 class="font-bold">Step 1 Create a github pages repository</h1>
		<p>
			Go to GitHub and create a new public repository named username.github.io, where username is
			your username (or organization name) on GitHub. <br /> If the first part of the repository doesn’t
			exactly match your username, it won’t work, so make sure to get it right. The repository must be
			public.
		</p>
		<div class="flex flex-col items-center space-y-4 p-5">
			<img
				src="/project-assets/piepost/tutorial/s1.png"
				alt="PiePost Tutorial s1"
				class="responsive-img"
			/>
			<img
				src="/project-assets/piepost/tutorial/s2.png"
				alt="PiePost Tutorial s2"
				style="height: 600px; object-fit: contain;"
			/>
		</div>
		<br />
		<h1 class="font-bold">Step 2 Cloning</h1>
		<p>
			In github desktop go to file -> clone repository. <br /> Then select the repository you just made
			username.github.io and the folder in which you wish it to live This will create a folder called
			username.github.io
		</p>
		<div class="flex flex-col items-center space-y-4 p-5">
			<img
				src="/project-assets/piepost/tutorial/s3.png"
				alt="PiePost Tutorial s3"
				class="responsive-img"
			/>
			<img
				src="/project-assets/piepost/tutorial/s4.png"
				alt="PiePost Tutorial s4"
				style="height: 600px; object-fit: contain;"
			/>
			<img
				src="/project-assets/piepost/tutorial/s5.png"
				alt="PiePost Tutorial s5"
				class="responsive-img"
			/>
		</div>
		<br />
		<h1 class="font-bold">Step 3 Copy Files</h1>
		<p>
			Unzip and copy the contents of the PiePost folder zipfile into that folder username.github.io
		</p>
		<div class="flex flex-col items-center space-y-4 p-5">
			<img
				src="/project-assets/piepost/tutorial/s6.png"
				alt="PiePost Tutorial s6"
				class="responsive-img"
			/>
		</div>
		<br />
		<h1 class="font-bold">Step 4 Configure Git</h1>
		<p>
			open PiePost.exe
			<br /><br />
			On the landing page <br />
			Edit the base link. <br />
			Enter https://username.github.io/<br />
			<br /><br />

			Navigate to configure website -> general configuration <br />
			Edit the github repository link<br />
			Enter https://github.com/username/username.github.io.git<br />
			<br /><br />
			(Where username is your github username)
		</p>
		<div class="flex flex-col items-center space-y-4 p-5">
			<img
				src="/project-assets/piepost/tutorial/s7.png"
				alt="PiePost Tutorial s7"
				class="responsive-img"
			/>
			<img
				src="/project-assets/piepost/tutorial/s8.png"
				alt="PiePost Tutorial s8"
				class="responsive-img"
			/>
		</div>
		<h1 class="p-5 text-4xl font-bold">You Are Ready To Start Posting</h1>
		<p>Note: This is the easiest but not the only way to host your PiePost website.</p>
	</div>
</div>

<style>
	ul {
		list-style-type: circle;
		padding-left: 1rem;
	}
	.grid_box > div {
		background-color: beige;
		padding: 0.5rem;
	}
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.download-btn {
		display: inline-block;
		border-radius: 0.125rem;
		background-color: #2563eb;
		padding: 0.5rem 1rem;
		font-weight: 500;
		color: #fff;
		transition: background-color 0.2s;
		font-size: xx-large;
	}
	.download-btn:hover {
		background-color: #1d4ed8;
	}
</style>
