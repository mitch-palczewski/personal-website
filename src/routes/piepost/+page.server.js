
export async function load({ cookies }) {
    const linksCookies = JSON.parse(cookies.get('links') || '[]');
    const postsData = await get_links_from_cookies(linksCookies);
    const posts = postsData.postsData
    return { posts };
}

/**
 * @param {any} cookie
 */
async function get_links_from_cookies(cookie) {
	/**
	 * @type {any[]}
	 */
	const links = [];
    /**
	 * @type {any[]}
	 */
	let postsData = [];
	for (const urlCookie of cookie) {
		const url = urlCookie.url;
		console.log('Received cookie from client:', url);
        if (isValidURL(url) == false){
            continue;
        }
        links.push(url);
        const jsonData = await getDataFromLink(url)
        postsData = await addJsonToMaster(jsonData, postsData)
	}
    postsData = postsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return{postsData};
}


/**
 * @param {{ jsonData: any; }} jsonDataObj
 * @param {any[]} masterData
 */
async function addJsonToMaster(jsonDataObj, masterData){
    const jsonData = jsonDataObj.jsonData;
    const data = Object.values(jsonData)
    const returnData = masterData.concat(data)
    return returnData;
}


/**
 * @param {string} link
 */
async function getDataFromLink(link){
    const res = await fetch(link)
    if (!res.ok) {
        throw new Error(`Failed to load JSON: ${res.status}`);
    }
    const jsonData = await res.json();
    return { jsonData };
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

