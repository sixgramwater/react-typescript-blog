import React, { useRef, useLayoutEffect } from 'react';

const getScrollPosition = ({ element, useWindow}:{element?: any, useWindow?: boolean}) => {
  const isBrowser = typeof window === undefined;
  if(!isBrowser)  return { x: 0, y: 0 };
  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow 
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

// interface IUseScrollPosition {
//   effect: Function,
//   deps: Array<any>,
//   element: any,
//   useWindow: boolean,
//   wait: number,
// }

const useScrollPosition = (effect, deps, element, useWindow, wait) => {
  const position = useRef(getScrollPosition({ useWindow }));
  // a stateful value that won't trigger re-render on each state change.
  
  let throttleTimer:any = null;
  const callback = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimer = null
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if(wait) {
        if(throttleTimer === null) {
          throttleTimer = setTimeout(callback, wait);
          // useEffect中对一个变量进行赋值，在下一次渲染后这个变量将会丢失
        }
      } else {
        callback();
      }
    }  
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, deps)

  // consider Effect Hook, By default, effects run after every completed render.
}

export default useScrollPosition;