import * as React from 'react';
import { Avatar } from 'react-native-paper';

// @ts-ignore
const index = (props: AvatarProps) => {
    const detectTypeAvatar = (props: any) => {
        if(props.source){
            return <Avatar.Image
                        style={{
                            ...props.style,
                            backgroundColor: props.bgColor
                        }}
                        {...props} />;
        }else if (props.icon) {
            return <Avatar.Icon
                        style={{
                            ...props.style,
                            backgroundColor: props.bgColor
                        }}
                        {...props} />;
        }else{
            return <Avatar.Text
                        style={{
                            ...props.style,
                            backgroundColor: props.bgColor
                        }}
                        {...props} />;
        }
    }

    // @ts-ignore
    return detectTypeAvatar(props);
};

index.defaultProps = {
    source: null,
    label: 'XD',
    bgColor: "#fff",
    color: "#333"
}

export default index;