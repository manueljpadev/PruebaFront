'use client'
import { Container } from '@mantine/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserList from '@/components/UserList/UserList';
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient();

export default function Home() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Container size="responsive">
            <UserList />
          </Container>
        </div>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
