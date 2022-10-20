<template>
  <div class="box">
    <div class="item one">1</div>
    <div class="item two">2</div>
    <div class="item three">3</div>
    <!-- <div class="item four">4</div>
    <div class="item five">5</div>
    <div class="item six">6</div>
    <div class="item seven">7</div>
    <div class="item eight">8</div>
    <div class="item nine">9</div>
    <div class="item ten"s>10</div>
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
  align-items: flex-start;
}
.item {
  background: red;
  width: 300px;
  height: 100px;
  margin: 0 1px;
}
.one {
    /* flex-grow: 1; */
    flex-shrink:0
}
.two {
    /* flex-grow: 2; */
}
.three {
    /* flex-grow: 1; */
}
</style>

<!-- 容器的属性 -->

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


<!-- 项目的属性 -->

<!-- order 用数字排列容器里子元素的顺序
.item {
    order: <integer>;  数字 0 1 2 3... 默认为0
  } -->

<!-- flex-grow  自适应盒子的放大，数字越大占比越大，宽度越宽
.item {
    flex-grow: <number>; 数字 0 1 2 3... 默认为0
  } -->

<!-- flex-shrink 自适应屏幕缩小时，指定某元素保持原有宽度
.item {
    flex-shrink: <number>; 数字 默认为1，设置为0保持宽度
  } -->

<!-- flex-basis
flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
.item {
    flex-basis: <length> | auto; /* default auto */
  }
它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。 -->

<!-- flex
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
.item {
    flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    flex: 1 1 auto
  }
该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。 -->

<!-- align-self
align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
.item {
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
  } -->







