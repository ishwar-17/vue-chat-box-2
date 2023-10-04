import { ref } from 'vue';
import { defineStore } from 'pinia';
import { currentUser, receiverUser, conversation } from '@/mockApi/mockdata';

export type UserProps = {
    firstName: string;
    id: number;
    lastName: string;
    thumbnail: string;
}

export type ConversationProps = {
    date: string;
    id: number;
    message: string;
    from: UserProps;
}

export type messageProps = {
    left?: ConversationProps;
    right?: ConversationProps;
}

export const useConverationMessageStore = defineStore('conversation', () => {
    const conversationListManipulation = (conversationData:ConversationProps[], currentUserData:UserProps) => {
        return conversationData.map((message: ConversationProps) => {
            const messages: messageProps = {};
            if(message.from.firstName === currentUserData.firstName){
                messages['left'] = message;
            }else{
                messages['right'] = message;
            }
            return messages;
        });
    };

    const conversationList = ref(conversationListManipulation(conversation, currentUser));

    const senderConveration = () => {
        setTimeout(() => {
            const senderMessage: messageProps = {
                left: {
                    id: conversationList.value.length++,
                    message: "I am doing great, Have a great day...",
                    date: Date(),
                    from: currentUser
                }
            }
            const updateConversation = [...conversationList.value, senderMessage];
            conversationList.value = updateConversation;
        }, 2000);
    };


    const appendLatestConversation = (message: messageProps) => {
        const updateConversation = [...conversationList.value, message];
        conversationList.value = updateConversation;
        senderConveration();
    };
  
    return { 
        conversationList,
        currentUser,
        receiverUser,
        appendLatestConversation,
    };
  });