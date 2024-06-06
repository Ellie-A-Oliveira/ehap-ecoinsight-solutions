"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    // Simule a verificação de autenticação (substitua isso com sua lógica de autenticação real)
    const isAuthenticated = true;
    
    if (!isAuthenticated) {
        router.push('/login');
    }
    setCheckingAuth(false);
  }, []);

  return <>
    {checkingAuth && <p></p>}
    {!checkingAuth && children}    
    </>;
};