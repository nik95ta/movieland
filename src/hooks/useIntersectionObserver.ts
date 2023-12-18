import { RefObject, useEffect, useRef } from 'react';

const useIntersectionObserver = (
  callback: () => void,
  options: IntersectionObserverInit,
): RefObject<HTMLElement> => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [callback, options]);

  return ref;
};

export default useIntersectionObserver;
