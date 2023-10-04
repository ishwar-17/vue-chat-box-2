<script setup lang="ts">
    defineProps(['conversation', 'currentUser']);

    const extractFirstLetters = (name:any) => {
        const firstName = name.split(' ')[0];
        const lastName = name.split(' ')[1];
        const firstLetters = firstName[0] + lastName[0];
        return firstLetters;
    }
</script>

<template>
  <div class="converation-box-container">
    <div class="converation-box-scroll">
        <div class="converation-box">
            <template v-for="(messages, index) in conversation" :key="index">
            <div class="conversation-item conversation-left" v-if="messages && messages.left">
                <div class="message-box">
                    <div class="user-avatar">
                        <div class="avatar">
                            <template v-if="messages.left.from.firstName && messages.left.from.lastName">
                                {{  extractFirstLetters(messages.left.from.firstName + " " + messages.left.from.lastName) }}
                            </template>
                            <img v-else v-bind:src="messages.left.from.thumbnail" :alt="messages.left.from.firstName" />
                        </div>
                    </div>
                    <div class="message">{{ messages.left.message }}</div>
                </div>
            </div>
            <div class="conversation-item conversation-right" v-if="messages && messages.right">
                <div class="message-box">
                    <div class="message">{{ messages.right.message }}</div>
                    <div class="user-avatar">
                        <div class="avatar">
                            <template v-if="messages.right.from.firstName && messages.right.from.lastName">
                                {{  extractFirstLetters(messages.right.from.firstName + " " + messages.right.from.lastName) }}
                            </template>
                            <img v-else v-bind:src="messages.right.from.thumbnail" :alt="messages.right.from.firstName" />
                        </div>
                    </div>
                </div>
            </div>
            </template>
        </div>
    </div>
  </div>
</template>

<style scoped>
.converation-box-container {
  width: 100%;
  margin-bottom:10px;
}

.converation-box-scroll{
    height: 450px;
    overflow-y: auto;
    border-radius: 4px;
    border: 1px solid #d5d6d7;
    padding: 15px 10px
}

.converation-box{
    height:100%;
}

.conversation-item{
    display: flex;
    width: 100%;
}

.message-box{
    max-width: 350px;
    width:100%;
    margin-bottom:20px;
    display:flex;
    gap:10px;
}

.message-box > .message{
    display: inline-block;
    border-radius: 12px;
    background-color: #ddd;
    padding: 8px 10px;
}

.user-avatar >.avatar{
    width: 35px;
    height: 35px;
    background-color: #eee;
    line-height: 35px;
    text-align: center;
    border-radius: 50%;
    font-size: 13px;
    font-weight: 600;
}

.conversation-left, .conversation-right > .message-box{
    justify-content: flex-start;
}

.conversation-right, .conversation-right > .message-box{
    justify-content: flex-end;
}
</style>
