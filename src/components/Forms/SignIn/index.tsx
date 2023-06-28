'use client'

import { useState } from 'react'
import { AlertCircle, Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

import { Spinner } from '@/components/ui/feedback/Spinner'
import { useSignIn } from '@/hooks/useSignIn'
import { TextField } from '@/components/ui/forms/TextField'
import { Button } from '@/components/ui/layout/Button'

export function SignIn() {
  const [visibility, setVisibility] = useState(false)

  const { register, handleSubmit, handleSignin, errors, isSubmitting } =
    useSignIn()

  return (
    <>
      {/* forms */}
      <motion.form
        onSubmit={handleSubmit(handleSignin)}
        className="flex flex-col items-center gap-2 py-8"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <TextField
          type="email"
          placeholder="eu@exemplo.com"
          leftIcon={<Mail size={18} className="text-gray-800" />}
          rightIcon={
            errors?.email && <AlertCircle size={18} className="text-red-500" />
          }
          {...register('email')}
          error={errors?.email?.message?.toString()}
        />
        <TextField
          type={visibility ? 'text' : 'password'}
          placeholder="••••••••"
          leftIcon={<Lock size={18} className="text-gray-800" />}
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
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Spinner /> : 'Entrar'}
        </Button>
      </motion.form>
    </>
  )
}
