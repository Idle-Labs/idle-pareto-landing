import { background, extendTheme } from '@chakra-ui/react'
import { dmSans, poppins } from './fonts'
import bgPartners from '../../public/bg/partners.png'

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: poppins.style.fontFamily,
    body: dmSans.style.fontFamily,
  },
  colors: {
    white: '#FFFFFF',
    dark: '#1B1E27',
    primary: '#1682FE',
    green: '#4DE3B0',
    greenDark: '#00AE8F',
    red: '#D43B3B',
    redDark: '#903030',
    blueLight: '#4660E8',
    grey: '#555B67',
    greyLight: '#CCD0D7',
    bgWhite: {
      backgroundColor: 'white',
      color: 'dark',
    },
    whiteGradient:
      'linear-gradient(90deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,1) 100%)',
    blueGradient:
      'linear-gradient(90deg, rgba(83,162,255,1) 0%, rgba(33,43,63,1) 100%)',
    greenGradient:
      'linear-gradient(90deg, rgba(60,153,131,1) 0%, rgba(46,98,97,1) 100%)',
    lightGradient:
      'linear-gradient(90deg, rgba(225, 226, 226, 0.20) 0%, rgba(205, 208, 214, 0.20) 100%)',
    grayGradient:
      'linear-gradient(90deg, rgba(150, 152, 155, 1) 0%, rgba(36, 41, 38, 1) 100%)',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'dark',
      },
      a: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
  textStyles: {
    base: {
      fontSize: 'sm',
      fontWeight: 500,
    },
  },
  layerStyles: {
    lightGradient: {
      background: 'lightGradient',
    },
    grayGradient: {
      background: 'grayGradient',
    },
    whiteGradientShadow: {
      background: 'whiteGradient',
      boxShadow: '10px 10px 50px 0px rgba(0, 0, 0, 0.05)',
      borderRadius: 'xl',
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 500,
      },
    },
    Button: {
      variants: {
        neutral: {
          bg: 'black',
          color: 'white',
          _hover: {
            bg: 'primary',
            _disabled: {
              bg: 'gray.900',
              color: 'white',
            },
          },
          _disabled: {
            bg: 'gray.900',
            color: 'white',
          },
        },
        outline: {
          color: 'black',
          borderColor: 'black',
          _hover: {
            color: 'gray.800',
            bg: 'white',
          },
        },
      },
      defaultProps: {
        variant: 'neutral',
      },
      sizes: {
        xl: {
          fontSize: '1.4rem',
          fontWeight: 600,
          padding: '1rem 1.5rem',
        },
      },
    },
    Modal: {
      baseStyle: {
        dialog: {
          bg: 'white',
          padding: '1rem',
        },
      },
      variants: {
        success: {
          dialog: {
            outline: '5px solid var(--chakra-colors-green)',
          },
        },
        error: {
          dialog: {
            outline: '5px solid var(--chakra-colors-red)',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          padding: 2,
          boxShadow: '10px 10px 50px 0px rgba(0, 0, 0, 0.25)',
        },
      },
      variants: {
        blueGradient: {
          container: {
            background: 'blueGradient',
          },
        },
        headerBlueGradient: {
          container: {
            backgroundColor: 'white',
            color: 'dark',
            overflow: 'hidden',
            padding: 0,
          },
          header: {
            background: 'blueGradient',
            color: 'white',
          },
        },
        greenGradient: {
          container: {
            background: 'greenGradient',
          },
        },
        headerGreenGradient: {
          container: {
            backgroundColor: 'white',
            color: 'dark',
            overflow: 'hidden',
            padding: 0,
          },
          header: {
            background: 'greenGradient',
            color: 'white',
          },
        },
        grayGradient: {
          container: {
            background: 'grayGradient',
          },
        },
        headerGrayGradient: {
          container: {
            backgroundColor: 'white',
            color: 'dark',
            overflow: 'hidden',
            padding: 0,
          },
          header: {
            background: 'grayGradient',
            color: 'white',
          },
        },
        partners: {
          container: {
            backgroundImage: `url(${bgPartners.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          },
        },
      },
    },
    Input: {
      sizes: {
        xl: {
          field: {
            fontSize: '2rem',
            fontWeight: 'bold',
            borderRadius: 'xl',
          },
        },
      },
      baseStyle: {
        field: {
          border: 0,
          caretColor: 'transparent',
        },
      },
      variants: {
        default: {
          field: {
            bg: 'grey',
            color: 'white',
            _focus: {
              bg: 'primary',
            },
          },
        },
        success: {
          field: {
            bg: 'greenDark',
            _focus: {
              bg: 'green',
            },
          },
        },
        error: {
          field: {
            bg: 'redDark',
            _focus: {
              bg: 'red',
            },
          },
        },
      },
    },
    Tabs: {
      variants: {
        rounded: {
          tablist: {
            background: 'blackAlpha.400',
            padding: '3px',
            borderRadius: 'lg',
          },
          tab: {
            height: 8,
            borderRadius: 'md',
            color: 'white',
            fontWeight: 'bold',
          },
        },
      },
    },
    Tag: {
      variants: {
        green: {
          border: '1px solid',
          borderColor: 'green',
        },
        blue: {
          borderColor: 'blue',
        },
        gray: {
          borderColor: 'gray',
        },
      },
    },
  },
})
