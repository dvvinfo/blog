<template>
  <template v-for="item in items" :key="item.id">
  <div class="col-12 col-sm-6" v-if="item.smallPost">
    <div class="single-blog-post mb-50">
      <!-- Thumbnail -->
      <div class="post-thumbnail">
        <router-link :to="`/${item.alias}`"><img :src="item.img" :alt="item.title" /></router-link>
      </div>
      <!-- Content -->
      <div class="post-content">
        <p class="post-date">{{ item.date }} / {{ item.category }}</p>
        <router-link :to="`/${item.alias}`" class="post-title"
          ><h4>
            {{ item.title }}
          </h4></router-link
        >
        <p class="post-excerpt">
          {{ item.descr }}
        </p>
      </div>
    </div>
  </div>
</template>
</template>

<script>
export default {
  name: 'PostComponent',
  props: {
    items: {
      type: Array,
      required: true
    },
  }
}
</script>

<style></style>
