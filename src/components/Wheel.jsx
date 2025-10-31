import React, { useState } from 'react';

const numbers = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27,
  13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1,
  20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26
];

const radius = 150;
const center = 200;

function getCoordinates(index, total, r) {
  const angle = (2 * Math.PI * index) / total - Math.PI / 2;
  return {
    x: center + r * Math.cos(angle),
    y: center + r * Math.sin(angle),
    angle: (angle * 180) / Math.PI
  };
}

const Wheel = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleInputChange = (e) => {
    const num = parseInt(e.target.value, 10);
    if (!isNaN(num)) {
      setSelectedNumber(num);
    } else {
      setSelectedNumber(null);
    }
  };

  return (
    <div style={{ textAlign: 'center' }} className='bg-dark'>
      <h2>Roulette Wheel</h2>
      <input
        type="number"
        placeholder="Enter number"
        onChange={handleInputChange}
        style={{ padding: '8px', marginBottom: '20px' }}
      />

      <svg width={400} height={400}>
        <circle cx={center} cy={center} r={radius} fill="#222" stroke="black" strokeWidth={5} />
        {numbers.map((num, idx) => {
          const { x, y, angle } = getCoordinates(idx, numbers.length, radius - 20);

          const isSelected = num === selectedNumber;

          return (
            <g
              key={num}
              onClick={() => setSelectedNumber(num)}
              style={{ cursor: 'pointer' }}
            >
              <text
                x={x}
                y={y}
                fill={isSelected ? 'gold' : 'white'}
                fontWeight={isSelected ? 'bold' : 'normal'}
                fontSize={isSelected ? '18' : '14'}
                textAnchor="middle"
                alignmentBaseline="middle"
                transform={`rotate(${angle}, ${x}, ${y})`}
                style={{
                  textShadow: isSelected ? '0 0 6px gold' : 'none'
                }}
              >
                {num}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default Wheel;
