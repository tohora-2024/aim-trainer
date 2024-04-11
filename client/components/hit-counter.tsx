import React from 'react'

interface HitCounterProps {
  hitCount: number
}

const HitCounter: React.FC<HitCounterProps> = ({ hitCount }) => {
  return (
    <div className="hit-counter">
      <p>Hits: {hitCount}</p>
    </div>
  )
}

export default HitCounter
