<script>
    export let title;
    export let description;
    export let imageUrl;
    export let link;
    export let bg_color;
    export let date;
    export let htmlContent; 
</script>

<div class="card m-8 max-w-xs border border-gray-300 p-4 text-center shadow-md {bg_color} hover:bg-orange-100 transition-colors duration-300">
    <a href={link} target="_blank" rel="noopener" class="block">
        <h2 class="text-right">{date}</h2>
        <img src={imageUrl} alt={title} class="card-image h-auto w-full" />
        <div class="card-content">
            <h2 class="my-2 text-xl font-semibold">{title}</h2>
            <p class="text-left text-gray-600">{description}</p>
            <div class="text-left text-gray-600">
                {@html htmlContent} 
            </div>
        </div>
    </a>
</div>
