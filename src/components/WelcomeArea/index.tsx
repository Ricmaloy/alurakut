import { FormEvent } from 'react';
import { OrkutNostalgicIconSet } from '../../lib/AlurakutCommons';
import { Box } from '../Box';
import { ComunitiesForm } from '../ComunitiesForm';
import {  } from './styles';

export const WelcomeArea = ({name}) => {
    
    return (
        <>
        <Box>
            <h1 className="title">
                Bem vindo(a), {name}
            </h1>

            <OrkutNostalgicIconSet />
        </Box>

        <Box>
            <ComunitiesForm />
        </Box>
        </>
    )
}