
export default function period() {
  const time = new Date();
  const hora = time.getHours()
  // chamar hora pelo date.js
  

  if(hora >= 18) {
    return `noite`
  } if (hora >= 12) {
    return `tarde`
  } if (hora >= 0) {
    return `manha`
  }

}

