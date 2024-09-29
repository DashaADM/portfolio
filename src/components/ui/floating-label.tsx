'use client'

import React, { useState, useRef, useEffect } from 'react'

interface FloatingLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const FloatingLabel = React.forwardRef<HTMLInputElement, FloatingLabelProps>(
  ({ label, className, ...props }, ref) => {
    const [isFloating, setIsFloating] = useState(false)
    const innerRef = useRef<HTMLInputElement>(null)
    const inputRef = (ref as React.RefObject<HTMLInputElement>) || innerRef

    useEffect(() => {
      const handleFocus = () => setIsFloating(true)
      const handleBlur = () => {
        if (inputRef.current?.value === '') {
          setIsFloating(false)
        }
      }

      const inputElement = inputRef.current
      if (inputElement) {
        inputElement.addEventListener('focus', handleFocus)
        inputElement.addEventListener('blur', handleBlur)
      }

      return () => {
        if (inputElement) {
          inputElement.removeEventListener('focus', handleFocus)
          inputElement.removeEventListener('blur', handleBlur)
        }
      }
    }, [inputRef])

    return (
      <div className={`relative ${className}`}>
        <input
          {...props}
          ref={inputRef}
          placeholder=" "
          className="block w-full px-4 pt-6 pb-1 text-base text-zinc-900 border border-zinc-300 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
        />
        <label
          className={`absolute text-sm text-zinc-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${isFloating ? 'text-blue-600' : ''} pointer-events-none`}
        >
          {label}
        </label>
      </div>
    )
  },
)

FloatingLabel.displayName = 'FloatingLabel'
