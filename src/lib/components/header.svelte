<script>
    const links = [
        //Projects
        { name: 'Next Brush Stroke Predictor', href: '/projects/next-brush-stroke-predictor' },
        { name: 'Gare De XYZ', href: '/projects/gare-de-xyz' },
        { name: 'Painting Series 11-24', href: '/projects/painting-series-11-24' },
        { name: 'Sim City Architecture', href: '/projects/sim-city-arch' },
        { name: 'Simplify', href: '/projects/simplify' },

        //Other
        { name: 'itch.io games', href: 'https://mitchpalczewski.itch.io/' }
    ];

    const selectedLinks = links.sort(() => 0.5 - Math.random()).slice(0, 3);
</script>

<nav class="bg-black px-5 p-[3px] flex items-center space-x-4">
    <a href="/" class="text-gray-500 hover:text-yellow-500">Mitchell Palczewski</a>
    <a href="/" class="text-gray-500 hover:text-yellow-500">Home</a>
    <div class="ml-auto flex justify-end space-x-4">
        <a href="/piepost" class="text-gray-500 hover:text-yellow-500">PiePost</a>
        <a href="https://mitchpalczewski.itch.io/" class="text-gray-500 hover:text-yellow-500">itch.io games</a>
    </div>
</nav>