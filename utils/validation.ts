const validating = (key: string, value: any, rules: any) => {
  if (rules.required) {
    if (value === '') {
      return {
        message: rules.message ? rules.message : 'Please fill out this form!',
        property: key
      }
    } else if (rules.email) {
      const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
      if (!isEmail) {
        return {
          message: rules.message ? rules.message : 'Your email is not valid!',
          property: key
        }
      }
    } else if (rules.maxLength && value.length > rules.maxLength) {
      return {
        message: rules.message ? rules.message : `This field is olny accept ${rules.maxLength} characters!`,
        property: key
      }
    } else if (rules.minLength && value.length > rules.minLength) {
      return {
        message: rules.message ? rules.message : `This field must have at least ${rules.minLength} character!`,
        property: key
      }
    }
  }
  return null
}

export const useValidator = (rules: any, state: any) => {
  const instanceForm = () => ({
    _errors: [],
    get errors() {
      return this._errors
    },
    get invalid() {
      return this.errors.length ? true : false
    },
    validate() {
      for (let key in rules) {
        const result = validating(key, state[key], rules[key])
        if (result) {
          (this as any)._errors.push({...result})
        }
      }
    },
    reset() {
      this._errors = []
    }
  })
  const formRules = instanceForm()

  const extractRules: any = {}
  for (let key in rules) {
    const instanceRules = () => ({
      _model: state[key],
      path: key,
      _errors: [...formRules._errors].filter((item: any) => item.property === key),
      get errors() {
        return this._errors
      },
      get invalid() {
        return this.errors.length ? true : false
      },
      get message() {
        return ''
      },
      validate() {
        const result = validating(key, state[key], rules[key])
        if (result) {
          (this as any)._errors.push({...result})
        }
      },
      reset() {
        this._errors = []
        formRules._errors = [...formRules._errors].filter((item: any) => item.property !== key)
      }
    })
    extractRules[key] = instanceRules()
  }
  return { ...formRules, ...extractRules }
}
