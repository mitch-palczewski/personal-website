<script>
    export let seconds = 45;
    export let text = 'next';
    export let link = '#';
    export let textColor = 'text-gray-300'; // Tailwind class for text color
    import { onMount } from 'svelte';
    let showLink = false;

    onMount(() => {
        setTimeout(() => {
            showLink = true;
        }, seconds * 1000);
    });
</script>

{#if showLink}
    <a
        href={link}
        class="fixed bottom-10 right-10 rounded px-1 py-1 font-bold transition hover:bg-blue-400 {textColor} text-2xl"
        style="z-index: 10;"
    >
        {text}
    </a>
{/if}
