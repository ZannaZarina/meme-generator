<template>
  <div class="editor">
    <div id="imageToSave">
      <vue-draggable-resizable class="drag" :w="50" :h="50" @dragging="onDrag">
        <p
          :style="{
            fontSize: textSizeTop + 'px',
            color: colorTop,
            fontFamily: selectedFont,
          }" 
        >
          {{ inputTop }}
        </p>
      </vue-draggable-resizable>

      <img :src="imgToEdit" :alt="`Image to edit`" id="image" />

      <vue-draggable-resizable class="drag" :w="100" :h="50" @dragging="onDrag">
        <p
          :style="{
            fontSize: textSizeBottom + 'px',
            color: colorBottom,
            fontFamily: selectedFont,
          }"
        >
          {{ inputBottom }}
        </p>
      </vue-draggable-resizable>
    </div>

    <div class="modify">
      <p><strong>Text top</strong></p>
      <b-form-input
        id="input-1"
        v-model="inputTop"
        type="text"
        required
        placeholder="Type text here"
      ></b-form-input>
      <div class="font-size-modifier">
        <p>font size:</p>
        <b-form-input
          class="font-size"
          id="fontSizeTop"
          v-model="textSizeTop"
          type="range"
          min="30"
          max="70"
          step="1"
        ></b-form-input>
      </div>
      <v-swatches
        v-model="colorTop"
        swatches="text-advanced"
        class="color-picker"
      ></v-swatches>

      <p><strong>Text bottom</strong></p>
      <b-form-input
        id="input-2"
        v-model="inputBottom"
        type="text"
        required
        placeholder="Type text here"
      ></b-form-input>
      <div class="font-size-modifier">
        <p>font size:</p>
        <b-form-input
          class="font-size"
          id="fontSizeBottom"
          v-model="textSizeBottom"
          type="range"
          min="30"
          max="70"
          step="1"
        ></b-form-input>
      </div>
      <v-swatches
        v-model="colorBottom"
        swatches="text-advanced"
        class="color-picker"
      ></v-swatches>

      <p><strong>File name</strong></p>
      <b-form-input
        id="input-3"
        v-model="fileName"
        type="text"
        required
        placeholder="Type file name here"
      ></b-form-input>

      <b-form-group label="Font:" class="select-font">
        <b-form-radio-group
          id="fontRoboto"
          v-model="selectedFont"
          :options="['Roboto']"
          plain
          name="radios-btn-default"
        ></b-form-radio-group>
       
        <b-form-radio-group
          id="fontCN"
          v-model="selectedFont"
          :options="['Courier New']"
          plain
          name="radios-btn-default"
        ></b-form-radio-group>

        <b-form-radio-group
          id="fontMontserrat"
          v-model="selectedFont"
          :options="['Montserrat']"
          plain
          name="radios-btn-default"
        ></b-form-radio-group>
    
        <b-form-radio-group
          id="fontAnton"
          v-model="selectedFont"
          :options="['Anton']"
          plain
          name="radios-btn-default"
        ></b-form-radio-group>

      </b-form-group>

      <b-button
        class="btn btn-download"
        variant="success"
        @click="download(fileName)"
      >
        Download
      </b-button>
    </div>
  </div>
</template>

<script>
import VSwatches from "vue-swatches";
import "vue-swatches/dist/vue-swatches.css";
import { saveAsJpeg } from "save-html-as-image";

export default {
  name: "Editor",
  components: {
    VSwatches,
  },
  props: {
    imgToEdit: {
      type: String,
    },
  },
  data() {
    return {
      x: 0,
      y: 0,
      inputTop: "",
      inputBottom: "",
      textSizeTop: 30,
      textSizeBottom: 30,
      fileName: "",
      colorTop: "",
      colorBottom: "",
      selectedFont: "Roboto",
    };
  },

  methods: {
    download(fileName) {
      const node = document.getElementById("imageToSave");
      saveAsJpeg(node, { filename: fileName, printDate: false });
    },
    onDrag: function(x, y) {
      this.x = x;
      this.y = y;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.editor {
  display: flex;
}

#imageToSave {
  width: 50%;
}

#image {
  margin-top: -60px;
  width: 100%;
}

.modify {
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  width: 50%;
}

.font-size-modifier {
  display: flex;
  justify-content: space-between;
}

.font-size {
  width: 80%;
}

#input-1,
#input-2,
#input-3 {
  margin-top: -10px;
  margin-bottom: 10px;
}

p.inputTop {
  border: 2px solid blue;
  font-size: 30px;
}

.color-picker {
  border: 2px solid rgb(202, 202, 202);
  border-radius: 13px;
  width: 46px;
  height: 46px;
  margin-top: -10px;
  margin-bottom: 20px;
}

#fontRoboto {
  font-family: 'Roboto';
}

#fontCN {
  font-family: 'Courier New';
}

#fontMontserrat {
  font-family: 'Montserrat';
}
 
#fontAnton {
  font-family: 'Anton';
}

</style>
