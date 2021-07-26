import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

import { Logo } from '../Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';
import { RiMenuLine } from 'react-icons/ri';

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false, // Padrão, não visível
    lg: true, // Se tamanho da tela for Large, visível
  });

  return (
    <Flex
      as="header"
      width="100%"
      height="20"
      maxWidth={1480}
      marginX="auto"
      marginTop="4"
      paddingX="6"
      align="center"
    >
      {!isWideVersion && ( /* Se não estiver na versão LARGE (lg) */
      <IconButton /* Quando o Botão é apenas um ícone */
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled" /* Botão sem estilo */
          onClick={onOpen}
          marginRight="2"
        ></IconButton>
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" marginLeft="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
