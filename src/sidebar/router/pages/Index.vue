<template>
  <p>Hello ㅅ\world!</p>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    sendContent() {
      // content.js 통신 (현재페이지)
      chrome.tabs.getSelected(null, function(tab) {  // 현재 선택된 탭 얻기
        chrome.tabs.sendMessage(tab.id, {status: "success", content: "hello world"}, function(response) {
          console.log(response.result);
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
</style>
