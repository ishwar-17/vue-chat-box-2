<script setup lang="ts">
  import { ref } from 'vue';
  import ConversationBox from '@/components/conversation-box/ConversationBox.vue';
  import ChatTextarea from '@/components/chat-textarea/ChatTextarea.vue';
  import { useConverationMessageStore } from '@/stores/chatconversation';
  
  const store = useConverationMessageStore();
  const counter = ref(store.conversationList.length);

  const sendMessage = (message: string) => {
    const update = {
      right: {
        id: counter.value++,
        message: message,
        date: Date(),
        from: store.receiverUser
      }
    }
    store.appendLatestConversation(update);
  };

</script>
<template>
  <main class="main-container">
    <h3>Chat Box</h3>
    <conversation-box :conversation="store.conversationList" :current-user="store.currentUser"/>
    <chat-textarea @send-message="sendMessage" />
  </main>
</template>

<style scoped>
  .main-container{
    max-width:600px;
    width:100%;
    margin: auto;
  }
</style>
@/stores/chatconversation