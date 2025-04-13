'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FindCentersPage from '@/components/FindCenters';
import { authService } from '@/services/authServices';

export default function CentersPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Check if user is authenticated
    if (!authService.isAuthenticated()) {
      router.push('/login');
    }
  }, [router]);
  
  return <FindCentersPage />;
}