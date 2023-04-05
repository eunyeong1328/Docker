<template>
  <div class="container">
    <h2>Member List</h2>
   <div
      v-for="member in members"
      :key="member.id"
      class="d-flex">
      <div class="flex-grow-1">
        {{member.name}}  <!--이름만 출력-->
      </div>
    </div>     
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from "axios";

export default {
  name: 'App',
  setup(){
    axios.defaults.baseURL = 'http://localhost:8000';
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

    const members = ref([]);

    const getMembers = async () => {
      console.log("aaaaaaaaaaaaaaaaaaaaa");
      try{
        const res = await axios.get('/members');               
        members.value = res.data;
        console.log(res.data);
      }catch(err){
        console.log(err);
      }
    }

    getMembers();

    return {
      members,
      getMembers,
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
