import { Inter } from 'next/font/google'
import SearchHeader from '../components/SearchHeader'


export const metadata = {
  title: 'Google Clone',
  description: 'Google Clone created by Next js 13',
}

export default function SearchLayOut({children}) {
  return (
    <div>
      <link rel="icon" href="/favicon.svg"/>
        <SearchHeader/>
        {children}
    </div>
  );
}
