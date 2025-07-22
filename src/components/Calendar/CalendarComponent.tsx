'use client';

import React, { useState } from 'react';
import styles from './CalendarComponent.module.scss';
import { pricing } from '@/data/pricing';
import { DateInfo } from '@/types';

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

/**
 * Generates all days in April 2024 with price and selection state.
 */
const generateAprilDates = (): DateInfo[] => {
  const days: DateInfo[] = [];
  const selectedDates = [1, 2, 3, 11, 12, 13, 21, 22];
  const unavailableDates = [6, 7, 9, 10, 19, 20, 28, 29]; 
  
  for (let i = 1; i <= 30; i++) {
    const date = `2024-04-${i.toString().padStart(2, '0')}`;
    const isSelected = selectedDates.includes(i);
    const isUnavailable = unavailableDates.includes(i);
    
    days.push({
      date,
      price: isUnavailable ? null : (pricing[date] ?? 10), // Default price of 10 if not in pricing
      selected: isSelected,
    });
  }
  return days;
};

const CalendarComponent: React.FC = () => {
  const [dates, setDates] = useState<DateInfo[]>(generateAprilDates());

  const toggleDate = (dateStr: string) => {
    setDates(prev =>
      prev.map(d =>
        d.date === dateStr && d.price !== null
          ? { ...d, selected: !d.selected }
          : d
      )
    );
  };

  const selectedDates = dates.filter(d => d.selected);
  const totalNights = selectedDates.length;
  const totalCost = selectedDates.reduce((sum, d) => sum + (d.price || 0), 0);

  const firstDayOfMonth = 1; // April 1st is Monday, so we need 1 empty cell (Sunday)
  const totalDays = 30;
  const totalCells = firstDayOfMonth + totalDays;
  const totalRows = Math.ceil(totalCells / 7);

  return (
    <div className={styles.container}>
      <h2>Online Booking</h2>
      <p className={styles.month}>APRIL 2024</p>

      <div className={styles.calendarGrid} style={{ gridTemplateRows: `repeat(${totalRows}, 1fr)` }}>
        {DAYS.map(day => (
          <div key={day} className={styles.dayLabel}>
            {day}
          </div>
        ))}

        {/* Empty cells before April 1st */}
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`} className={styles.emptyCell}></div>
        ))}

        {dates.filter(({ date }) => {
          const day = parseInt(date.split('-')[2]); // Extract day directly from YYYY-MM-DD format
          return day <= 30; // Explicitly filter out day 31
        }).map(({ date, price, selected }) => {
          const day = parseInt(date.split('-')[2]); // Extract day directly from YYYY-MM-DD format
          const isUnavailable = price === null;

          return (
            <button
              key={date}
              className={`${styles.dateCell} ${selected ? styles.selected : ''} ${
                isUnavailable ? styles.unavailable : ''
              }`}
              onClick={() => toggleDate(date)}
              disabled={isUnavailable}
            >
              <span className={styles.dayNumber}>{day}</span>
              <span className={styles.price}>
                {price !== null ? `$${price}` : '--'}
              </span>
            </button>
          );
        })}
      </div>

      <div className={styles.totalBox}>
        <div className={styles.selectBox}>
          <span>Select Dates To</span>
          <span>See Total Cost</span>
        </div>
        <div className={styles.totalInfo}>
          <span>Total for {totalNights} night{totalNights !== 1 ? 's' : ''}</span>
          <span className={styles.totalPrice}>${totalCost}</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
