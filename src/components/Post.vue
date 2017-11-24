<template>
  <form @submit.prevent="validateForm('add_status')"  data-vv-scope="add_status" id="add_status">
    <textarea name="message" id="message" rel="atwhoMention" v-model="form.message"></textarea>
    <button type="submit" name="statusSubmit" class="button_submit" id="statusSubmit" >{{lang.post}}</button>
  </form>
</template>

<script>
export default {
  name: 'Post',
  props: ['tscope', 'smf_url', 'lang', 'statusOwner', 'session_var', 'session_id'],
  data () {
    return {
      comments: this.comments,
      form: []
    }
  }
}
</script>
