
import type {PropsWithChildren} from 'react';
import { ActivityIndicator, Image } from 'react-native';
import { Box } from 'react-native-design-utility';
import { styles } from './style';
import React, { useCallback, useState } from 'react';
import { BASE_URL } from '../../utils/constants';
import { GET_SPECIFIC_CAT } from '../../utils/api';

type ImageItemProps = PropsWithChildren<{
    _id: string;
}>;

function Item({children, _id}: ImageItemProps): JSX.Element {
   
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    const onLoadEnd = useCallback(() => {
        setIsLoading(e => false);
    }, [isLoading]);

    return (
        <Box f={1} center>
            {isLoading && 
                <Box center justify='center' alignSelf='center'>
                    <ActivityIndicator style={styles.loader} />
                </Box>
            }
            <Image 
                source={{uri: `${BASE_URL}${GET_SPECIFIC_CAT}${_id}?date=${new Date().getTime()}`}}
                style={styles.image}
                onLoadEnd={onLoadEnd}
            />
            {children}
        </Box>
    );
}


function catsAreEqual(prevCat, nextCat) {
    return prevCat._id === nextCat._id;
  }

const ImageItem = React.memo(Item, catsAreEqual);

export default ImageItem;