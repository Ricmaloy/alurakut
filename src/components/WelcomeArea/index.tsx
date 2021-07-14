import { FormEvent } from 'react';
import { OrkutNostalgicIconSet } from '../../lib/AlurakutCommons';
import { Box } from '../Box';
import { ComunitiesForm } from '../ComunitiesForm';
import {  } from './styles';

export const WelcomeArea = () => {
    
    return (
        <>
        <Box>
            <h1 className="title">
                Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet />
        </Box>

        <Box>
            <ComunitiesForm />
        </Box>
        </>
    )
}