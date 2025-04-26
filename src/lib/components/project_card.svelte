<script>
	export let title;
	export let description;
	export let imageUrl;
	export let link;
	export let date;
	export let htmlContent;
</script>

<div
        class="card group m-8 bg-[#FEF6FC] w-120 h-90 border-4 border-[#703622] p-4 text-center shadow-md transition-colors duration-300 hover:bg-[#226670] hover:border-[#CCB8B2] hover:w-130"
>
    <a href={link} rel="noopener" class="block">
        <h2 class="text-right text-blue-900 group-hover:text-blue-100">{date}</h2>
        <img src={imageUrl} alt={title} class="card-image w-full h-48 object-contain" />
        <div class="card-content text-black group-hover:text-white">
            <h2 class="my-2 text-xl font-semibold">{title}</h2>
            <p class="text-left">{description}</p>
            <div class="text-left group-hover:text-white">
                {@html htmlContent}
            </div>
        </div>
    </a>
</div>
