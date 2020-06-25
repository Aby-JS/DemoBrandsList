<template>
  <div class="text-xs-right pl-4 pr-2 mx-4" :class="borderClass">
    <div class="c-placeholder">{{ placeholder }}</div>
    <div class="c-message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: "right"
    },
    type: {
      type: String,
      default: "normal"
    },
    placeholder: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      borderColorClassSet: {
        normal: "c-border-color",
        success: "c-border-color-success",
        highlight: "c-border-color-highlight"
      },
      borderPositionClassSet: {
        left: "c-border-left",
        right: "c-border-right"
      }
    };
  },
  computed: {
    borderClass() {
      return `${this.borderColorClassSet[this.type]} ${
        this.borderPositionClassSet[this.position]
      }`;
    }
  }
};
</script>

<style lang="scss" scoped>
.c-border-color {
  border-color: rgba(146, 153, 144, 0.12);
}

.c-border-color-success {
  border-color: #70CE0E;
}

.c-border-color-highlight {
  border-color: #F4BB40;
}

.c-border-right {
  padding-right: 8px;
  border-right-width: 3px;
  border-right-style: solid;
}

.c-border-left {
  padding-left: 8px;
  border-left-width: 3px solid;
  border-left-style: solid;
}

.c-placeholder {
  font-size: 12px;
  line-height: 1.5em;
  text-align: right;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.54);
}

.c-message {
  font-size: 14px;
  line-height: 1.5em;
  text-align: right;
  color: rgba(24, 15, 51, 0.7);
}
</style>
