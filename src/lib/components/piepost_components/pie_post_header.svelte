<script>
    export let title; 
    export let subtitle;
</script>

<div class="bg-blue-100 flex flex-col sm:flex-row items-center gap-4 pl-4 sm:p-4">
    <img
        style="height: 100px;"
        src="/project-assets/piepost/piepost12.png"
        alt="PiePost Logo"
    />
    <div >
        <h1 class="text-3xl font-bold">{title}</h1>
        <p>{subtitle}</p>
    </div>
    
    
    <nav class="sm:ml-auto flex gap-1">
        <a
            href="/piepost/feed"
            class="relative sm:text-lg px-2 py-1 rounded-lg text-blue-800 font-semibold transition-all duration-200 hover:bg-blue-200 hover:shadow-lg sm:hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
            PiePost-Feed
        </a>
        <a
            href="/piepost/get"
            class="relative sm:text-lg px-2 py-1 rounded-lg text-blue-800 font-semibold transition-all duration-200 hover:bg-blue-200 hover:shadow-lg sm:hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
            PiePost-Get
        </a>
        <a
            href="/piepost/community"
            class="relative sm:text-lg px-2 py-1 rounded-lg text-blue-800 font-semibold transition-all duration-200 hover:bg-blue-200 hover:shadow-lg sm:hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
            PiePost-Community
        </a>
        <a
            href="/piepost"
            class="relative sm:text-lg px-2 py-1 rounded-lg text-blue-800 font-semibold transition-all duration-200 hover:bg-blue-200 hover:shadow-lg sm:hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
            PiePost-About
        </a>
    </nav>
</div>