<template>
  <form @submit.prevent="validateForm(scope)"  data-vv-scope="scope">
    <textarea name="message" id="message" rel="atwhoMention" v-model="form.message"></textarea>
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
  }
}
</script>
