<template>
<div>
    <div v-for="post in posts" class="post">
          <img v-if="post.frontmatter.image" :src="$withBase(post.frontmatter.image)" alt="">
        <h2>
            <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
        </h2>
        
        <p>{{ post.frontmatter.description }}</p>

        <router-link :to="post.path" class="show-post-button" tag="button">Show Post</router-link>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith('/blog/') && !x.frontmatter.blog_index)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    }
}
</script>

<style scoped>
.post {
    display: grid;
    grid-template-areas: "img title"
                         "img desc"
                         "img button";
    grid-template-columns: 300px auto;
    grid-template-rows: 68px auto 50px;
    grid-gap: 10px;
}

.post img {
    grid-area: img;
    height: 100%;
}

.post h2 {
    display: block;
    grid-area: title;
    margin: 0;
}

.post p {
    display: block;
    grid-area: desc;
    margin: 0;
}

.show-post-button {
    display: block;
    grid-area: button;
    line-height: 50px;
    display: inline-block;
}

</style>
