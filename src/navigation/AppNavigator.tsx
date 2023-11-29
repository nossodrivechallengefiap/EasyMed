import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import ToastMessage from 'react-native-toast-message';
import Login from '../screens/Login';
import Registro from '../screens/Registro';
import Home from '../screens/Home';
import CadMedicamento from '../screens/CadMedicamento';
import { MeusMedicamentos } from '../screens/MeusMedicamentos';
import CameraScreen from '../screens/Camera';
import HomeSupervisor from '../screens/HomeSupervisor';
import CadDependente from '../screens/CadDependente';

type RootStackParamList = {
  Registro: undefined;
  Login: undefined;
  Home: undefined;
  HomeSupervisor: undefined;
  CadMedicamento: undefined;
  MeusMedicamentos: undefined;
  CameraScreen: undefined;
  CadDependente: undefined;
};

export type RegistroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Registro'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type HomeSupervisorScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeSupervisor'>;
export type CadMedicamentoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CadMedicamento'>;
export type CadDependenteScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CadDependente'>;
export type MeusMedicamentoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MeusMedicamentos'>;
export type CameraScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CameraScreen'>;

const Stack = createStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registro">
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeSupervisor" component={HomeSupervisor} />
        <Stack.Screen name="CadMedicamento" component={CadMedicamento} />
        <Stack.Screen name="CadDependente" component={CadDependente} />
        <Stack.Screen name="MeusMedicamentos" component={MeusMedicamentos} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
      </Stack.Navigator>
      <ToastMessage position="bottom" />
    </NavigationContainer>
  );
}

export default AppNavigator;
