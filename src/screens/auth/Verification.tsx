import { Text } from "react-native-svg";

const Verification = ({navigation, route}:any) => {

    const {code, username, email, password} = route.params

    return (
        <Text>Verification</Text>
    );
}

export default Verification;