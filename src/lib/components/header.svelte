<script>
    const links = [
        //Projects
        { name: 'Next Brush Stroke Predictor', href: '/projects/next-brush-stroke-predictor' },
        { name: 'Gare De XYZ', href: '/projects/gare-de-xyz' },
        { name: 'Painting Series 11-24', href: '/projects/painting-series-11-24' },
        { name: 'Sim City Architecture', href: '/projects/sim-city-arch' },

        //Other
        { name: 'itch.io games', href: 'https://mitchpalczewski.itch.io/' }
    ];

    const selectedLinks = links.sort(() => 0.5 - Math.random()).slice(0, 3);
</script>

<nav class="bg-blue-500 px-5 flex items-center space-x-4">
    <a href="/" class=" hover:text-white">Mitchell Palczewski</a>
    <a href="/" class=" hover:text-white">Home</a>
    <div class="ml-auto flex justify-end space-x-4">
        {#each selectedLinks as link}
            <a href={link.href} class=" hover:text-white">{link.name}</a>
        {/each}
    </div>
</nav>