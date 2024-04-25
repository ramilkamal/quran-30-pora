import React, { useRef } from 'react';
import {
    useDisclosure,
    Button,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerFooter,
    Input,
    IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { ThemeButton } from '../../shared/themeButton/ThemeButton';

export const Sidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<any>();

    return (
        <div className="sidebar">
            <IconButton
                aria-label="toggle theme"
                variant="outline"
                // rounded="full"
                size="lg"
                ref={btnRef}
                colorScheme="teal"
                onClick={onOpen}
                icon={<HamburgerIcon />}
            />
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <ThemeButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder="Type here..." />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="blue">Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
};
