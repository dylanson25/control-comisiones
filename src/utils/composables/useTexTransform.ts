import moment from 'moment'
import { Timestamp } from 'firebase/firestore'
import type { TimestampObject } from '@/components/props'

const useTexTransform = () => {
  const formatPrice = (number: number) =>
    new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(number)
  const formatFirebaseUnitTime = (_timestamp: TimestampObject) => {
    const date = new Timestamp(_timestamp.seconds, _timestamp.nanoseconds).toDate()
    return moment(date).format('DD/MM/YYYY HH:MM')
  }
  return {
    formatPrice,
    formatFirebaseUnitTime
  }
}

export default useTexTransform
