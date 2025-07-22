'use client';

import React from 'react';
import SidebarComponent from '@/components/Sidebar/SidebarComponent';
import CalendarComponent from '@/components/Calendar/CalendarComponent';
import styles from '@/styles/Home.module.scss';

/**
 * Main page combining the sidebar and booking calendar.
 */
export default function Home() {
  return (
    <main className={styles.wrapper}>
      <SidebarComponent />
      <CalendarComponent />
    </main>
  );
}
