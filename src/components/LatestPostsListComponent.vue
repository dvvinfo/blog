<template>
  <div class="single-widget-area mb-30">
    <!-- Title -->
    <div class="widget-title">
      <h6>Latest Posts</h6>
    </div>

    <!-- Single Latest Posts -->
    <template v-for="item in items" :key="item.id">
      <div class="single-latest-post d-flex" v-if="item.latestPosts">
        <div class="post-thumb">
          <img :src="item.img" :alt="item.title" />
        </div>
        <div class="post-content">
          <router-link :to="`/${item.alias}`" class="post-title">
            <h6>
              {{ item.title }}
            </h6>
          </router-link>
          <div class="post-author"><span>by</span> {{ item.author }}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'LatestPostsListComponent',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style></style>
