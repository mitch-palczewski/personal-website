<script>
    // List of links
    const links = [
        '/projects/painting-series-11-24/p1'
        ,'/projects/painting-series-11-24/p2'
        ,'/projects/painting-series-11-24/p3'
    ];

    // Function to navigate to a random link
    function goToRandomLink() {
        const randomIndex = Math.floor(Math.random() * links.length);
        const randomLink = links[randomIndex];
        window.location.href = randomLink; // Redirect to the random link
    }
</script>

<div class="flex justify-center items-center h-screen bg-gray-100">
    <button
        on:click={goToRandomLink}
        class="px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition"
    >
        Go to Random Page
    </button>
</div>