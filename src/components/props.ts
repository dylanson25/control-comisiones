export interface fieldProps {
  label?: string
  variant?: string
  message?: string
}
export interface inputProps extends fieldProps {
  type?: 'Any' | 'native' | 'input' | 'email' | 'textarea' | 'text' | 'password'
  ariaLabelledby?: string
  'aria-labelledby'?: string
  autocomplete?: string
  autosize?: boolean
  clearIcon?: string
  'clear-icon'?: string
  clearable?: boolean
  counter?: boolean
  disabled?: boolean
  expanded?: boolean
  icon?: string
  iconClickable?: boolean
  'icon-clickable'?: boolean
  iconPack?: string
  'icon-pack'?: string
  iconRight?: string
  'icon-right'?: string
  iconRightClickable?: boolean
  'icon-right-clickable'?: boolean
  iconRightVariant?: string
  'icon-right-variant'?: string
  maxlength?: string | Number
  passwordReveal?: boolean
  'password-reveal'?: boolean
  placeholder?: string
  rounded?: boolean
  size?: 'small' | 'medium' | 'large'
  statusIcon?: boolean
  'status-icon'?: boolean
  useHtml5Validation?: boolean
  'use-html5-validation'?: boolean
  'v-model'?: string | Number
  validationMessage?: string
  'validation-message'?: string
  variant?: string | 'primary' | 'info' | 'success' | 'warning' | 'danger'
}

export interface buttonProps {
  class?: string | string[]
  disabled?: boolean
  expanded?: boolean
  iconLeft?: string
  iconPack?: string
  iconRight?: string
  'icon-left'?: string
  'icon-pack'?: string
  'icon-right'?: string
  inverted?: boolean
  label?: string
  loading?: boolean
  nativeType?: string
  'native-type'?: string
  outlined?: boolean
  role?: string
  rounded?: boolean
  size?: 'small' | 'medium' | 'large'
  tag?: string | 'button' | 'a' | 'input' | 'router-link' | 'nuxt-link'
  variant?: string | 'primary' | 'info' | 'success' | 'warning' | 'danger'
}
