<template>
<div id = 'modal'>
<!-- modal content -->
<md-dialog md-open-from="#add" md-close-to="#add" ref="dialog1">
  <md-dialog-title>Add new Recipe</md-dialog-title>

  <md-dialog-content>
    <form>
      <md-input-container>
        <label>Recipe name</label>
        <md-textarea></md-textarea>
      </md-input-container>
      <md-input-container>
    <label>Ingredients separated by commas</label>
    <md-textarea placeholder = 'item1, item2...'></md-textarea>
  </md-input-container>
    </form>
  </md-dialog-content>

  <md-dialog-actions>
    <md-button class="md-primary" @click="closeDialog('dialog1')">Cancel</md-button>
    <md-button class="md-primary" @click="closeDialog('dialog1')">Create</md-button>
  </md-dialog-actions>
</md-dialog>
<!-- end of modal content -->

<!-- dialog button -->
<md-button class="md-raised md-primary" @click="openDialog('dialog1')">
    Add recipe
  </md-button>
<!-- end of button -->
</div>
</template>

<script>
export default {
  name: 'modal',
  methods: {
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    onOpen () {
      console.log('Opened')
    },
    onClose (type) {
      console.log('Closed', type)
    }
  }
}
</script>
 
