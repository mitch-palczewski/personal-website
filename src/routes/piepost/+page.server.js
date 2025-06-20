export async function load({ cookies }) {
	try {
		const linksCookies = JSON.parse(cookies.get('links') || '[]');
		const postsData = await get_links_from_cookies(linksCookies);
		const posts = postsData.postsData;
		return { posts };
	} catch (error) {
		console.error('Load error:', error);
		// Return empty posts array instead of 500 error
		return { posts: [] };
	}
}

/**
 * @param {any} cookie
 */
async function get_links_from_cookies(cookie) {
	/**
	 * @type {any[]}
	 */
	let postsData = [];
	if (!Array.isArray(cookie)) {
		throw new TypeError('Expected cookie to be an array');
	}
	for (const urlCookie of cookie) {
		if (!urlCookie || typeof urlCookie.url !== 'string') {
			console.error('Invalid cookie object:', urlCookie);
			continue;
		}
		const url = urlCookie.url;
		if (isValidURL(url) == false) {
			continue;
		}
		try {
			const jsonData = await getDataFromLink(url);
			if (jsonData && typeof jsonData === 'object') {
				postsData = (await addJsonToMaster(jsonData, postsData)) ?? postsData;
			} else {
				console.warn('Unexpected jsonData format for URL:', url);
			}
		} catch {
			console.error(`Error fetching data from URL ${url}:`);
			continue;
		}
	}
	postsData = postsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return { postsData };
}

/**
 * @param {{ jsonData: any; }} jsonDataObj
 * @param {any[]} masterData
 */
async function addJsonToMaster(jsonDataObj, masterData) {
    if (!jsonDataObj || typeof jsonDataObj !== 'object') {
        return;
    }
	const jsonData = jsonDataObj.jsonData;
	const data = Object.values(jsonData);
	const returnData = masterData.concat(data);
	return returnData;
}

/**
 * @param {string} link
 */
async function getDataFromLink(link) {
	try {
		const res = await fetch(link);
		if (!res.ok) {
			return {
				jsonData: null,
				error: `Failed to load JSON: ${res.status}`
			};
		}
		const contentType = res.headers.get('content-type');
		if (contentType && contentType.includes('application/json')) {
			const jsonData = await res.json();
			return { jsonData };
		} else {
			const text = await res.text();
			return {
				jsonData: null,
				error: `Expected JSON, got: ${text.slice(0, 100)}`
			};
		}
	} catch (error) {
		console.error('Error fetching/parsing JSON:', error);
		return null;
		
	}
}

/**
 * @param {string | URL} str
 */
function isValidURL(str) {
	try {
		new URL(str);
		return true;
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (e) {
		return false;
	}
}
