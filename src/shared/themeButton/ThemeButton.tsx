import React from 'react';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export const ThemeButton = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div>
            <IconButton
                aria-label="toggle theme"
                size="md"
                left={2}
                top={2}
                onClick={toggleColorMode}
                icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            />
        </div>
    );
};
