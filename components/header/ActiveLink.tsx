import Link from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps {
  href: string;
  children: string;
  className?: string;
}

export default function ActiveLink({ href, children, className }: ActiveLinkProps) {
  const router = useRouter();
  const isActive = router.pathname.slice(0, 9) === href.slice(0, 9);

  return (
    <Link href={href} className={`${isActive && 'text-main border-b-[1px] border-main'} ${className} header-link`}>
      {children}
    </Link>
  );
}