import { useState } from 'react';
import LoginForm from './loginform';
import RegistrationForm from './registrationform';
const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  const openRegisterModal = () => setShowRegisterModal(true);
  const closeRegisterModal = () => setShowRegisterModal(false);

  return (
    <header className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end gap-4">

          {/* Login Button */}
          <button
            onClick={openLoginModal}
            className="cursor-pointer block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
          >
            <span className="sr-only">Login</span>
            Log In
          </button>
          {/* Register Button */}
          <button
            onClick={openRegisterModal}
            className="cursor-pointer block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
          >
            <span className="sr-only">Register</span>
            Register
          </button>

          <span aria-hidden="true" className="block h-6 w-px rounded-full bg-gray-200"></span>


        </div>

        <div className="mt-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">StockRanker.Co</h1>

          <p className="mt-1.5 text-sm text-gray-500">
            "Real Opinions, Real Comments - Public Rankings that Tell the Truth! 🚀"
          </p>
        </div>
      </div>

      {/* Auth Modal */}
      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={closeLoginModal}></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            {/* Login Modal Content */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <LoginForm onSuccess={closeLoginModal} />
            </div>
          </div>
        </div>
      )}
      {/* Register Modal */}
      {showRegisterModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={closeRegisterModal}></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            {/* Register Modal Content */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <RegistrationForm onSuccess={closeRegisterModal} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
