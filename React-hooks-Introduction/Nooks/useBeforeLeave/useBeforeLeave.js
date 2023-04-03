export const useBeforeLeave = (onBefore) => {
    const handle = (event) => {
      const { clientY } = event;
      if(clientY <= 0) { 
        onBefore();
      };
      
    };
    useEffect(() => {
      if(typeof onBefore === "function") {
        document.addEventListener("mouseout", handle);
        return () => document.removeEventListener("mouseout", handle);  
      } else {
        return;
      }
      
    }, []);
  }