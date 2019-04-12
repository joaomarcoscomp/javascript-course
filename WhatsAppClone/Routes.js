import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import FormLogin from './src/component/FormLogin';
import FormCadastro from './src/component/FormCadastro';

export default props => (
    <Router>
        <Stack>
            <Scene key='formLogin' component={FormLogin} title="Login" />
            <Scene key='formCadastro' component={FormCadastro} title="Cadastro" />
        </Stack>
    </Router>
);
