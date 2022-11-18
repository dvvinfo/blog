<template>
  <router-link
    :to="url"
    :data-toggle="dataToggle"
    :data-placement="dataPlacement"
    :title="title"
    ><i :class="iconClass" :aria-hidden="ariaHidden"></i
  ></router-link>
</template>

<script>
export default {
    name: 'SocialInfoComponent',
    props: {
        url: {
      type: String,
      required: true
    },
    dataToggle: {
      type: String,
      required: false
    },
    dataPlacement: {
      type: String,
      required: false
    },
    
    title: {
      type: String,
      required: false
    },
    iconClass: {
      type: String,
      required: true
    },
    ariaHidden: {
      type: Boolean,
      required: false
    },
    post: {
      type: Boolean,
      required: true
    },
    subscribe: {
      type: Boolean,
      required: true
    },
  }
}
</script>

<style></style>
