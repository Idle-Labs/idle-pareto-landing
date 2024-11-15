import { Input, InputProps } from '@chakra-ui/react'
import { LegacyRef, Ref } from 'react'

interface CustomInputParams extends InputProps {
  inputRef?: LegacyRef<HTMLInputElement>
  status?: 'success' | 'error' | 'default'
}

export default function CustomInput({
  value,
  onInput,
  onPaste,
  onFocus,
  onChange,
  onKeyDown,
  isDisabled,
  status,
  inputRef,
}: CustomInputParams) {
  return (
    <Input
      className="notSelection cursorPointer"
      ref={inputRef}
      isDisabled={isDisabled}
      value={value || ''}
      onInput={onInput}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
      variant={status}
      size="xl"
      textAlign="center"
      htmlSize={1}
      maxLength={1}
      width="45px"
    />
  )
}
