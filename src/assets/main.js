const API = 'https://instagram-profile1.p.rapidapi.com/getprofile/dani.pb'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f5a606dbfbmsh500c90df5a2cfa9p18e298jsnb67e442ca07c',
    'X-RapidAPI-Host': 'instagram-profile1.p.rapidapi.com'
  }
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options)
  const data = await response.json()

  return data
}

(async () => {
  try {
    const data = await fetchData(API)
    let view = `
      ${data.lastMedia.media.map(post => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${post.thumbnail_src_proxy}" alt="${post.caption}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${post.caption}
            </h3>
          </div>
        </div>
      `).slice(0,4).join('')}
    `
    console.log(view)
    const content = document.getElementById('content')

    content.innerHTML = view
  } catch (error) {
    console.error(error)
  }
})()
