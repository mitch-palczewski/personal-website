<script>
  export let title;
  export let description;
  export let imageUrl;
  export let link;
</script>

<div class="card border border-gray-300 p-4 max-w-xs text-center shadow-md">
  <img src="{imageUrl}" alt="{title}" class="card-image w-full h-auto rounded-t-lg" />
  <div class="card-content">
    <h2 class="text-xl font-semibold my-2">{title}</h2>
    <p class="text-gray-600">{description}</p>
    <a href="{link}" target="_blank" rel="noopener" class="card-link text-blue-600 font-bold hover:underline">Learn More</a>
  </div>
</div>
