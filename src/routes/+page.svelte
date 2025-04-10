<script>
    import Nav from  '../lib/components/header.svelte';
    import Card from '../lib/components/project_card.svelte';
    export let data;
</script>

<Nav></Nav>
<div class="min-h-screen bg-cover bg-top p-5" style="background-image: url('/main-assets/wavefunctionmountains.png')">

    {#each data.summaries as { name, image, description, link , htmlContent, date}}
        <Card
            title={name}
            description={description}
            imageUrl={image}
            link={link}
            date= {date}
            bg_color = "bg-blue-50"
            htmlContent = {htmlContent}
        />
    {/each}
</div>




