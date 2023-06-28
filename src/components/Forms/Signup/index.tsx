'use client'

import { useState } from 'react'
import { LoveIt, Sad } from 'uicons-react'
import {
  AlertCircle,
  Building2Icon,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
} from 'lucide-react'
import { motion } from 'framer-motion'

import { Spinner } from '@/components/ui/feedback/Spinner'
import { useSignUp } from '@/hooks/useSignUp'
import { TextField } from '@/components/ui/forms/TextField'
import { Button } from '@/components/ui/layout/Button'

export function SignUp() {
  const [visibility, setVisibility] = useState(false)
  const {
    register,
    handleSubmit,
    handleSignup,
    isPasswordStrong,
    errors,
    isSubmitting,
    getValues,
  } = useSignUp()

  return (
    <>
      {/* forms */}
      <motion.form
        onSubmit={handleSubmit(handleSignup)}
        className="flex flex-col items-center gap-2 py-8"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <TextField
          type="text"
          placeholder="Nome"
          leftIcon={<User size={22} className="text-gray-800" />}
          rightIcon={
            errors?.email && <AlertCircle size={18} className="text-red-500" />
          }
          {...register('name')}
          error={errors?.name?.message?.toString()}
        />
        <TextField
          type="email"
          placeholder="eu@exemplo.com"
          leftIcon={<Mail size={20} className="text-gray-800" />}
          rightIcon={
            errors?.email && <AlertCircle size={18} className="text-red-500" />
          }
          {...register('email')}
          error={errors?.email?.message?.toString()}
        />
        <TextField
          type="text"
          placeholder="Empresa"
          leftIcon={<Building2Icon size={20} className="text-gray-800" />}
          rightIcon={
            errors?.email && <AlertCircle size={18} className="text-red-500" />
          }
          {...register('corporateName')}
          error={errors?.corporateName?.message?.toString()}
        />
        <TextField
          type={visibility ? 'text' : 'password'}
          placeholder="••••••••"
          leftIcon={
            isPasswordStrong ? (
              <LoveIt size={20} className="text-gray-800" />
            ) : !isPasswordStrong && getValues('password')?.length > 0 ? (
              <Sad size={22} className="text-gray-800" />
            ) : (
              <Lock size={18} className="text-gray-800" />
            )
          }
          rightIcon={
            !errors?.password ? (
              <button type="button" onClick={() => setVisibility(!visibility)}>
                {visibility ? (
                  <EyeOff size={18} className="text-gray-800" />
                ) : (
                  <Eye size={18} className="text-gray-800" />
                )}
              </button>
            ) : (
              <AlertCircle size={18} className="text-red-500" />
            )
          }
          {...register('password')}
          error={errors?.password?.message?.toString()}
          assistiveText={
            isPasswordStrong ? (
              <span className="flex w-full items-center text-xs text-emerald-600">
                Ótima senha.
              </span>
            ) : (
              getValues('password')?.length > 0 && (
                <span className="flex w-full items-center text-xs text-red-600">
                  Senha fraca.
                </span>
              )
            )
          }
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Spinner /> : 'Cadastrar'}
        </Button>
      </motion.form>
    </>
  )
}
