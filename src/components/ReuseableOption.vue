<template>
  <div class="main-container">
    <div :class="`input-container ${isFocus ? 'focusing' : ''}`">
      <div class="additional-elements">
        <div>
          <ic-search />
        </div>
        <div class="chosen-options">
          <div
            class="chosen-option"
            v-for="(item, index) in chosenOptions"
            :key="index"
          >
            <span>{{ item }}</span>
            <div @click="() => handleRemoveOption(index)" class="icon-x">
              <ic-x />  
            </div>
          </div>
        </div>
      </div>
      <input
        type="text"
        :value="inputValue"
        class="option-input"
        :placeholder="placeholder"
        @focus="isFocus = true"
        @blur="isFocus = false"
        @input="($event) => handleInput($event)"
      />
    </div>
    <div class="options-container" v-if="options.length">
      <div
        class="option"
        v-for="(item, index) in options"
        :key="index"
        @click="() => handleChose(item)"
      >
      {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import { search } from "@/api/apiCity";
import removePrefix from '@/utils/removePrefix'

import IcSearch from "@/assets/icons/IcSearch.vue";
import IcX from "@/assets/icons/IcX.vue";

export default {
  components: {
    IcSearch,
    IcX,
  },
  props: {
    placeholder: String,
  },
  data() {
    return {
      inputValue: "",
      isFocus: false,
      options: [],
      chosenOptions: [],
      timer: undefined,
      removePrefix,
    };
  },
  methods: {
    handleInput: async function (event) {
      this.inputValue = event.target.value;
    },
    handleChose(itemName) {
      this.chosenOptions.push(itemName);
      this.inputValue = "";
    },
    handleRemoveOption(index) {
      this.chosenOptions.splice(index, 1);
    },
  },
  watch: {
    inputValue() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        search(this.inputValue).then((data) => {
          this.options.splice(0, this.options.length)
          data.forEach(item => {
            this.options.push(removePrefix(item.name));
          });
        });
      }, 300);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/ReuseableOption.scss";
</style>