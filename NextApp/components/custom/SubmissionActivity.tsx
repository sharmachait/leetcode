import React from 'react';

export default function SubmissionActivity({
  activity,
  startDate,
  endDate,
}: {
  activity: number[];
  startDate: string;
  endDate: string;
}) {
  return (
    <div
      className={
        'max-w-2xl min-w-10 p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-gray-700'
      }
    ></div>
  );
}
