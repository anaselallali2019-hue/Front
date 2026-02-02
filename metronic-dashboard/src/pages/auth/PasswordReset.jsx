import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import AdvancedInput from '../../components/forms/AdvancedInput';

export default function PasswordReset() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('=== PASSWORD RESET REQUESTED ===');
    console.log('Email:', email);

    toast.success('Reset link sent to your email!', {
      icon: '📧',
      duration: 4000,
    });

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
        <div className="w-full max-w-md">
          <div className="card">
            <div className="card-body text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full">
                <CheckCircle className="text-green-600 dark:text-green-400" size={32} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Check Your Email
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  We've sent a password reset link to
                </p>
                <p className="font-semibold text-gray-900 dark:text-white mt-2">
                  {email}
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Click the link in the email to reset your password. 
                  The link will expire in 1 hour.
                </p>
              </div>

              <div className="space-y-3">
                <Link to="/auth/sign-in" className="btn btn-primary w-full">
                  <ArrowLeft size={18} />
                  <span>Back to Login</span>
                </Link>
                
                <button
                  onClick={() => {
                    console.log('Resending reset email');
                    toast.success('Reset link sent again!', { icon: '📧' });
                  }}
                  className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 font-medium"
                >
                  Didn't receive the email? Resend
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-4">
            <Mail className="text-primary-600" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Reset Password</h1>
          <p className="text-primary-100 dark:text-gray-400">
            Enter your email to receive a reset link
          </p>
        </div>

        <div className="card">
          <div className="card-body space-y-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <AdvancedInput
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                icon={Mail}
                required
                helperText="We'll send a password reset link to this email"
              />

              <button type="submit" className="btn btn-primary w-full">
                Send Reset Link
              </button>
            </form>

            <Link
              to="/auth/sign-in"
              className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
