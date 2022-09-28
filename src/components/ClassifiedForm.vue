<template>
  <form @submit.prevent="handleSubmit">

    <div>
      <label for="listingType">What are you Selling?</label>
      <select name="listingType" v-model="editable.listingType">
        <option value="Car">🚗</option>
        <option value="Job">💼</option>
        <option value="House">🏠</option>
      </select>
    </div>


    <div v-if="editable.listingType == 'Car'">
      <div class="form-group">
        <label for="make">Make:</label>
        <input type="text" v-model="editable.listing.make" placeholder="Make" required class="form-control">
      </div>
      <div class="form-group">
        <label for="model">Model:</label>
        <input type="text" v-model="editable.listing.model" placeholder="Model" required class="form-control">
      </div>
      <div class="form-group">
        <label for="model">ImgUrl:</label>
        <input type="url" v-model="editable.listing.imgUrl" placeholder="https://youknow.com" class="form-control">
      </div>
      <div class="form-group">
        <label for="price">price:</label>
        <input type="number" v-model="editable.listing.price" placeholder="Price" required class="form-control" min="0">
      </div>
      <div class="form-group">
        <label for="year">Year:</label>
        <input type="number" v-model="editable.listing.year" placeholder="Year" required class="form-control" min="1886"
          :max="new Date().getFullYear() + 1">
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea v-model="editable.listing.description" placeholder="description" class="form-control"
          rows="4"></textarea>
      </div>
    </div>

    <div v-else-if="editable.listingType == 'House'">
      <div class="form-floating mb-3">
        <input type="number" v-model="editable.listing.bedrooms" class="form-control" name="bedrooms" required min="1">
        <label for="bedrooms">Bedrooms</label>
      </div>
      <div class="form-floating mb-3">
        <input type="number" v-model="editable.listing.bathrooms" step="0.5" class="form-control" name="bathrooms"
          required min="1">
        <label for="bathrooms">Bathrooms</label>
      </div>
      <div class="form-floating mb-3">
        <input type="number" v-model="editable.listing.levels" class="form-control" name="levels" required min="1">
        <label for="levels">Levels</label>
      </div>
      <div class="form-floating mb-3">
        <input type="url" v-model="editable.listing.imgUrl" class="form-control" name="imgUrl" required>
        <label for="imgUrl">Image Url <i>(We are too lazy for uploads)</i></label>
      </div>
      <div class="form-floating mb-3">
        <input type="number" v-model="editable.listing.year" class="form-control" name="year" required min="0"
          max="9999">
        <label for="year">Year</label>
      </div>
      <div class="form-floating mb-3">
        <input type="number" v-model="editable.listing.price" step="0.01" class="form-control" name="price" required
          min="0">
        <label for="price">Price</label>
      </div>
      <div class="form-floating">
        <textarea class="form-control" v-model="editable.listing.description" placeholder="Describe your Listing"
          name="description"></textarea>
        <label for="description">Description</label>
      </div>
    </div>

    <div v-else-if="editable.listingType == 'Job'">
      <div class="form-floating mb-3">
        <input type="text" v-model="editable.listing.company" class="form-control" name="company" required
          maxlength="50">
        <label for="company">Company</label>
      </div>

      <div class="form-floating mb-3">
        <input type="text" v-model="editable.listing.jobTitle" class="form-control" name="jobTitle" required
          maxlength="100">
        <label for="jobTitle">Job Title</label>
      </div>

      <div class="form-floating mb-3">
        <input type="number" v-model="editable.listing.hours" step="0.01" class="form-control" name="hours" required
          min="0.0" max="80.0">
        <label for="hours">Hours</label>
      </div>

      <div class="form-floating mb-3">
        <input type="number" v-model="editable.listing.rate" step="0.01" class="form-control" name="rate" required
          min="0">
        <label for="rate">Rate</label>
      </div>

      <div class="form-floating">
        <textarea v-model="editable.listing.description" class="form-control" placeholder="Describe your Listing"
          name="description"></textarea>
        <label for="description">Description</label>
      </div>
    </div>


    <div class="my-3" v-if="editable.listingType">
      <button class="btn btn-success" type="submit">SEND IT</button>
    </div>


  </form>
</template>


<script>
import { ref } from 'vue';
import { classifiedsService } from '../services/ClassifiedsService.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    const editable = ref({
      listing: {}
    })
    return {
      editable,
      async handleSubmit() {
        try {
          const formData = editable.value
          await classifiedsService.createClassified(formData)
          editable.value = {
            listing: {}
          }
        } catch (error) {
          Pop.error(error, '[Submitting Form]')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
