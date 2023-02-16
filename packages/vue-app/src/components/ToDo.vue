<template>
  <h1 class="title">clean-todo-list</h1>
  <div class="add-wrap">
    输入内容：<input type="text" v-model="inputStr">
  <button @click="handleBtnClick" class="add-btn">
    添加
  </button>
  </div>
  <div v-if="state.lists">
    <div v-for="item in state.lists" :key="item.title" class="todo-item">
      {{ item.title }}
      <button @click="handleRemoveBtnClick(item.id)">
        移除
      </button>
    </div>
  </div>
  <div v-else>
    暂无待办
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { dependenciesLocator } from "@todolist/core"
import { usePlocState } from "../common/usePlopState";

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const ploc = dependenciesLocator.provideToDoListPloc()
    const state = usePlocState(ploc);

    onMounted(() => {
      ploc.getToDoList()
    });

    const inputStr =ref('')

    const handleBtnClick = () => {
      ploc.addToDo(inputStr.value)
      inputStr.value = ''
    }
    const handleRemoveBtnClick = (id: number) => {
      ploc.deleteToDo(id)
    }

    return {
      state,
      inputStr,
      handleBtnClick,
      handleRemoveBtnClick
    };

  }
});
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #eee;
}

.add-wrap {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-btn {
  margin-left: 10px;
}

.title {
  font-size: 36px;
  text-align: center;
  margin-top: 20px;
  color: red;
  margin-bottom: 20px;
}
</style>
