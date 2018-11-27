
import React from 'react';
import {  StackNavigator, DrawerNavigator, createSwitchNavigator } from 'react-navigation';

import Catalog from '../scenes/Catalogo';
import CatalogDetail from '../scenes/CatalogDetail';
import { SideMenu } from './side-menu';
import Cart from '../scenes/Cart';
import Login from '../scenes/login';
import AuthLoading from '../scenes/login/components/authLoading';
import Profile from '../scenes/Profile';
import ShoppingCarIcon from './cart-icon.js';


import Header from '../scenes/Header';

import Form from '../scenes/Form';
import Success from '../scenes/Succes';

    export const StackProducts = StackNavigator({
        CatalogScreen: { screen: Catalog },
        CatalogDetailScreen: { screen: CatalogDetail },
        CartScreen: { screen: Cart },
        SuccessScreen: { screen: Success},
        FormScreen: { screen: Form },
        ProfileScreen: { screen: Profile, 
            navigationOptions:{
                title: 'Perfil'
            }
         },
         HeaderScreen: { screen: Header }, 
    },
    {
    initialRouteName: 'CatalogScreen',
    navigationOptions:{
        headerTitle: 'Mi Tienda',
        headerBackTitle: 'Atras',
        headerRight: (
            <ShoppingCarIcon/>
        )
    }
    });

    
    export const Drawer = DrawerNavigator({
        StackScren: { screen: StackProducts },
    },{
        drawerWidth: 300,
        contentComponent: SideMenu
    });

    export const SwitchNavigator = createSwitchNavigator({
       
        Login: Login,
        AuthLoading: AuthLoading,
        App: Drawer
    },{
        initialRouteName: 'AuthLoading',
    });