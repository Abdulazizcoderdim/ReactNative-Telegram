import {useState} from "react"
import { Text } from "react-native"
import { Channel, ChannelList, MessageList } from "stream-chat-expo"

export default function MainTabScreen() {
    const [channel, setChannel] = useState();
    console.log(channel)

    if (channel) {
        return <Channel channel={channel}>
            <MessageList/>
        </Channel>
    }   


    return(
        <ChannelList onSelect={(channel)}/>
    )
}