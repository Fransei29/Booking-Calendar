'use client';

import React from 'react';
import styles from './SidebarComponent.module.scss';
import Image from 'next/image';

/**
 * Sidebar with title, description and author info.
 * Static content only.
 */
const SidebarComponent: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.iconBox}>
        <Image
          src="/assets/IconNew.svg?v=1"
          alt="Calendar Icon"
          width={48}
          height={48}
          className={styles.icon}
        />
      </div>

      <h1 className={styles.title}>
        Booking Calendar<br />
        <span>+ Pricing</span>
      </h1>

      <p className={styles.description}>
        <span className={styles.line1}>Click on dates to add to or subtract</span>
        <span className={styles.line2}>from the total price and number of</span>
        <span className={styles.line3}>nights.</span>
      </p>

      <div className={styles.authorBox}>
        <Image
          src="/assets/Avatar.png"
          alt="Nate Greenwall"
          width={64}
          height={64}
          className={styles.avatar}
        />
        <div className={styles.authorInfo}>
          <strong>Nate Greenwall</strong>
          <p>User Experience Person</p>
          <span className={styles.communityProfile}>Community Profile</span>
        </div>
      </div>
    </aside>
  );
};

export default SidebarComponent;
