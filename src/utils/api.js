import consts from '@/utils/consts'

export const gMaps = require('@google/maps').createClient({
  key: consts.google.key,
  Promise: Promise
})
