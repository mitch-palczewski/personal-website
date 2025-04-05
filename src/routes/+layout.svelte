<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<nav>
	<a href="/">Home</a>
	<a href="/projects">Projects</a>
	<a href="/resources">Resources</a>
</nav>


{@render children()}
