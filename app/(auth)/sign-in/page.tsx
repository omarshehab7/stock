'use client';
import InputField from '@/components/forms/InputField';
import { Button } from '@/components/ui/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import FooterLink from '@/components/forms/FooterLink';
import { signInWithEmail } from '@/lib/actions/auth.actions';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
const Signin = () => {
    const router = useRouter();
    const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
       defaultValues: {
        email: '',
        password: '',},
        mode: 'onBlur',
  })
  
    const onSubmit: SubmitHandler<SignInFormData> = async (data: SignInFormData) => {
    try {
        const result = await signInWithEmail(data);
        if (result.success){
            router.push('/')
        }
        console.log(data)
    } catch (error) {
        console.error(error);
        toast.error('Sign in failed. Please try again.', {
            description: error instanceof Error ? error.message : 'An unexpected error occurred.',
        });
    }
   }
    return (
    <>
    <h1 className='form-title'>
        Sign In
    </h1>
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <InputField
            name="email" 
            label="Email" 
            placeholder="contact@example.com" 
            type='email'
            register={register} 
            error={errors.email} 
            validation={{required: 'Email is required', pattern:/^\w+@\w+\.\w+$/, message:'Email is required'}}/>
       <InputField
            name="password" 
            label="Password" 
            placeholder="Enter a strong password" 
            register={register} 
            type='password'
            error={errors.password} 
            validation={{required: 'Password is required', minLength: 8}}/>
        <Button type="submit" className='yellow-btn w-full mt-4' disabled={isSubmitting}>
            {isSubmitting ? 'Signing In...' : 'Sign In'}
        </Button>
        <FooterLink text="Don't have an account?" linkText='Sign Up' href='/sign-up'/>
    </form>
    </>
  )
}

export default Signin