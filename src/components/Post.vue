<template>
  <form @submit.prevent="validateForm()"  data-vv-scope="scope">
    <textarea name="message" rel="atwhoMention" v-model="form.message"></textarea>
    <button type="submit" name="statusSubmit" class="button_submit" id="statusSubmit" >{{lang.post}}</button>
  </form>
</template>

<script>
export default {
  name: 'Post',
  props: ['scope','lang'],
  data () {
    return {
      form: []
    }
  },
  methods: {
      validateForm: function () {
          return true;
      }
  }
}
</script>
