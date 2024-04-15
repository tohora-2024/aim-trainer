import React from 'react'

interface HitCounterProps {
  hitCount: number
}

export const HitCounter: React.FC<HitCounterProps> = ({ hitCount }) => {
  return (
    <div className="hit-counter-container">
      <p>
        <strong className="text-grid">Hits:</strong> {hitCount}
      </p>
    </div>
  )
}
