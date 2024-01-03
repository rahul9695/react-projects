/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from 'react';
import '../App.css';

function Loader(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStyle, setAnimationStyle] = useState({ width: '0%' });
  const loaderRef = useRef(null);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const percentage = parseInt(props.percentage, 10);
    setAnimationStyle({ width: isVisible ? `${percentage}%` : '0%' });
  }, [isVisible, props.percentage]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this value based on when you want the animation to trigger
    });

    observer.observe(loaderRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='loaderComponent'>
      <h4>
        {props.title} <span>{props.percentage}</span>
      </h4>
      <div className="loaderBg" ref={loaderRef}>
        <div style={animationStyle} className='loaderBar'></div>
      </div>
    </div>
  );
}

export default Loader;

