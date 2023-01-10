<template>
  <div>
    <div>
      <form @submit.prevent="submit">
        <input v-model.trim="link" />
        <button type="submit">ff</button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { Button, FormItem, Form, Input } from "ant-design-vue";
let config = useRuntimeConfig();
let link = useState("link");
let submit = (value) => {
  if (
    link.value &&
    link.value.includes("https://steamcommunity.com/sharedfiles/filedetails/")
  ) {
    console.log(link.value.split("id=").pop());
    let { data, error } = useFetch(
      `https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/?key=${
        config.public.env.api_key
      }&itemcount=1&publishedfileids%5B0%5D=${link.value.split("id=").pop()}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (error) {
      switch (error) {
        default:
          return useNuxtApp().$swal.fire({
            title: "Ошибка",
            text: "Повторите ошибку позже", // "Повторите попытку позже",
            icon: "error",
            confirmButtonText: "Хорошо",
          });
      }
    } else {
      console.log(data);
    }
  }
};
</script>
<style lang="less"></style>
