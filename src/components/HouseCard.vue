<template>
  <div class="card rounded">
    <img :src="house.imgUrl" alt="house" class="img-fluid rounded-top">
    <div class="card-body row">
      <div class="col-9">
        <h4>{{house.bedrooms}} Bedroom, {{house.bathrooms}} Bath, {{house.levels}} Story</h4>
      </div>
      <div class="col-3 d-flex align-items-center justify-content-end pe-2">
        <img :src="seller.picture" :alt="seller.name" :title="seller.name" height="30" class="rounded">
        <i class="mdi mdi-delete-forever fs-4 selectable rounded ms-1" @click.stop="$emit('deleteClassified')"
          v-if="account.id == seller.id"></i>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { House } from '../models/House.js';
import { SellerProfile } from '../models/SellerProfile.js';

export default {
  props: {
    house: { type: House, required: true },
    seller: { type: SellerProfile, required: true }
  },
  setup(props, { emit }) {

    onMounted(() => {
      // console.log('neat huh???')
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
