<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/logo.png" class="img" alt="logo" />
      <div v-show="!collapse" class="title">Vue3+TS</div>
    </div>
    <el-menu
      :default-active="defaultValue"
      :collapse="collapse"
      class="el-menu-vertical-demo"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type == 1">
          <!-- type == 1说明有子菜单 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <!-- <i v-if="item.icon" :class="item.icon"></i> -->
              <el-icon><Platform /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item
                :index="subItem.id + ''"
                @click="MenuItemClick(subItem)"
              >
                <i v-if="subItem.icon" :class="subItem.icon"></i>
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>

        <!-- 一级菜单 -->
        <template v-else-if="item.type == 2">
          <!-- 展示 -->
          <el-menu-item index="2">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { IRootState } from '@/store/type'
import { defineComponent, computed, ref } from 'vue'
//引用自己创建的useStore
import { useStore } from '@/store/index'
//vuex 对ts 兼容不太好

import { useRouter, useRoute } from 'vue-router'
import { Platform } from '@element-plus/icons-vue'
import { pathMapToMenu } from '@/utils/map-menus'

export default defineComponent({
  components: { Platform },
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const router = useRouter()

    //useStore 可以接受一个泛型，用来约束store
    const store = useStore()
    // const userMenus = store.state.age
    //vuex中这里去拿state对应的属性没问题，但是去那login这个模块
    const userMenus = computed(() => store.state.login.userMenus)
    console.log('userMenus', userMenus.value)

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const handleOpen = () => {}
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const handleClose = () => {}

    //刷新默认值处理，应该为动态的，这里通过路径去匹配menu，拿到id
    const route = useRoute()
    const currentPath = route.path
    //computed 返回的值时一个ref对象
    const menu = pathMapToMenu(userMenus.value, currentPath)
    const defaultValue = ref(menu.id + '')

    const MenuItemClick = (item: any) => {
      router.push({
        path: item.url ?? 'not-found'
      })
    }
    return {
      userMenus,
      defaultValue,
      handleOpen,
      handleClose,
      MenuItemClick
    }
  }
})
</script>
<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .img {
      margin: 0 10px;
      height: 100%;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
  }
}
</style>
