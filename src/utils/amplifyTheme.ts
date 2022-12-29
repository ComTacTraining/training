import type { Theme } from '@aws-amplify/ui-react'

const theme: Theme = {
  name: 'training',
  tokens: {
    components: {
      button: {
        primary: {
          backgroundColor: { value: '{colors.red.100}' },
          _hover: {
            backgroundColor: { value: '{colors.red.80}' }
          },
          _focus: {
            backgroundColor: { value: '{colors.red.80}' }
          },
          _active: {
            backgroundColor: { value: '{colors.red.90}' }
          }
        }
      },
      tabs: {
        borderColor: { value: '{colors.neutral.20}' },
        item: {
          color: { value: '{colors.red.90}' },

          _hover: {
            color: { value: '{colors.red.60}' }
          },
          _focus: {
            color: { value: '{colors.red.60}' }
          },
          _active: {
            color: { value: '{colors.red.90}' },
            borderColor: { value: '{colors.red.90}' }
          }
        }
      }
    },
    colors: {
      font: {
        primary: {
          value: '#650f22'
        },
        secondary: {
          value: '#c6a48e'
        }
      }
    }
  }
}

export { theme }
