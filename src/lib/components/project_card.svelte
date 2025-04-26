<script>
	export let title;
	export let description;
	export let imageUrl;
	export let link;
	export let date;
	export let htmlContent;
</script>

<div
	class="card group m-8 h-auto w-auto border-2 border-[#E3D373] bg-transparent text-centertransition-colors duration-300 
    hover:shadow-2xl hover:shadow-[#342C63] hover:border-2 hover:bg-gradient-to-r hover:from-[#226670] hover:to-[#144B53] hover:border-[#CCB8B2] 
    md:w-170 lg:w-230"
>
	<div class="border-5 border-transparent hover:border-[#CCB8B2]">
		<div class="border-5 border-transparent hover:border-[#226670]">
			<a href={link} rel="noopener" class="block">
			<div class="grid-col-1 grid gap-0 md:grid-cols-2">
				<!-- First Column -->
				<div
					class="border-7 border-[#C5795E] bg-[#FEF6FC] p-5 transition-colors shad
                    duration-300 group-hover:border-transparent group-hover:bg-transparent "
				>
					<img src={imageUrl} alt={title} class="card-image h-48 w-full object-contain" />
					<div class="card-content text-black group-hover:text-white">
						<h2 class="my-2 text-3xl font-semibold">{title}</h2>
						<p class="text-left">{description}</p>
						<div class="text-left group-hover:text-white">
							{@html htmlContent}
						</div>
					</div>
				</div>

				<!-- Second Column -->
				<div class="bg-transparent">
					<h2 class="p-5 text-right text-blue-900 group-hover:text-blue-50">{date}</h2>
				</div>
			</div>
        </a>
		</div>
	</div>
</div>
