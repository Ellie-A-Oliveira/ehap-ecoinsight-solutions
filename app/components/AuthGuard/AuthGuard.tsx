"use client"

import isUserLoggedIn from '@/app/helper/is-user-logged-in';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    if (!isUserLoggedIn()) {
        router.push('/login');
    }
    setCheckingAuth(false);
  }, []);

  return <>
    {checkingAuth && <p></p>}
    {!checkingAuth && children}    
    </>;
};