import { Box, Text } from 'react-native-design-utility';

import React from 'react';
import { ActivityIndicator } from 'react-native';

export default function EmptyList(): JSX.Element {

    return (
        <Box f={1} center>
            <ActivityIndicator />
            <Text>Loading cats, please wait...</Text>
        </Box>
    );
}

