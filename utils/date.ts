export const months = [
  {
    short: 'Jan',
    long: 'January'
  },
  {
    short: 'Feb',
    long: 'February'
  },
  {
    short: 'Mar',
    long: 'March'
  },
  {
    short: 'Apr',
    long: 'April'
  },
  {
    short: 'May',
    long: 'May'
  },
  {
    short: 'Jun',
    long: 'June'
  },
  {
    short: 'Jul',
    long: 'July'
  },
  {
    short: 'Aug',
    long: 'August'
  },
  {
    short: 'Sep',
    long: 'September'
  },
  {
    short: 'Oct',
    long: 'October'
  },
  {
    short: 'Nov',
    long: 'November'
  },
  {
    short: 'Dec',
    long: 'December'
  }
]

const instance = () => ({
  _date: new Date(),
  setDate(date: string | null) {
		this._date = date ? new Date(date) : new Date()
		return this
	},
	get month() {
    return months[this._date.getMonth()]
  },
  get year() {
    return {
      short: this._date.getFullYear().toString().substring(0, 1),
      long: this._date.getFullYear()
    }
  }
})

const myDates = (date: string | null = null) => {
  return instance().setDate(date)
}

export default myDates
