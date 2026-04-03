import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: Props) {
  return <input {...props} style={{ padding: 8, borderRadius: 6, width: '100%' }} />
}
