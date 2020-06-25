<template>
  <v-tooltip top>
    <template v-slot:activator="{on, attrs}">
      <span class="rating-box" v-bind="attrs" v-on="on">
        <span
          v-for="(starClass, index) of ratingStarsList"
          :key="index"
          class="rating-star"
          :class="starClass"
        ></span>
      </span>
    </template>
    <span>{{rating}} / {{max}}</span>
  </v-tooltip>
</template>


<script>
export default {
  props: {
    rating: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    }
  },
  computed: {
    ratingStarsList() {
      let list = Array.from({ length: this.max }),
        rating = this.rating;

      list = list.map(() => {
        if (rating > 1) {
          rating--;
          return "full-start";
        }

        if (rating < 1 && rating > 0) {
          let x = parseInt(rating * 10);
          rating = 0;
          return `perc-${x}`;
        }

        return "";
      });

      return list;
    }
  }
};
</script>

<style lang="scss" scoped>
.rating-box {
  color: #f0f0f0;
}

.rating-star {
  font-size: 1rem;
  width: 1rem;
  height: 1rem;
  padding: 0 0.6rem;
  position: relative;
  float: left;
}

.rating-star:before {
  color: #f2b01e;
  content: "\2605";
  position: absolute;
  left: 0;
  overflow: hidden;
}

.rating-star:after {
  content: "\2605";
  position: absolute;
  overflow: hidden;
  left: 0;
}

.perc-1:after {
  left: 0.1rem;
  text-indent: -0.1rem;
}

.perc-2:after {
  left: 0.2rem;
  text-indent: -0.2rem;
}

.perc-3:after {
  left: 0.3rem;
  text-indent: -0.3rem;
}

.perc-4:after {
  left: 0.4rem;
  text-indent: -0.4rem;
}

.perc-5:after {
  left: 0.5rem;
  text-indent: -0.5rem;
}

.perc-6:after {
  left: 0.6rem;
  text-indent: -0.6rem;
}

.perc-7:after {
  left: 0.7rem;
  text-indent: -0.7rem;
}

.perc-8:after {
  left: 0.8rem;
  text-indent: -0.8rem;
}

.perc-9:after {
  left: 0.9rem;
  text-indent: -0.9rem;
}

.full-start:after {
  left: 1rem;
  text-indent: -1rem;
}
</style>

