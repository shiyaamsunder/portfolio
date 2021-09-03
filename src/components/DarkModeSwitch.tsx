import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode, IconButton } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      aria-label={`Switch to ${colorMode} theme`}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      size="sm"
      onClick={toggleColorMode}
      _focus={{ boxShadow: "0px 0px 0px 3px #c0a0ff" }}
    />
  );
};
