<script>
	import AppearingLink from '$lib/components/appearing_link.svelte';
</script>

<div
	class="h-screen w-screen bg-[#8aa8b0]"
	style="background-image: url('/project-assets/paintseries11-24/wall_bg.png'); background-size: cover; background-position: center;"
>
	<AppearingLink seconds={30} text="next" link="\projects\painting-series-11-24\p5" textColor="text-yellow-100"/>
</div>
<div
	class="absolute flex h-screen max-h-screen items-center justify-center"
	style="width: 100%; height: 100%; z-index: 5; top: 0; left: 0;"
>
	<img
		src="/project-assets/paintseries11-24/wall_fg.png"
		alt=""
		style="max-width: 100%; max-height: 100%;"
	/>
</div>
