<template>
  <div class="style-container">
    <div class="layout">
      <div class="outer-container">
        <div class="outer-nav">
          <a-row
            type="flex"
            justify="end"
            align="bottom"
            class="nav-top">
            <a-col :span="2"><p class="height-10">{{ user ? user.name : `Loading...` }}</p></a-col>
            <a-col :span="2"><p class="height-10">系统首页</p></a-col>
          </a-row>
        </div>
      </div>
      <div class="nav-container">
        <nav class="layout-nav">
          <a-row
            type="flex"
            justify="space-between"
            align="bottom">
            <a-col :span="6"><p class="height-100"><span class="title">协同办公 | </span><span class="subtitle">提建议</span></p></a-col>
            <a-col :span="7"><p class="height-120 menu"><router-link to="/">常见建议</router-link>
              <router-link to="/add">我要提建议</router-link>
            <router-link to="/my">我的建议</router-link></p></a-col>
          </a-row>

        </nav>
      </div>
      <main class="layout-main">
        <slot/>
      </main>
      <footer class="layout-footer">
        706 &copy;2018 Create by Ant UED
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: `layout`,
  data() {
    return {
      user: null,
    };
  },
  created() {
    // Simulate fetching user data.
    setTimeout(() => {
      this.user = { name: `Litao Dior` };
    }, 2000);
  },
};
</script>

<style lang="scss">
.nav-top{
  padding-top:5px;

}
.left{
  padding:20px;
  background-color: #fff;
    border-radius: 5px;
}
.right{
      // background-color: #f1f1f1;
    // border-radius: 5px;
}
.outer-container{
      border-bottom: 1px solid #3a4447;
    background-color: #3d474a;
    color:#fff;
}
.outer-nav {
    max-width: 80em;
    margin-right: auto;
    margin-left: auto;
    height:2em;
  }
.style-container{
  width:100%;
  min-height:100%;
  background: #e3e3e5;
}
.menu a{
  padding-left:0.5em;
  padding-right:0.5em;
}
.nav-container{
    background: #252b2e;
    color:#fff;
  }
  .title{
    font-size:2.8em;
  }
  .subtitle{
    font-size:1.5em;
  }
  .menu{
    font-size:1.5em;
  }
.layout {
  //max-width: 42em;
  // margin-right: auto;
  // margin-left: auto;
  // padding-right: 1em;
  // padding-left: 1em;
  height:100%;
  width:100%;

  &-nav {
    max-width: 80em;
    margin-right: auto;
    margin-left: auto;
    border-bottom: 1px solid #c0c0c0;
  }

  &-user {
    // float: right;
  }

  &-main {
    max-width: 80em;
    min-height:40em;
    margin-right: auto;
    margin-left: auto;
    padding-top: 1.5em;
    padding-bottom: 2em;
  }

  &-footer {
    padding-bottom: 3em;
    padding-top: 3em;
    margin-top: 3em;
    margin-bottom: 0px;
    border-top: 1px solid #c0c0c0;
    text-align: center;
    background-color: #fff;
  }
}
</style>

