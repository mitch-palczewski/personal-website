<script>
	export let title;
	export let description;
	export let imageUrl;
	export let link;
	export let date;
	export let htmlContent;
</script>

<div
	class="card group
        my-8 h-auto w-auto border-2 border-[#E3D373]
        bg-transparent text-center transition-colors duration-300
        hover:border-2 hover:border-[#CCB8B2]
        hover:bg-gradient-to-r hover:from-black hover:via-gray-800 hover:to-blue-200 hover:shadow-2xl hover:shadow-[#244a4d] md:w-170 lg:w-auto"
>
	<div class="border-5 border-transparent hover:border-[#CCB8B2]">
		<div class="border-5 border-transparent hover:border-blue-200">
			<a href={link} rel="noopener" class="block">
                
				<!--RIGHT CONTENT-->
				<h2 class="p-1 pr-3 text-right text-blue-900 group-hover:text-blue-900 group-hover:font-bold">{date}</h2>

				<!--LEFT CONTENT-->
				<div
					class=" md:mr-50 lg:mr-80 border-7
                    border-[#82bb92] bg-[#FEF6FC] p-5
                    transition-colors duration-300
                    group-hover:border-transparent group-hover:bg-transparent"
				>
					<img src={imageUrl} alt={title} class="card-image h-48 w-full object-contain" />
					<div class="card-content text-black group-hover:text-white">
						<h2 class="my-2 text-xl font-semibold">{title}</h2>
						<p class="text-left">{description}</p>
						<div class="text-left group-hover:text-white">
							{@html htmlContent}
						</div>
					</div>
				</div>
			</a>
		</div>
	</div>
</div>
