import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  HStack,
  Heading,
  Text,
  Button,
  Link,
} from '@chakra-ui/react'
import {
  ChangeEvent,
  ClipboardEvent,
  FocusEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'
import CustomInput from './input'
import { getVaultUrl, VAULT_CODE_LENGTH, VAULTS_FORM } from '../libs/vaults'

interface CustomModalParams {
  isOpen: boolean
  onClose: () => void
}

export default function CustomModal({ isOpen, onClose }: CustomModalParams) {
  const [code, setCode] = useState(new Map())
  const [status, setStatus] = useState<'success' | 'error' | 'default'>(
    'default',
  )
  const inputRefs: { [index: number]: RefObject<HTMLInputElement> } = {
    0: useRef<HTMLInputElement>(null),
    1: useRef<HTMLInputElement>(null),
    2: useRef<HTMLInputElement>(null),
    3: useRef<HTMLInputElement>(null),
    4: useRef<HTMLInputElement>(null),
    5: useRef<HTMLInputElement>(null),
  }

  // Lifecycle

  useEffect(() => {
    isOpen && setTimeout(() => reset(), 100)
  }, [isOpen])

  // Code management

  const onCode = (event: ChangeEvent<HTMLInputElement>) =>
    (event.target.value = ('' + event.target.value).toUpperCase())
  const onPasteCode = (event: ClipboardEvent<HTMLInputElement>) => {
    setStatus('default')
    const pasted = event.clipboardData.getData('Text')

    if (!pasted.length) {
      return
    }

    const newCode = pasted.slice(0, VAULT_CODE_LENGTH).toUpperCase()
    const newMap = new Map(Array.from(newCode).map((s, i) => [i, s]))
    const toFocus =
      newCode.length === VAULT_CODE_LENGTH ? newCode.length - 1 : newCode.length

    setCode(newMap)
    setFocus(toFocus)
    event.preventDefault()
  }

  const onFocus = (event: FocusEvent<HTMLInputElement, Element>) =>
    event.target.select()
  const setFocus = (index: number) => {
    const el = inputRefs[index]
    el.current?.focus()
    el.current?.select()
  }
  const updateCode = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    setStatus('default')
    const newCode = new Map(code)
    const value = event.target.value

    if (value) {
      newCode.set(index, value)
      index < VAULT_CODE_LENGTH - 1 && inputRefs[index + 1].current?.focus()
    } else {
      newCode.delete(index)
      index > 0 && inputRefs[index - 1].current?.focus()
    }

    setCode(newCode)
  }
  const resetCode = () => setCode(new Map())
  const resetFocus = () => inputRefs[0].current?.focus()
  const reset = () => {
    setStatus('default')
    resetCode()
    resetFocus()
  }
  const isCodeValid = () =>
    Array.from(code.values()).join('').length === VAULT_CODE_LENGTH
  const submitCode = () => {
    if (!isCodeValid()) {
      return
    }

    const keyCode = Array.from(code.values()).join('')
    const url = getVaultUrl(keyCode, process.env.NEXT_PUBLIC_SECRET_KEY || '')

    if (!url) {
      setStatus('error')
      return
    }

    setStatus('success')
    setTimeout(() => (window.location.href = url), 1000)
  }

  return (
    <Modal
      isOpen={isOpen}
      variant={status}
      size="sm"
      onClose={onClose}
      onCloseComplete={reset}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Heading
            as="h3"
            fontWeight="normal"
            size="lg"
            mb="1"
            textAlign="center"
          >
            Early Access
          </Heading>
          <Text fontSize="lg" textAlign="center" mb="3" color="grey">
            Enter your invite code to access the app
          </Text>
          <HStack spacing="10px" justifyContent="center" paddingX={2}>
            {[...Array(VAULT_CODE_LENGTH)].map((_, index) => (
              <CustomInput
                key={index}
                inputRef={inputRefs[index]}
                value={code.get(index)}
                isDisabled={false}
                status={status}
                onInput={onCode}
                onFocus={onFocus}
                onPaste={onPasteCode}
                onChange={(e) => updateCode(e, index)}
                onKeyDown={(e) => e.key === 'Enter' && submitCode()}
              ></CustomInput>
            ))}
          </HStack>
          <HStack justifyContent={'center'} mt={3}>
            <Text fontSize="lg" textAlign="center" color="grey">
              Don&apos;t have a code?
            </Text>
            <Link
              fontSize={'lg'}
              target="_blank"
              href={VAULTS_FORM}
              fontWeight={'bold'}
              color={'primary'}
            >
              Request one
            </Link>
          </HStack>
        </ModalBody>
        <ModalFooter justifyContent="center" gap={2}>
          <Button variant="outline" onClick={reset}>
            Clear
          </Button>
          <Button isDisabled={!isCodeValid()} onClick={submitCode}>
            Enter code
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
