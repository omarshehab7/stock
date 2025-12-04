import React from 'react'
import { Label } from "@/components/ui/label";
import { cn } from '@/lib/utils';
import { Input } from '../ui/input';
const InputField = ({name,label,placeholder,register,error,validation, type= 'text', disabled, value }: FormInputProps) => {
  return (
    <div className='space-y-2'>
        <Label htmlFor={name} className='form-label'>
            {label}
        </Label>
        <Input 
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        {...register(name, validation)}
        className={cn('form-input', {'opacity-50 cursor-not-allowed': disabled })}
        />
        {error && <p className='text'>{error.message}</p>}
        </div>
  )
}

export default InputField