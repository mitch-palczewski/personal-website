<script> 
    import PiePostHeader from "$lib/components/piepost_components/pie_post_header.svelte";
    import Header from "$lib/components/header.svelte";
    const knownUsers = [
        "https://mitch-palczewski.github.io/posts.json"
    ]

    
</script>

<Header></Header>
<PiePostHeader title = "PiePost Community" subtitle = "Find Pie Post Users to Follow"></PiePostHeader>


<div class="grid sm:grid-cols-5 grid-cols-1 gap-3"> 
    <div class="col-span-3">

    </div>
    <div class="col-span-2 border-3 p-3 m-3 bg-blue-100">
        <h1 class="text-center font-bold text-xl">PiePost Users</h1>
        {#each knownUsers as user, index}
            <h1>- {user}</h1>
        {/each}
    </div>

</div>