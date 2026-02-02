import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Shield, ArrowLeft } from 'lucide-react';

export default function TwoFactorAuth() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputsRef = useRef([]);

  const handleChange = (index, value) => {
    if (value.length > 1) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    console.log('2FA code changed:', newCode.join(''));

    // Auto-focus next input
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }

    // Auto-submit when complete
    if (newCode.every(digit => digit) && index === 5) {
      handleSubmit(newCode.join(''));
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6).split('');
    const newCode = [...code];
    pastedData.forEach((char, idx) => {
      if (idx < 6) newCode[idx] = char;
    });
    setCode(newCode);
    console.log('Code pasted:', newCode.join(''));
    toast.success('Code pasted!');
  };

  const handleSubmit = (verificationCode) => {
    console.log('=== 2FA CODE SUBMITTED ===');
    console.log('Code:', verificationCode);
    
    toast.success('Verification successful!', {
      icon: '✅',
      duration: 3000,
    });
  };

  const handleResend = () => {
    console.log('Resending 2FA code...');
    toast.success('New code sent to your device!', {
      icon: '📱',
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-4">
            <Shield className="text-primary-600" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Two-Factor Authentication</h1>
          <p className="text-primary-100 dark:text-gray-400">
            Enter the 6-digit code from your authenticator app
          </p>
        </div>

        <div className="card">
          <div className="card-body space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4 text-center">
                Verification Code
              </label>
              <div className="flex gap-3 justify-center" onPaste={handlePaste}>
                {code.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputsRef.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 dark:text-white transition-all"
                  />
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Didn't receive the code?
              </p>
              <button
                onClick={handleResend}
                className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 font-medium"
              >
                Resend Code
              </button>
            </div>

            <div className="flex gap-3">
              <Link to="/auth/sign-in" className="btn btn-secondary flex-1">
                <ArrowLeft size={18} />
                <span>Back to Login</span>
              </Link>
              <button
                onClick={() => handleSubmit(code.join(''))}
                disabled={!code.every(digit => digit)}
                className="btn btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Verify
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-primary-100 dark:text-gray-400 text-sm">
            Having trouble? <Link to="/help" className="font-medium hover:underline">Contact Support</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
