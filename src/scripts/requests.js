function removeTags(str) {
  return str.toString().replace(/<[^>]*>/g, '');
}

export function fetchPosts() {
  return fetch('https://techcrunch.com/wp-json/wp/v2/posts')
    .then((response) => response.json())
    .then((posts) =>
      posts.map((post) => ({
        image: post.jetpack_featured_media_url,
        title: post.title.rendered,
        description: removeTags(post.excerpt.rendered),
        date: post.date,
        readingTime: Math.floor(Math.random() * 10) + 1,
      })),
    );
}
