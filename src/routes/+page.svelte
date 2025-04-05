<script>
    import Card from '../lib/components/project_card.svelte';
    export let data;
</script>

<div class="h-screen bg-cover bg-top" style="background-image: url('/main_assets/wavefunctionmountains.png')">
    <h1>Home</h1>
    <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
    
    {#each data.summaries as { name, image, description, link }}
        <Card
            title={name}
            description={description}
            imageUrl={image}
            link={link}
        />
    {/each}
</div>




