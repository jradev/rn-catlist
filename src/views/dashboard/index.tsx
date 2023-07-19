/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// @ts-nocheck

import { FlashList } from '@shopify/flash-list';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Image, useWindowDimensions,
} from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import ImageItem from '../../components/image-item';
import { Cat } from './interface.d';
import { BASE_URL, LIMIT } from '../../utils/constants';
import { ALL_CATS } from '../../utils/api';
import Loader from '../../components/loader';
import EmptyList from '../../components/empty-list';

const DATA = [
    {
      title: "First Item",
      link: "https://cataas.com/cat/LTxlBUdATocntNid"
    },
    {
      title: "Second Item",
      link: "https://cataas.com/cat/LTxlBUdATocntNid"
    },
];
export default function Dashboard(): JSX.Element {

    const { width } = useWindowDimensions();
    const ESTIMATED_SIZE: number = Math.abs(width * 0.80);
    const [catList, setCatList] = useState<Array<Cat>>([]);
    const [offset, setOffset] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    useEffect(() => {
        getCatList();
    }, []);

    const getCatList = async () => {
        try{
            const response = await fetch(BASE_URL + ALL_CATS + `limit=${LIMIT}&skip=${offset}`);
            const json = await response.json();
            setCatList(e => e.concat(json).filter((value, index, self) =>
                index === self.findIndex((t) => (
                t._id === value._id
                ))
            ));
            setOffset(e => e + 1);
            setIsLoading(false);
            console.log(`OFFSET VALUE: ${offset}`);
        }catch(e){

        }
    }


    const onEndReached = useCallback(() => {
        if(isLoading) return false;
        setIsLoading(e => true);
        getCatList()
    }, [catList, offset, isLoading]);

    return (
        <React.Fragment>
            {catList?.length === 0 
            ?
            <EmptyList />
            :
            <FlashList
                data={catList}
                renderItem={({ item }) => <ImageItem {...item} />}
                estimatedItemSize={ESTIMATED_SIZE}
                numColumns={1}
                onEndReached={() => onEndReached()}
                ListFooterComponent={isLoading ?  <Loader /> : null}
            />     
            }
        </React.Fragment>
    );
}
