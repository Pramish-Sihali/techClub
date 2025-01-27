import SignUp from '@/components/auth/SignUp'
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>
      <SignUp />
      <p className="mt-4 text-center text-sm">
        Already have an account?{' '}
        <Link href="/signin" className="text-blue-600 hover:text-blue-800">
          Sign in
        </Link>
      </p>
    </div>
  )
}