/** @jsx jsx */
import { Box, Link, Flex, jsx, useColorMode } from "theme-ui"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === `dark`

  return (
    <Box as="footer" variant="layout.footer">
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `space-around`,
          alignItems: `center`,
          flexWrap: `wrap`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <StaticImage width={200} alt="Logo" src="../../../images/IST_Logo.png" />
        {isDark ? (
            <StaticImage width={600} alt="Logo" src="../../../images/logo_wqd_dark.png" />
        ) : (
            <StaticImage width={600} alt="Logo" src="../../../images/logo_wqd_light.png" />
        )}
        <StaticImage width={300} alt="Logo" src="../../../images/esm_logo.jpg" />
      </Flex>
    </Box>
  )
}

export default Footer
