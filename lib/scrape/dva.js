const cheerio = require('cheerio');

async function searchApp(query) {
  const response = await fetch('https://gamedva.com/?s=' + query + '&asl_active=1&p_asl_data=1&customset[]=post&asl_gen[]=title&polylang_lang=en&qtranslate_lang=0&filters_initial=1&filters_changed=0'); 
  const html = await response.text();

  const $ = cheerio.load(html);
  const results = [];

  $('article.ap-post.ap-lay-c').each((index, element) => {
    const title = $(element).find('.entry-title').text();
    const link = $(element).find('a').attr('href');
    const image = $(element).find('.meta-image img').attr('src');
    const version = $(element).find('.entry-excerpt').text();

    const result = {
      title: title,
      link: link,
      image: image,
      version: version
    };

    results.push(result);
  });

  return results;
}

async function getDownloadInfo(url) {
	const hasQueryString = url.includes('?');
const hasDownloadFileParam = url.includes('?download&file=0');
url = !hasQueryString ? url + '?download&file=0' : (!hasDownloadFileParam ? url + '&download&file=0' : url);
  const response = await fetch(url); 
  const html = await response.text();

  const $ = cheerio.load(html);
  let title, links, image, description, author;

  $('meta[property]').each((index, element) => {
    const property = $(element).attr('property');
    const content = $(element).attr('content');

    switch (property) {
      case 'og:title':
        title = content;
        break;
      case 'og:url':
        links = content;
        break;
      case 'og:image':
        image = content;
        break;
      case 'og:description':
        description = content;
        break;
      case 'article:author':
        author = content;
        break;
    }
  });

  const metaData = {
    title,
    links,
    image,
    description,
    author
  };

  const linkElement = $('a#download-now');
  const link = linkElement.attr('href');
  const info = linkElement.find('.progress-text').text().trim();

  const downloadInfo = {
    link: link,
    info: info,
    detail: metaData
  };

  return downloadInfo;
}

module.exports = { searchApp, getDownloadInfo }