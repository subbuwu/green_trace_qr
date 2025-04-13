'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/services/authServices';
import BusinessDashboard from '@/components/BusinessDashboard';
import ConsumerDashboard from '@/components/CustomerDashboard';

export default function DashboardPage() {
  const router = useRouter();
  const userType = authService.getUserType();
  
  useEffect(() => {
    // Check if user is authenticated
    if (!authService.isAuthenticated()) {
      router.push('/login');
    }
  }, [router]);
  
  return userType === 'business' ? <BusinessDashboard /> : <ConsumerDashboard />;
}