// @ts-nocheck
export default function consultaCores(dataCores: any) {
  console.log(dataCores);
    for (const [key, value] of Object.entries(dataCores[0])) {        
        if (
          key !== 'id' &&
          key !== 'createdAt' &&
          key !== 'updatedAt' &&
          key !== 'deletedAt'
        ) {
          sessionStorage.setItem(key, value);
          document.documentElement.style.setProperty(`--${key}`, value);
        }
      }
}
