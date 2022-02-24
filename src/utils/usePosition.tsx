// import {useEffect, useState} from 'react';

// export function useCurrentPosition() {
//   const [position, setPosition] = useState();
//   const [error, setError] = useState();

//   useEffect(() => {
//     let canceled = false;
//     if (window !== undefined) {
//       window.navigator.geolocation.getCurrentPosition(
//         (pos: any) => {
//           if (!canceled) {
//             setPosition(position);
//           }
//         },
//         (e: any) => {
//           if (!canceled) {
//             setError(error);
//           }
//         },
//       );
//     }
//     return () => {
//       canceled = true;
//     };
//   }, [error, position]);

//   return [position, error];
// }

// export {};
