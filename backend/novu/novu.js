import { Novu, ChatProviderIdEnum } from '@novu/node';

export const chat = async (chatMsg) => {
    const novu = new Novu(process.env.YOUR_NOVU_API_KEY_HERE);
    await novu.subscribers.identify(process.env.SUB_ID, {
        firstName: 'newSubForSlackChat',
    });

    await novu.subscribers.setCredentials(process.env.SUB_ID, ChatProviderIdEnum.Slack, {
        webhookUrl: process.env.SLACK_WEBHOOK_URL,
    });

    await novu.trigger('slack', {
        to: {
            subscriberId: process.env.SUB_ID
        },
        payload: {
            chatMsg: chatMsg
        }
    });
}