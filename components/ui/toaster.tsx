"use client"

import {
  Toaster as ChakraToaster,
  Portal,
  Spinner,
  Stack,
  Toast,
  createToaster,
  Flex,
  Icon
} from "@chakra-ui/react"
import { LuCircleCheck } from "react-icons/lu"

export const toaster = createToaster({
  placement: "bottom-end",
  pauseOnPageIdle: true,
})

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
        {(toast) => (
          <Toast.Root
            width={{ md: "sm" }}
            borderRadius="lg"
            border="2px solid"
            borderImageSource="radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.65) 0%, rgba(116, 200, 152, 0.1) 100%)"
            bg="radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.25) 0%, rgba(116, 200, 152, 0.15) 50%, rgba(116, 200, 152, 0.03) 100%), #46474F"
          >
            {toast.type === "loading" ? (
              <Spinner size="sm" color="blue.solid" />
            ) : (
              <Toast.Indicator />
            )}
            <Flex alignItems="center" gap="2">
              <Icon fontSize="30px" color="green.400">
                <LuCircleCheck />
              </Icon>
              <Stack gap="0.5" flex="1" maxWidth="100%">
                {toast.title && <Toast.Title fontWeight="bold">{toast.title}</Toast.Title>}
                {toast.description && (
                  <Toast.Description>{toast.description}</Toast.Description>
                )}
              </Stack>
              {toast.action && (
                <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
              )}
              {toast.meta?.closable && <Toast.CloseTrigger />}
            </Flex>
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  )
}
