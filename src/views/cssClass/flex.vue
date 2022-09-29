<template>
  <div class="box">
    <div class="item">1</div>
    <!-- <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <div class="item">8</div>
    <div class="item">9</div>
    <div class="item">10</div>
    <div class="item">11</div> -->
    <!-- <div class="item">12</div>
    <div class="item">13</div>
    <div class="item">14</div>
    <div class="item">15</div>
    <div class="item">16</div>
    <div class="item">17</div>
    <div class="item">18</div>
    <div class="item">19</div>
    <div class="item">20</div> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  /* text-align: center; */
  display: flex;
  /* flex-direction: row;
  flex-wrap: nowrap; */
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items:flex-start
}
.item {
    background: red;
    width: 100px;
    height: 100px;
    margin: 0 1px;
}
</style>

<!-- flex-direction 改变主轴
row（默认值）：主轴为水平方向，起点在左端。
row-reverse：主轴为水平方向，起点在右端。
column：主轴为垂直方向，起点在上沿。
column-reverse：主轴为垂直方向，起点在下沿。 -->

<!-- flex-wrap 改变元素换行方式
nowrap（默认）：不换行。
wrap：换行，第一行在上方。
wrap-reverse：换行，第一行在下方。 -->

<!-- flex-flow || flex-direction和flex-wrap的简写（连写）
flex-flow: row nowrap -->

<!-- justify-content 元素的对齐方式
flex-start（默认值）：左对齐
flex-end：右对齐
center： 居中
space-between：两端对齐，项目之间的间隔都相等。
space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。 -->

