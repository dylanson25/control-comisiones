const useTexTransform = () => {
  const formatPrice = (number: number) =>
    new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(number)
  return {
    formatPrice
  }
}

export default useTexTransform
