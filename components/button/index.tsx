import { Button } from 'react-native-paper';

// @ts-ignore
const index = ({ children, ...props }) => {
    return  <Button {...props}>
                {children}
            </Button>
};

export default index;