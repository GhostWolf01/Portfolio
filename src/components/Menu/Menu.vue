<template>
<nav class="menu" :class="{ 'menu--open' : showMenu, 'menu--close' : !showMenu}">
    <div class="menu__bg">
        <header class="menu__header">
            <img class="menu__header__img" src="../../assets/logo.jpg" alt="icon">
            <h1 class="menu__header__text">Гетманчук Илья<br>Портфолио</h1>
        </header>
        <div class="menu__btns">
            <MenuContextBtn v-for="menuBtn in menuBtns"
            :key="menuBtn.id"
            :nameBtn="menuBtn.name"
            :nameUrl="menuBtn.nameUrl"
            :menuBtns="menuBtn.contextBtns"
            :activeBtn="menuBtn.activeBtn"
            :activeContext="menuBtn.activeContext"
            :activeContextBtn="menuBtn.activeContextBtn"/>
            <div class="menu__btns--scroll"></div>
        </div>
    </div>
</nav>
</template>

<script>
import MenuContextBtn from './MenuContextBtn.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Menu',
  components: {
    MenuContextBtn
  },
  computed: {
    ...mapGetters({
      getMenuBtns: 'menu/getMenuBtns',
      getShowMenu: 'menu/getShowMenu'
    }),
    menuBtns () {
      return this.getMenuBtns
    },
    showMenu () {
      return this.getShowMenu
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes open {
        from {
            margin-right: -25%;
            @media(max-width: 480px){
                margin-right: -50%;
            }
        }
        to {
            margin-right: 0;
        }
    }
.menu--open{
    animation: open 0.6s;
}
</style>

<style lang="scss">
$main_text: #ffffff;

.menu{
    width: 25%;
    background-image: url('../../assets/imgs/sidebar.jpg');
    background-repeat: no-repeat;
    background-color: rgba($color: #212120, $alpha: 0.8) ;
    background-size: 175% 100%;
    background-position: 50%;
    @media(max-width: 480px){
        width: 50%;
    }
    &__bg{
        width: 100%;
        height: 100%;
        background-color: rgba($color: #212120, $alpha: 0.8) ;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 20px 10px;
    }
    &__header{
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        padding: 10px 0;
        border-top: 2px solid rgba($color: #606061, $alpha: 0.9);
        border-bottom: 2px solid rgba($color: #606061, $alpha: 0.9);
        margin-bottom: 10px;
        &__img{
            height: 50px;
            width: 50px;
            border-radius: 50%;
            background-color: rgba($color: #868e96, $alpha: 0.6);
            @media (max-width: 768px){
                height: 40px;
                width: 40px;
            }
        }
        &__text{
            font-family: 'Roboto';
            font-weight: 400;
            margin: 0;
            font-size: 28px;
            color: $main_text;
            line-height: 28px;
            @media (max-width: 768px){
                font-size: 22px;
                line-height: 22px;
            }
        }
    }
    &__btns{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        overflow: auto;
        align-items: center;
        padding: 10px 5px 10px 0px;
        width: 100%;
        transition: all 0.2s linear;
        &--scroll{
            height: 1px;
            width: 100%;
            flex-shrink: 0;
        }
    }
    &--close{
        transition: all 0.4s linear;
        margin-right: -25%;
        @media(max-width: 480px){
            margin-right: -50%;
        }
        z-index: -1;
    }
}
</style>
