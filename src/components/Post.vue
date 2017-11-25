<template>
  <form @submit.prevent="validateForm(scope)"  data-vv-scope="scope">
    <textarea name="message" id="message" rel="atwhoMention" v-model="form.message"></textarea>
    <button type="submit" name="statusSubmit" class="button_submit" id="statusSubmit" >{{lang.post}}</button>
  </form>
</template>

<script>
export default {
  name: 'Post',
  props: ['scope', 'smf_url', 'lang', 'statusOwner', 'session_var', 'session_id'],
  data () {
    return {
      comments: this.comments,
      form: []
    }
  }
}
</script>
