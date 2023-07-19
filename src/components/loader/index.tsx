import { Box } from 'react-native-design-utility';

import React from 'react';
import { ActivityIndicator } from 'react-native';

export default function Loader(): JSX.Element {

    return (
        <React.Fragment>
            <ActivityIndicator />
        </React.Fragment>
    );
}

