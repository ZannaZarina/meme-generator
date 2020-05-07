<template>
  <div class="container">
    <b-row class="mt-5" v-if="!images.length">
      <b-col>
        <b-spinner label="Loading images" variant="primary"></b-spinner>
      </b-col>
    </b-row>
    <div class="gallery">
      <masonry :cols="{default: 5, 1200: 4, 1000: 3, 800: 2, 600: 1}" 
                :gutter="{default: 3}">
        <div v-for="image in images" :key="image.id">
          <img
          :src="image.url"
          :key="image.id"
          :alt="`Image of ${image.name} meme`"
          style= width:100%
          class="meme-thumb"
          v-b-modal.modal-1
          @click="imgToEdit = image.url"
          />
        </div>
      </masonry>  
    </div>

    <b-modal size="xl" id="modal-1">
      <Editor :imgToEdit="imgToEdit" />
    </b-modal>
  </div>
</template>

<script>

import Editor from "@/components/Editor.vue";

export default {
  name: "Gallery",
  components: { Editor },
  data() {
    return {
      images: [],
      imgToEdit: "",
    };
  },
  created() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => (this.images = response.data.memes))
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
</style>
