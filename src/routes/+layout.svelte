<script lang="ts">
    import '../app.css';

    let { children } = $props();
</script>

<nav class="bg-blue-500 px-5 flex items-center space-x-4">
    <p>Mitch Palczewski</p>
    <a href="/">Home</a>
    <a href="https://mitchpalczewski.itch.io/">itch.io</a>
    <a href="https://www.youtube.com/@MitchPalczewski">youtube</a>
    <a href="https://github.com/mitch-palczewski">github</a>
</nav>

{@render children()}
