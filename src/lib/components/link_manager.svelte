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
    const stored = getCookie('links');
    if (stored) {
        links = JSON.parse(stored);
    }
});

const saveToStorage = () => {
    setCookie('links', JSON.stringify(links));
};

const addLink = () => {
    const trimmed = newLink.trim();
    if (!trimmed) return;
    links = [...links, { url: trimmed, editing: false }];
    newLink = '';
    saveToStorage();
    location.reload();
};

  const editLink = (/** @type {number} */ index) => {
    links = links.map((link, i) =>
      i === index ? { ...link, editing: true } : link
    );
  };

  const updateLink = (/** @type {number} */ index, /** @type {string} */ newUrl) => {
    const trimmed = newUrl.trim();
    if (!trimmed) return;
    links = links.map((link, i) =>
      i === index ? { url: trimmed, editing: false } : link
    );
    saveToStorage();
  };

  const cancelEdit = (/** @type {number} */ index) => {
    links = links.map((link, i) =>
      i === index ? { ...link, editing: false } : link
    );
  };

  const deleteLink = (/** @type {number} */ index) => {
    links = links.filter((_, i) => i !== index);
    saveToStorage();
  };
</script>

<div class="max-w-2xl mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">PiePost Link Manager</h1>
  <div class="flex gap-2 mb-4">
    <input
      type="text"
      placeholder="Enter link URL"
      bind:value={newLink}
      class="flex-1 border p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <button on:click={addLink} class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
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
            class="flex-1 border p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            on:click={() => updateLink(index, link.url)}
            class="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
          >
            Save
          </button>
          <button
            on:click={() => cancelEdit(index)}
            class="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
          >
            Cancel
          </button>
        {:else}
          <span class="flex-1 break-all">{link.url}</span>
          <button
            on:click={() => editLink(index)}
            class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
          >
            Edit
          </button>
          <button
            on:click={() => deleteLink(index)}
            class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        {/if}
      </li>
    {/each}
  </ul>
</div>