import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

type ProfileProps = {
  showProfileData?: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Giordano Bruno</Text>
          <Text color="gray.300" fontSize="small">
            eu@giordanobruno.dev
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Giordano Bruno"
        src="https://avatars.githubusercontent.com/u/14043484?v=4"
      />
    </Flex>
  );
}
