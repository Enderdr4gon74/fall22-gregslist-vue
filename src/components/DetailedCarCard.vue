<template>
  <div class="card">
    <img class="rounded-top" :src="car.imgUrl" :alt="car.make">
    <div class="row">
      <div class="col-9">
        <h5 class="mx-2 mt-2 mb-1">{{car.year}} {{car.make}} {{car.model}}</h5>
        <p class="fs-5 mx-3">{{car.description}}</p>
      </div>
      <div class="col-3 justify-content-end align-items-center d-flex gap-1">
          <img :src="seller.picture" :alt="seller.name" :title="seller.name" height="60" class="rounded">
          <i class="mdi mdi-delete-forever fs-4 selectable rounded me-2" @click.stop="$emit('deleteClassified')"
            v-if="account.id == seller.id"></i>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { Car } from '../models/Car.js';
import { SellerProfile } from '../models/SellerProfile.js';

export default {
  props: {
    car: { type: Car, required: true },
    seller: { type: SellerProfile, required: true }
  },
  setup(props, { emit }) {

    onMounted(() => {
      console.log('neat huh???')
    })


    return {
      account: computed(() => AppState.account),
      deleteClassified() {
        emit('deleteClassified')
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
