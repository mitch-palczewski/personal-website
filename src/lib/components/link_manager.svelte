<script>
	import { onMount } from 'svelte';

	let newLink = '';
	/**
	 * @type {any[]}
	 */
	let links = [];

	/**
	 * @param {string} name
	 */
	function getCookie(name) {
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${name}=`);
		// @ts-ignore
		if (parts.length === 2) return decodeURIComponent(parts.pop().split(';').shift());
		return null;
	}

	/**
	 * @param {string} name
	 * @param {string | number | boolean} value
	 */
	function setCookie(name, value, days = 365) {
		const expires = new Date(Date.now() + days * 864e5).toUTCString();
		document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
	}

	onMount(() => {
		let stored = getCookie('links');
		if (stored) {
			try {
				const parsed = JSON.parse(stored);
				if (Array.isArray(parsed) && parsed.every(link => typeof link.url === 'string')) {
					links = parsed;
				}
			} catch (e) {
				// Invalid cookie data, ignore
			}
		}
	});

	const saveToStorage = () => {
		setCookie('links', JSON.stringify(links));
	};

	const addLink = () => {
		const trimmedLink = newLink.trim();
		if (!trimmedLink) return;
		const modifiedLink = modifyLink(trimmedLink)
		links = [...links, { url: modifiedLink, editing: false }];
		newLink = '';
		saveToStorage();
		location.reload();
	};

	const modifyLink = (/** @type {string} */ link) => {
		if (link.endsWith("/posts.json")){
			return link;
		}
		if (link.endsWith("/")){
			return link.concat("posts.json")
		}
		return link.concat("/posts.json")
	};

	const editLink = (/** @type {number} */ index) => {
		links = links.map((link, i) => (i === index ? { ...link, editing: true } : link));
	};

	const updateLink = (/** @type {number} */ index, /** @type {string} */ newUrl) => {
		const trimmed = newUrl.trim();
		if (!trimmed) return;
		links = links.map((link, i) => (i === index ? { url: trimmed, editing: false } : link));
		saveToStorage();
	};

	const cancelEdit = (/** @type {number} */ index) => {
		links = links.map((link, i) => (i === index ? { ...link, editing: false } : link));
	};

	const deleteLink = (/** @type {number} */ index) => {
		links = links.filter((_, i) => i !== index);
		saveToStorage();
	};
</script>

<div class="mx-auto max-w-2xl p-4">
	<div class="mb-4 flex gap-2">
		<input
			type="text"
			placeholder="Enter link URL"
			bind:value={newLink}
			class="flex-1 border p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
		/>
		<button on:click={addLink} class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
			Follow
		</button>
	</div>

	<!-- List of links -->
	<ul class="space-y-3">
		{#each links as link, index}
			<li class="flex items-center space-x-2">
				{#if link.editing}
					<!-- Editable link input -->
					<input
						type="text"
						bind:value={link.url}
						class="flex-1 border p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
					/>
					<button
						on:click={() => updateLink(index, link.url)}
						class="rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600"
					>
						Save
					</button>
					<button
						on:click={() => cancelEdit(index)}
						class="rounded bg-gray-500 px-3 py-1 text-white hover:bg-gray-600"
					>
						Cancel
					</button>
				{:else}
					<span class="flex-1 break-all">{link.url}</span>
					<button
						on:click={() => editLink(index)}
						class="rounded bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-600"
					>
						Edit
					</button>
					<button
						on:click={() => deleteLink(index)}
						class="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
					>
						Delete
					</button>
				{/if}
			</li>
		{/each}
	</ul>
</div>
