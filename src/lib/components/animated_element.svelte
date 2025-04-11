<script>
    export let color = '#fff0d4';
    export let width = '200px';
    export let height = '150px';
	export let top = '';
    export let bottom = '';
    export let left = '';
	export let right = '';
    export let h_time = '0s';
    export let h_dist = '0px';
    export let v_time = '0s';
    export let v_dist = '0px';
	export let z_index = '1';
    export let image = null;

    $: movement = determineMovement();
    $: computedClass = movement === 'both' ? 'diagonal-move' : movement === 'horizontal' ? 'h-move' : movement === 'vertical' ? 'v-move' : '';


    function determineMovement() {
        if ((v_time === '0s' || v_dist === '0px') && (h_time === '0s' || h_dist === '0px')) {
            return 'none';
        } else if (v_time === '0s' || v_dist === '0px') {
            return 'horizontal';
        } else if (h_time === '0s' || h_dist === '0px') {
            return 'vertical';
        } else {
            return 'both';
        }
    }
</script>

<div
    class="absolute {computedClass}"
    style=
		"bottom: 	{bottom};	top: 		{top};
		left: 		{left};  	right: 		{right};
        --h-time: 	{h_time}; 	--h-dist: 	{h_dist}; 
        --v-time: 	{v_time}; 	--v-dist: 	{v_dist}; 
        width: 		{width}; 	height: 	{height};
		z-index: 	{z_index};"
>
    {#if image}
        <img src={image} alt="Animated Element" style="width: 100%; height: 100%; object-fit: cover; z-index: {z_index};" />
    {:else}
        <div style="background-color: {color}; width: 100%; height: 100%; z-index: {z_index};"></div>
    {/if}
</div>

<style>
    @keyframes h-move {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(var(--h-dist));
        }
        100% {
            transform: translateX(0);
        }
    }

    @keyframes v-move {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(var(--v-dist));
        }
        100% {
            transform: translateY(0);
        }
    }

    @keyframes diagonal-move {
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(var(--h-dist), var(--v-dist));
        }
        100% {
            transform: translate(0, 0);
        }
    }

    .h-move {
        animation: h-move var(--h-time) infinite ease-in-out;
    }

    .v-move {
        animation: v-move var(--v-time) infinite ease-in-out;
    }

    .diagonal-move {
        animation: diagonal-move var(--h-time) infinite ease-in-out;
    }
</style>
