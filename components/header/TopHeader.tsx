import Link from 'next/link';
import { Cart, LogoIcon, MagnifyingGlassIcon, UserIcon } from '../Icons';
import { useRecoilState } from 'recoil';
import { createPortal } from 'react-dom';
import LogInModal from '../modal/LogInModal';
import SearchModal from '../modal/SearchModal';
import { logInModalState, searchModalState } from '@/atoms/modalAtoms';

export default function TopHeader() {
  const [showSearchModal, setShowSearchModal] = useRecoilState(searchModalState);
  const [showLogInModal, setShowLogInModal] = useRecoilState(logInModalState);

  const openModal = () => {
    setShowSearchModal(true);
    document.body.classList.add('modal-open');
  };

  return (
    <header className="px-6 flex justify-between items-center z-10 bg-white pt-2 lg:pt-5 lg:px-24 xl:px-48 top-0 sticky">
      <Link href={'/'} className="flex items-center">
        <h1 className="text-[20px] lg:text-head-xl font-bold">BIZ CURATOR</h1>
        <LogoIcon />
      </Link>
      <div className="lg:flex flex-col lg:space-y-10">
        <div className="hidden lg:block space-x-5">
          <Link href={'#'}>회원가입</Link>
          <button onClick={() => setShowLogInModal(true)}>로그인</button>
          {showLogInModal && createPortal(<LogInModal setShowLogInModal={setShowLogInModal} />, document.body)}
          <Link href={'#'}>고객센터</Link>
        </div>
        <div className="flex items-center space-x-5 ml-auto">
          <button className="header-btn" onClick={openModal}>
            <MagnifyingGlassIcon color="main" />
          </button>
          {showSearchModal && createPortal(<SearchModal setShowSearchModal={setShowSearchModal} />, document.body)}
          <button className="hidden lg:inline header-btn">
            <UserIcon color="main" />
          </button>
          <Link href={'/user/cart'} className="header-btn">
            <Cart className="w-5 lg:w-8 h-5 lg:h-8" />
          </Link>
        </div>
      </div>
    </header>
  );
}