
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: 2255,
    title: 'All-day event asdf asdfa sdf asdfasdf',
    start: '2020-07-20',
    end: '2020-07-28',
    editable:true,
    backgroundColor:'#FF0000',
    borderColor:'transparent' 
  },
  {
    id: 1144,
    title: 'Timed event',
    start: todayStr + 'T12:00:00'
  }
]

export function createEventId() {
  return String(eventGuid++)
}
