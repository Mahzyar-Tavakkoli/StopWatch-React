import React, { createContext, useContext } from 'react';

export const ItemContext = createContext({
    ItemArray : [] ,
    setItemArray : ()=>{}
})