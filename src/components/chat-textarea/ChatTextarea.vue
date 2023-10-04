<script setup lang="ts">
import { ref } from 'vue';
import IconSend from '@/components/icons/IconSend.vue';
const emit = defineEmits(['send-message']);
const message = ref('');
const isValid = ref(true);
const errorMesage = ref('');

const sendMessage = () => {
  if (!message.value) {
    errorMesage.value = 'Please enter the message.';
    isValid.value = false;
    return;
  }
  isValid.value = true;
  emit('send-message', message.value);
  message.value = '';
};
</script>

<template>
  <div class="chat-box-container">
    <div class="chat-box-control">
        <textarea
            cols="30"
            rows="2"
            placeholder="Type your message here..."
            class="chat-textarea"
            v-model="message"
            @keyup.enter="sendMessage()"
        />
        <div class="send-button"><IconSend @click="sendMessage()"/></div>
    </div>
    <p v-if="!isValid" class="error-text">{{ errorMesage }}</p>
  </div>
</template>

<style scoped>
.chat-box-container {
  width: 100%;
}
.chat-box-container > .chat-box-control > .chat-textarea {
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
  color: #676a6c;
  width: 100%;
  max-width: 100%;
  transition: all 0.5s ease-in-out;
  font-family: 'Inter';
}

.chat-box-container > .chat-box-control > .chat-textarea:focus{
    outline: none;
}

.chat-box-container > .chat-box-control > .chat-textarea:hover{
    border: 1px solid #4fa9fc;
}

.chat-box-container > .chat-box-control {
    display: flex;
    align-items: center;
    gap: 12px
}
.chat-box-container > .error-text {
  color: #ff0000;
  font-size: 14px;
  margin: 0;
}
</style>
