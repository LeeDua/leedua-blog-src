<template>
    <div class="l2d-block">
        <live2d :modelPath="modelPath" ref='l2dManges'
          :width="300" :height="500"
         />
    </div>
</template>

<script>
export default {
  data :()=>({
    modelPath: 'model/xiaomai/xiaomai.model.json',
  }),
}
</script>

<style lang="stylus">
@import '~@app/style/config'
    

</style>
