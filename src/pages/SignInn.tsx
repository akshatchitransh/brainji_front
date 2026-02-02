import { Button } from "../components/button"
import { Input } from "../components/Input"

export const Signin = () => {





  return (
    <div className="min-h-screen w-full bg-liner-to-br from-slate-50 via-slate-100 to-slate-200 flex justify-center items-center p-4 sm:p-6 md:p-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      {/* Main card container */}
      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/60 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/60">
          {/* Header section */}
          <div className="px-6 sm:px-8 pt-8 sm:pt-10 pb-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
                Welcome back
              </h1>
              <p className="text-sm sm:text-base text-slate-600">
                Sign in to continue to your account
              </p>
            </div>
          </div>

          {/* Form section */}
          <div className="px-6 sm:px-8 pb-8 sm:pb-10 space-y-5">
            {/* Username input */}
            <div className="space-y-2">
              <label 
                htmlFor="username" 
                className="block text-sm font-medium text-slate-700"
              >
                Username
              </label>
              <Input 
               
                placeholder="Enter your username" 
              />
            </div>

            {/* Password input */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label 
                  htmlFor="password" 
                  className="block text-sm font-medium text-slate-700"
                >
                  Password
                </label>
                <a 
                  href="#" 
                  className="text-xs sm:text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
                >
                  Forgot password?
                </a>
              </div>
              <Input 
                
                placeholder="Enter your password" 
                type="password"
              />
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <Button 
                variant="primary" 
                text="Sign in" 
                size="sm" 
                fullWidth={true} 
                loading={true}
              />
            </div>

            {/* Divider */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-xs sm:text-sm">
                <span className="px-3 bg-white text-slate-500">
                  New to our platform?
                </span>
              </div>
            </div>

            {/* Sign up link */}
            <div className="text-center">
              <a 
                href="#" 
                className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors duration-200 inline-flex items-center gap-1 group"
              >
                Create an account
                <svg 
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <p className="mt-6 text-center text-xs sm:text-sm text-slate-600">
          By signing in, you agree to our{' '}
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-200">
            Terms of Service
          </a>
          {' '}and{' '}
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-200">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  )
}
