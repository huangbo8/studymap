<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
}
* {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}

::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 8px;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background: #cfcbcb;
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  // border-radius: 10px;
  // background: #ededed;
}
</style>
