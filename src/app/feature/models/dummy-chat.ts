export class DummyChatClass {
    "message": string;
    "isSendByUser": boolean;
    "time": string
}

export const DummyChat: DummyChatClass[] = [
    {
        message: "Hi",
        isSendByUser: false,
        time: "11:00 AM"
    },
    {
        message: "Hello",
        isSendByUser: true,
        time: "11:05 AM"
    },
    {
        message: "How are you?",
        isSendByUser: false,
        time: "11:05 AM"
    },
    {
        message: "I am fine",
        isSendByUser: true,
        time: "11:06 AM"
    },
]