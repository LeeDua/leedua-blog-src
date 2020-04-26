<template>
    <div class="l2d-block">
        <audio id="my_audio"></audio>
        <canvas id="mycanvas" ref="mycanvas" width="300" height="500"></canvas>
    </div>
</template>

<script>
export default {
  mounted(){
    var element = document.createElement("script");
    element.src = "/live2d.min.js";
    document.body.appendChild(element);
    setTimeout(() => {
      this.init();
    }, 500);
  },
  updated(){
    
  },
  methods:{
    init(){
      InitLive2D();
    }
  }
}
</script>
